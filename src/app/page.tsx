"use client";

import { useState, useEffect } from "react";

import { useRouter } from 'next/navigation'

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Lightbox from "./components/Lightbox";
import Bottles from "./components/Bottles";
import Footer from "./components/Footer";

import { RootState } from '@/redux/store';

import { useSelector, useDispatch } from 'react-redux';
import { setValidation } from '@/redux/validationOld';

import Descritption from "./components/Descritpion";
import Formulaire from "./components/Formulaire";

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = (error) => reject(error);
  });
};

export default function Home() {

  const dispatch = useDispatch();

  type validationAge = true | false | null;
  const validationAge = useSelector((state: RootState) => state.validationAge);

  const [imagesLoaded, setImagesLoaded] = useState(0);
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    // URLs des images à charger
    const imageSources = [
      '/logo/logo-hero.png',
      '/logo/logo-moulis-medoc.png',
    ];

    // Précharger toutes les images et mettre à jour l'état une fois chargées
    Promise.all(imageSources.map(src => preloadImage(src)))
      .then(() => {
        // Toutes les images sont chargées
        setImagesLoaded(2)
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des images", error);
      });
  }, []);
  
  const [showBackground, setShowBackground] = useState(false);

  const [showContent, setShowContent] = useState<boolean | null>(null);
  const [image, setImage] = useState<number>(0);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const isClient = typeof window === "object";

  const router = useRouter();
    
  useEffect(() => {
    const handleResize = () => setShowBackground(window.innerWidth < 2000);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isClient) { 
        const handleScroll = () => {
            if (!showContent || showContent === null) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };
        handleScroll(); 
        return () => {
            document.body.style.overflow = '';
        };
      }
  }, [showContent]); 

  // Sélectionnez la clé de langue actuelle de l'état Redux
  type LanguageKey = 'fr' | 'eng';
  const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

   useEffect(() => {
    // Vérifiez si une réponse est déjà enregistrée dans localStorage
    const storedResponse = localStorage.getItem('showContent');
    if (storedResponse) {
      setShowContent(storedResponse === 'true');
    }
  }, []);

  const validationPage = () => {
    dispatch(setValidation(true));
    setShowContent(true);
    localStorage.setItem('showContent', 'true'); // Stockez la réponse dans localStorage
  };

  const refuPage = () => {
    dispatch(setValidation(false));
    setShowContent(false);
    router.push('/refus');
    localStorage.setItem('showContent', 'false'); // Stockez la réponse dans localStorage
  };

    const handleImageLoad = () => {
      setImagesLoaded(prev => prev + 1);
    };

   useEffect(() => {
    // Si toutes les images sont chargées, mettez à jour l'état en conséquence
    if (imagesLoaded >= 2) { // Adaptez ce nombre au nombre d'images que vous attendez
      setShowLoader(false);
    }
  }, [imagesLoaded]);

  return (
    <>
     <style jsx>{`
          .background-limited::before {
           content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('/background/dessin-marie.jpg') top center no-repeat;
            opacity: 0.4;
            background-size: 100% auto;
            max-height: 90%; 
            animation: background 0.5s ease-in-out 0.5s;
            z-index: -1;
          }
          .background-limited {
            position: relative;
          }
          @keyframes background {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.6;
            }
          }
        .backgournTwo::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.5;
          background: url('/background/dessin-marie.jpg') top center no-repeat;
          background-size: 100% auto;
          max-height: 100%; // Hauteur maximale de l'arrière-plan
          z-index: -1;
        }
      `}</style>
      <div className="relative">
          {
            (!showContent || showContent === null) && (
              <div className={`w-full h-screen fixed bg-white md:pt-20 md:py-0 py-20 flex justify-center items-center ${showBackground ? ' backgournTwo' : ''}`} style={{zIndex: "1000"}}>
                <div className={`mx-auto max-w-7xl py-2 px-4 justify-center items-center min-h-[392px] w-full ${!showLoader ? "opacity-100" : "opacity-0"}`} style={{zIndex: "2000"}}>
                  <div className='flex flex-col items-center'>
                      <img src='/logo/logo-hero.png' alt='Château Dutruch Grand Poujeaux' className="w-[300px] h-auto" onLoad={handleImageLoad} />
                      <div className="mt-10 flex items-end">
                          <div className='w-14 h-0.5 bg-red mb-1'></div>
                          <img src='/logo/logo-moulis-medoc.png' alt='moulis-en-medoc' className='mr-3 ml-3 w-[150px] h-auto' onLoad={handleImageLoad} />
                          <div className='w-14 h-0.5 bg-red mb-1'></div>
                      </div>
                      <p className="text-text font-cormorant max-w-[450px] font-bold text-lg text-center mt-10">En visitant ce site, je certifie que j’ai l’âge légal pour la consommation d’alcool dans mon pays de résidence.</p>
                      <div className="mt-5">
                        <button type="button" className="p-3 w-14  bg-red text-white text-sm rounded-l-full mr-0.5 hover:shadow-md hover:scale-105 transition duration-100 ease-in-out" onClick={validationPage}>OUI</button>
                        <button type="button" className="p-3 w-14 bg-red text-white text-sm cursor-pointer rounded-r-full ml-0.5 hover:shadow-md hover:scale-105 transition duration-100 ease-in-out" onClick={refuPage}>NON</button>
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
            <div className={`w-full md:pt-20 md:py-0 py-20 ${showBackground ? 'background-limited' : ''}`}>
              <Descritption lang={languageKey} />
              <Bottles lang={languageKey} />
            </div>
            <div className="relative">
              {
                showBackground && (
                  <img src="/background/toiture.png" alt="" className="absolute top-5 left-0 h-full w-auto -translate-y-6 object-cover md:block hidden opacity-40" />
                )
              }
              <Formulaire lang={languageKey} />
            </div>
          </main>
          <Footer />
      </div>
    </>
  );
}
