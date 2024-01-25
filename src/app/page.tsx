"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Lightbox from "./components/Lightbox";
import Bottles from "./components/Bottles";
import Footer from "./components/Footer";

import { RootState } from '@/redux/store';

import { useSelector } from 'react-redux';

import Image from "next/image";
import { useState, useEffect } from "react";

import Descritption from "./components/Descritpion";
import Formulaire from "./components/Formulaire";

export default function Home() {
    
    const [showBackground, setShowBackground] = useState(false);
      
    useEffect(() => {
      const handleResize = () => {
      setShowBackground(window.innerWidth < 2000);
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
          <div className={`w-full md:pt-20 md:py-0 py-20 relative ${showBackground ? 'with-background' : ''}`}>
            {showBackground && (
              <div className="absolute top-0 left-0 w-full h-full">
                <img src="/background/dessin-marie.png" className="w-full h-[95%] object-cover" alt="Background" />
              </div>
            )}

            <Descritption lang={languageKey} />
            <Bottles lang={languageKey} />
          </div>
          <div className="relative min-h-[550px]">
            {
              showBackground ? <img src="/background/toiture.png" alt="" className="absolute -top-5 left-0 w-[40%] h-full object-cover" /> : ''
            }
            <Formulaire />
          </div>
        </main>
        <Footer />
    </>
  );
}
