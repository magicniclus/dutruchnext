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

    const [showContent, setShowContent] = useState<boolean | null>(null);

    const isClient = typeof window === "object";
      
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

    useEffect(() => {
      if (isClient) { 
          // Gestion du blocage du défilement
          const handleScroll = () => {
              if (!showContent || showContent === null) {
                  document.body.style.overflow = 'hidden';
              } else {
                  document.body.style.overflow = '';
              }
          };

          handleScroll(); // Appel initial pour définir l'état correct du défilement

          // Ajouter les gestionnaires d'événements, etc.

          return () => {
              // Nettoyage
              document.body.style.overflow = ''; // Assurez-vous de réinitialiser le défilement lors du démontage
          };
        }
    }, [showContent]); // Dépendance sur showContent


    // Sélectionnez la clé de langue actuelle de l'état Redux
    type LanguageKey = 'fr' | 'eng';
    const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

    const validationPage = () => {
      setShowContent(true);
    }

     const refuPage = () => {
      setShowContent(false);
    }

  return (
    <div className="relative">
        {
          (!showContent || showContent === null) && (
            <div className={`w-full h-screen fixed bg-white md:pt-20 md:py-0 py-20 flex justify-center items-center ${showBackground ? 'bg-[url("/background/dessin-marie.png")] bg-top' : ''}`} style={{zIndex: "1000"}}>
              <div className='mx-auto flex max-w-5xl py-2 px-4 justify-center items-center min-h-[392px] w-full'>
                <div className='flex flex-col items-center'>
                    <Image src='/logo/logo-hero.png' alt='Château Dutruch Grand Poujeaux' width={300} height={200} />
                    <div className="mt-10 flex items-end">
                        <div className='w-14 h-0.5 bg-red mb-1'></div>
                        <Image src='/logo/logo-moulis-medoc.png' alt='moulis-en-medoc' width={150} height={50} className='mr-3 ml-3' />
                        <div className='w-14 h-0.5 bg-red mb-1'></div>
                    </div>
                    <p className="text-text font-cormorant max-w-[450px] font-bold text-lg text-center mt-10">En visitant ce site, je certifie que j’ai l’âge légal pour la consommation d’alcool dans mon pays de résidence.</p>
                    <div className="mt-5">
                      <button type="button" className="p-3 bg-red text-white text-sm rounded-l-full mr-0.5 hover:shadow-md hover:scale-105 transition duration-100 ease-in-out" onClick={validationPage}>OUI</button>
                      <button type="button" className="p-3 bg-red text-white text-sm cursor-pointer rounded-r-full ml-0.5 hover:shadow-md hover:scale-105 transition duration-100 ease-in-out" onClick={refuPage}>NON</button>
                    </div>
                </div>
              </div>
            </div>
          )
        }
        <header>
          <Nav />
        </header>
        <main className="">
          <Hero />
          <Who lang={languageKey} />
          <Lightbox />
          <div className={`w-full md:pt-20 md:py-0 py-20 ${showBackground ? 'bg-[url("/background/dessin-marie.png")] bg-top' : ''}`} style={{ backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}>
            <Descritption lang={languageKey} />
            <Bottles lang={languageKey} />
          </div>
          <div className="relative">
            {
              showBackground && (
                <img src="/background/toiture.png" alt="" className="absolute -top-[0px] max-w-[700px] left-0 w-full h-full object-cover md:block hidden" />
              )
            }
            <Formulaire lang={languageKey} />
          </div>
        </main>
        <Footer />
    </div>
  );
}
