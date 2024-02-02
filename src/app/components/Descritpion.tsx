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

    const textFr = () => {
        return(
            <div className='w-full flex justify-between font-bebas md:flex-row flex-col'>
                <div className='bg-white p-7 md:w-[48%] w-full'>
                    <h2 className='uppercase text-red font-bebas text-[36px] h-[45px] ' ref={titleRef}>Château dutruch grand poujeaux</h2>
                    <h3 className='uppercase font-bebas text-[24px] text-text ' ref={subtitleRef}>de famille en famille</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRef}></div>
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
                    <h2 className='uppercase text-red font-bebas  text-[36px]  h-[45px]' ref={titleRefTwo}>Préserver l’environnement</h2>
                    <h3 className='uppercase font-bebas  text-[24px] text-text ' ref={subtitleRefTwo}>Pour atteindre l’excellence</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRefTwo}></div>
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
            <div className='w-full flex justify-between font-bebas md:flex-row flex-col'>
                <div className='bg-white p-7 md:w-[48%] w-full'>
                    <h2 className='uppercase text-red font-bebas text-[36px] h-[45px] ' ref={titleRef}>Château dutruch grand poujeaux</h2>
                    <h3 className='uppercase font-bebas text-[24px] text-text ' ref={subtitleRef}>FROM FAMILY TO FAMILY</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRef}></div>
                    </div>
                    <ul className="mt-10 font-cormorant text-[19px]">
                        <li ref={lignTextRef} className='flex'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>XIXe</span>The creation of the property by the Dutruch family.</li>
                        <li ref={lignTextRefTwo} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1868</span>The first traces of Château Dutruch Grand Poujeaux can be found in the Féret guide</li>
                        <li ref={lignTextRefThree} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1932</span>Cru Bourgeois Supérieur classification.</li>
                        <li ref={lignTextRefFour} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1966</span>Cru Bourgeois Exceptionnel classification.</li>
                        <li ref={lignTextRefFive} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1967</span>François Cordonnier (senior), former manager of the Château de Chenonceau in the Loire region buys the property from the descendants of the Dutruchs. He carefully developed the vineyard from 11 to 28 hectares</li>
                        <li ref={lignTextRefSix} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1978</span>Cru Bourgeois Exceptionnel classification.</li>
                        <li ref={lignTextRefSeven} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>1994</span>Although childless himself, François passes the property on to his nephew Jean Baptiste</li>
                        <li ref={lignTextRefEight} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>2016</span>François Cordonnier (junior) takes over the chateau, continuing his uncle’s work, a perpetual striving to improve quality.</li>
                        <li ref={lignTextRefNine} className='flex mt-1'><span className="mr-2 min-w-4 h-0.5 bg-red mt-3 "></span><span className='text-red mr-3'>2018</span>First block organically farmed, HVE3 certification </li>
                    </ul>
                </div>
                <div className='bg-white p-7 md:w-[48%] w-full md:mt-0 mt-5'>
                    <h2 className='uppercase text-red font-bebas  text-[36px] h-[45px] ' ref={titleRefTwo}>PRESERVING THE ENVIRONMENT</h2>
                    <h3 className='uppercase font-bebas  text-[24px] text-text ' ref={subtitleRefTwo}>TO ATTAIN EXCELLENCE</h3>
                    <div className='overflow-hidden'>
                        <div className="w-[84px] h-0.5 bg-red mt-2" ref={lignRefTwo}></div>
                    </div>
                    <p className='mt-10 font-cormorant text-[19px]' ref={paraphRef}>
                        If the notion of respect for the terroir is often associated with environmental measures today, we are attached to another important dimension, which is the emphasis on typicity: finesse and elegance.
                        The perpetual striving for quality obliges us to surpass ourselves in order to achieve the best out of each vintage. Over the years, our team has acquired know-how and an exact knowledge of our vineyards, enabling the production of great wines. Since 2016 this ongoing adventure has seen us improve and hone our environmental methods so that the only traces we leave are those of impeccable quality.
                    </p>
                    <div className='flex justify-between font-cormorant mt-7 w-full'>
                        <div className='w-[72%]'>
                            <p ref={paraphRefTwo} className='text-[19px]'>
                                We have been certified High Environmental Value level 3 since the 2018 vintage and have been trialing organic farming on a plot of 3.2 hectares since the same year.
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
    
    return (
        <section>
            <div className='mx-auto flex max-w-7xl py-2 px-4 min-h-[392px] w-full'>
                {
                    lang === 'fr' ? textFr() : textAng()
                }
            </div>
        </section>
    );
};

export default Descritpion;