"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Lightbox from "./components/Lightbox";

import { RootState } from '@/redux/store';

import { useSelector } from 'react-redux';

import Image from "next/image";
import { useState, useEffect } from "react";

import Descritption from "./components/Descritpion";

export default function Home() {
    
    const [showBackground, setShowBackground] = useState(false);
      
    useEffect(() => {
      const handleResize = () => {
      setShowBackground(window.innerWidth < 1440);
    };

    // Définir l'état initial en fonction de la largeur de la fenêtre
    handleResize();

    // Ajouter le gestionnaire d'événements pour le redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoyer le gestionnaire d'événements lors du démontage
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Sélectionnez la clé de langue actuelle de l'état Redux
    type LanguageKey = 'fr' | 'eng';
    const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

  return (
    <>
        <header>
          <Nav />
        </header>
        <main className="">
          <Hero />
          <Who lang={languageKey} />
          <Lightbox />
          <div className={`w-full bg-cover bg-right py-20 ${showBackground ? 'bg-[url("/background/dessin-marie.png")]' : ''}`}>
            <Descritption lang={languageKey} />
          </div>
        </main>
    </>
  );
}
