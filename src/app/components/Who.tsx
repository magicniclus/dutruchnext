import React, { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Définir les types de props pour le composant
interface WhoProps {
  lang: "fr" | "eng";
}

const Who = ({ lang }: WhoProps) => {
  const [showBackground, setShowBackground] = useState(false);
  
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRefOne = useRef(null);
  const textRefTwo = useRef(null);
  const buttonRef = useRef(null);
  const lignRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth < 2000);
    };

    // Définir l'état initial en fonction de la largeur de la fenêtre
    handleResize();

    // Ajouter le gestionnaire d'événements pour le redimensionnement
    window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6 })
    gsap.fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6 }) 
    gsap.fromTo(textRefOne.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6}) 
    gsap.fromTo(textRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6 }) 
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.6 }) 
    gsap.fromTo(lignRef.current, { x: -100 }, { x: 0, duration: 0.6, delay: 0.6 })
  }, [])

  const textFr = ()=>{
    return (
        <section>
            <h1 className="text-red font-bebas text-[36px] opacity-0 h-[45px]" ref={titleRef}>Grand poujeaux</h1>
            <h2 className='font-bebas text-[24px] text-text  opacity-0' ref={subtitleRef}>Le meilleur terroir de moulis-en-médoc</h2>
            <div className='overflow-hidden'>
              <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRef}></div>
            </div>
            <div ref={textRefOne} className='font-cormorant mt-10 text-text text-[19px] opacity-0 md:w-9/12'>
                <p className=''>
                  Situées à l’extrême Est de l’appellation Moulis, nos vignes sont plantées à 80% sur le plateau de Grand Poujeaux, connu pour être le meilleur terroir de Moulis, et à 20% dans des sols argilo-calcaires et sableux. Cette diversité apporte à nos vins une grande complexité et une grande richesse.
                </p>
            </div>
            <div ref={textRefTwo} className='font-cormorant mt-10 opacity-0 text-[19px]  md:w-9/12'>
                <p>
                  Le terroir Grand Poujeaux doit son excellence et sa réputation prestigieuse : à ses sols de graves profondes appelés « Terrasses de type 3 » faisant partie des tous meilleurs du Médoc, et à sa proximité avec l’estuaire de la Gironde dont les influences en termes de température et d’hygrométrie permettent une maturation optimale des raisins.
                </p>
            </div>
            <div ref={buttonRef} className=' mt-10'>
              <a href="#bottle" className='text-white bg-red py-3 px-4 rounded-full font-light text-[20px] font-bebas hover:text-red hover:bg-white hover:border-2 hover:border-red transition-all duration-150 ease-in-out'>DÉCOUVRIR NOS VINS</a>
            </div>
        </section>
    )
  }

  const textAng = ()=>{
    return (
        <section>
            <h1 className="text-red font-bebas text-[36px] opacity-0 h-[45px]" ref={titleRef}>Grand poujeaux</h1>
            <h2 className='font-bebas text-[24px] text-text  opacity-0' ref={subtitleRef}>THE BEST TERROIR OF MOULIS-EN-MÉDOC</h2>
            <div className='overflow-hidden'>
              <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRef}></div>
            </div>
            <div ref={textRefOne} className='font-cormorant mt-10 text-text text-[19px] opacity-0 md:w-9/12'>
                <p className=''>
                    Our vineyard is situated in the far east of the Moulis appellation
                </p>
                <ul>
                    <li className='flex items-start'>80% on the Grand Poujeaux plateau, recognized as the best terroir of Moulis,</li>
                    <li className='flex items-start'>20% on clay-limestone and sandy soils.</li>
                </ul>
                <p>
                    This diversity of terroir brings great complexity and richness to our wines.
                </p>
            </div>
            <div ref={textRefTwo} className='font-cormorant mt-10 opacity-0 text-[19px]  md:w-9/12'>
                <p>
                    The terroir of Grand Poujeaux owes its reputation to :
                </p>
                <ul>
                    <li className='flex items-start'>its deep gravel soils called “Type 3 terraces”, being some of the very best in the Medoc,</li>
                    <li className='flex items-start'>its proximity to the Gironde, whose influence in terms of temperature and humidity allow for optimal ripening of the grapes.</li>
                </ul>
            </div>
            <div ref={buttonRef} className=' mt-10'>
              <a href="#bottle" className='text-white bg-red py-3 px-4 rounded-full font-light text-[20px] font-bebas hover:text-red hover:bg-white hover:border-2 hover:border-red transition-all duration-150 ease-in-out'>DISCOVER OUR WINES</a>
            </div>
        </section>
    )
  }

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
          opacity: 0.6;
          margin-top: auto;
          margin-bottom: auto;
          background: url('/background/vigne.png') center right no-repeat;
          background-size: auto 100%;
          max-height: 90%; 
          z-index: -1;
        }
        @media (max-width: 768px) {
          .background-limited::before {
            display: none;
          }
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
      `}</style>
      <div className={`w-full py-20 ${showBackground ? 'background-limited' : ''}`}>
        <div className='mx-auto flex max-w-7xl py-2 px-4 min-h-[392px] w-full'>
          { lang === "fr" ? textFr() : textAng() }
        </div>
      </div>
    </>
  );
}

export default Who;
