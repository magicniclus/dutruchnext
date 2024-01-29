"use client";

import React, {useEffect, useRef} from 'react';

import Image from "next/image";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Définir les types de props pour le composant
interface DescriptionProps {
  lang: "fr" | "eng";
}

const Descritpion = ({ lang }: DescriptionProps) => {
    const backgroundRef = useRef(null);
    const titleRef= useRef(null);
    const titleRefTwo= useRef(null);
    const subtitleRef= useRef(null);
    const subtitleRefTwo= useRef(null);
    const lignRef= useRef(null);
    const lignRefTwo= useRef(null);
    const lignTextRef = useRef(null);
    const lignTextRefTwo = useRef(null);
    const lignTextRefThree = useRef(null);
    const lignTextRefFour = useRef(null);
    const lignTextRefFive = useRef(null);
    const lignTextRefSix = useRef(null);
    const lignTextRefSeven = useRef(null);
    const lignTextRefEight = useRef(null);
    const lignTextRefNine = useRef(null);
    const paraphRef = useRef(null);
    const paraphRefTwo = useRef(null);
    const logoRef = useRef(null);

    // useEffect(() => {
    //     //Timeline
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //         trigger: titleRef.current, // Vous pourriez vouloir ajuster ceci selon le meilleur élément déclencheur
    //         start: 'top 70%', // Ajustez selon vos besoins
    //         toggleActions: 'play none none none',
    //         immediateRender: true,
    //         // markers: true
    //         }
    //     });

    //     // Ajouter des animations à la timeline
    //     tl.fromTo(backgroundRef.current, {opacity: 0}, {opacity: 1, duration: 0.2})
    //     tl.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0)
    //     .fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.2) 
    //     .fromTo(titleRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0)
    //     .fromTo(subtitleRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.2)
    //     .fromTo(lignRef.current, { x: -100 }, { x: 0, duration: 0.7 }, 0.3)
    //     .fromTo(lignRefTwo.current, { x: -100 }, { x: 0, duration: 0.7 }, 0.3)
    //             .fromTo(lignTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3)
    //     .fromTo(lignTextRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.45s
    //     .fromTo(lignTextRefThree.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.5s
    //     .fromTo(lignTextRefFour.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.55s
    //     .fromTo(lignTextRefFive.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.6s
    //     .fromTo(lignTextRefSix.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.65s
    //     .fromTo(lignTextRefSeven.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.7s
    //     .fromTo(lignTextRefEight.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.75s
    //     .fromTo(lignTextRefNine.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.8s
    //     .fromTo(paraphRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.4)
    //     .fromTo(paraphRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.6)
    // }, []);

    //  useEffect(() => {
    //     //Timeline
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //         trigger: titleRef.current, // Vous pourriez vouloir ajuster ceci selon le meilleur élément déclencheur
    //         start: 'top 80%', // Ajustez selon vos besoins
    //         toggleActions: 'play none none none',
    //         // markers: true
    //         }
    //     });

    //     // Ajouter des animations à la timeline
    //     tl.fromTo(backgroundRef.current, {opacity: 0}, {opacity: 1, duration: 0.2})
    //     tl.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0)
    //     .fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.2) 
    //     .fromTo(titleRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0)
    //     .fromTo(subtitleRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.2)
    //     .fromTo(lignRef.current, { x: -100 }, { x: 0, duration: 0.7 }, 0.3)
    //     .fromTo(lignRefTwo.current, { x: -100 }, { x: 0, duration: 0.7 }, 0.3)
    //     .fromTo(lignTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3)
    //     .fromTo(lignTextRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.45s
    //     .fromTo(lignTextRefThree.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.5s
    //     .fromTo(lignTextRefFour.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.55s
    //     .fromTo(lignTextRefFive.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.6s
    //     .fromTo(lignTextRefSix.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.65s
    //     .fromTo(lignTextRefSeven.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.7s
    //     .fromTo(lignTextRefEight.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.75s
    //     .fromTo(lignTextRefNine.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.3) // Commence à 0.8s
    //     .fromTo(paraphRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.4)
    //     .fromTo(paraphRefTwo.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, 0.6)
    // }, [lang]);

    const textFr = () => {
        return(
            <div className='w-full flex justify-between font-bebas md:flex-row flex-col'>
                <div className='bg-white p-7 md:w-[48%] w-full'>
                    <h2 className='uppercase text-red font-bebas text-[36px] ' ref={titleRef}>Château dutruch grand poujeaux</h2>
                    <h3 className='uppercase font-bebas text-[24px] text-text ' ref={subtitleRef}>de famille en famille</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-4" ref={lignRef}></div>
                    </div>
                    <ul className="mt-10 font-cormorant text-[19px]">
                        <li ref={lignTextRef} className='flex'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>XIXe</span>Création de la propriété par la famille Dutruch.</li>
                        <li ref={lignTextRefTwo} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1868</span>Premières traces du Château Dutruch Grand Poujeaux dans le guide Féret. </li>
                        <li ref={lignTextRefThree} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1932</span>Classement au Cru Bourgeois Supérieur.</li>
                        <li ref={lignTextRefFour} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1966</span>Classement au Cru Bourgeois Exceptionnel.</li>
                        <li ref={lignTextRefFive} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1967</span>François Cordonnier (senior), ancien régisseur du Château de Chenonceau dans la Loire, achète la propriété propriété et porte le vignoble de 11 à 28 ha.</li>
                        <li ref={lignTextRefSix} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1978</span>Classement au Cru Bourgeois Exceptionnel.</li>
                        <li ref={lignTextRefSeven} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1994</span>Sans enfant, il transmet la propriété à son neveu Jean-Baptiste.</li>
                        <li ref={lignTextRefEight} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>2016</span>François Cordonnier (Junior) reprend le flambeau pour continuer le travail entamé par son oncle dans la recherche perpétuelle de qualité.</li>
                        <li ref={lignTextRefNine} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>2018</span>Première parcelle en agriculture biologique et certification Haute Valeur Environnementale</li>
                    </ul>
                </div>
                <div className='bg-white p-7 md:w-[48%] w-full md:mt-0 mt-5'>
                    <h2 className='uppercase text-red font-bebas  text-[36px] ' ref={titleRefTwo}>Préserver l’environnement</h2>
                    <h3 className='uppercase font-bebas  text-[24px] text-text ' ref={subtitleRefTwo}>Pour atteindre l’excellence</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-4" ref={lignRefTwo}></div>
                    </div>
                    <p className='mt-10 font-cormorant text-[19px]' ref={paraphRef}>
                        Si la notion de respect du terroir est aujourd’hui souvent associée à des mesures environnementales, nous sommes attachés à une autre dimension importante qui est la mise en exergue de sa typicité : la finesse, l’élégance. La recherche perpétuelle de qualité nous pousse à nous surpasser et à tirer le meilleur de chaque millésime. Au fil des années, notre équipe a acquis un savoir-faire et une connaissance précise de nos terroirs permettant l’élaboration de grands vins. La suite de l’aventure s’inscrit depuis 2016 dans l’approfondissement de mesures environnementales pour que la seule empreinte que nous laissions soit celle de la qualité irréprochable de nos vins.
                    </p>
                    <div className='flex justify-between font-cormorant mt-7 w-full'>
                        <div className='w-[72%]'>
                            <p ref={paraphRefTwo} className='text-[19px]'>
                                Nous sommes certifiés Haute Valeur Environnementale de niveau 3 depuis le millésime 2018 et menons un essai en agriculture biologique sur 3,2 hectares depuis 2018.
                            </p>
                        </div>
                        <div ref={logoRef}>
                            <Image src='/logo/logo-HVE.png' alt="HVE" width={120} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const textAng = () => {
        return(
            <>
                <div></div>
            </>
        )
    }
    
    return (
        <section>
            <div className='mx-auto flex max-w-5xl py-2 px-4 min-h-[392px] w-full'>
                {
                    lang === 'fr' ? textFr() : textAng()
                }
            </div>
        </section>
    );
};

export default Descritpion;