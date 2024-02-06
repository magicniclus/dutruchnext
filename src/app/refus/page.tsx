"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [image1Loaded, setImage1Loaded] = useState(true);
    const [image2Loaded, setImage2Loaded] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        setShowBackground(window.innerWidth < 2000);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <main className={`w-full h-screen fixed bg-white md:pt-20 md:py-0 py-20 flex justify-center items-center ${showBackground ? 'bg-[url("/background/dessin-marie.png")] bg-top' : ''} ${ + image1Loaded && image2Loaded ? "opacity-1" : "opacity-0"}`} style={{zIndex: "1000"}}>
                <div className={'mx-auto flex max-w-5xl py-2 px-4 justify-center items-center min-h-[392px] w-full'}>
                    <div className='flex flex-col items-center'>
                        <img
                            src='/logo/logo-hero.png'
                            alt='Château Dutruch Grand Poujeaux'
                            className="w-[300px] h-auto"
                        />
                        <div className="mt-10 flex items-end">
                            <div className='w-14 h-0.5 bg-red mb-1'></div>
                            <img
                                src='/logo/logo-moulis-medoc.png'
                                alt='moulis-en-medoc'
                                className="w-[150px] h-auto"
                            />
                            <div className='w-14 h-0.5 bg-red mb-1'></div>
                        </div>
                        <p className="text-text font-cormorant max-w-[450px] font-bold text-lg text-center mt-10">Vous n’avez pas l’âge légal autorisé pour accéder à notre site.</p>
                        <p className="text-red font-cormorant max-w-[600px] text-xs text-center mt-3">L’abus d’alcool est dangereux pour la santé, à consommer avec modération. La vente d’alcool est interdite aux mineurs.</p>
                    </div>
                </div>
            </main >    
        </>
    );
};

export default Page;