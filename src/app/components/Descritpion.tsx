import React from 'react';

import Image from "next/image";

// Définir les types de props pour le composant
interface DescriptionProps {
  lang: "fr" | "eng";
}

const Descritpion = ({ lang }: DescriptionProps) => {

    const textFr = () => {
        return(
            <div className='w-full flex justify-between font-bebas md:flex-row flex-col'>
                <div className='bg-white p-7 md:w-[48%] w-full'>
                    <h2 className='uppercase text-red font-bebas text-3xl'>Château dutruch grand poujeaux</h2>
                    <h3 className='uppercase font-bebas text-xl text-text'>de famille en famille</h3>
                    <div className="w-[84px] h-0.5 bg-red mt-4"></div>
                    <ul className="mt-10 font-cormorant">
                        <li className='flex'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>XIXe</span>Création de la propriété par la famille Dutruch.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1868</span>Premières traces du Château Dutruch Grand Poujeaux dans le guide Féret. </li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1932</span>Classement au Cru Bourgeois Supérieur.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1966</span>Classement au Cru Bourgeois Exceptionnel.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1967</span>François Cordonnier (senior), ancien régisseur du Château de Chenonceau dans la Loire, achète la propriété propriété et porte le vignoble de 11 à 28 ha.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1978</span>Classement au Cru Bourgeois Exceptionnel.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>1994</span>Sans enfant, il transmet la propriété à son neveu Jean-Baptiste.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>2016</span>François Cordonnier (Junior) reprend le flambeau pour continuer le travail entamé par son oncle dans la recherche perpétuelle de qualité.</li>
                        <li className='flex mt-1'><span className="mr-2 w-4 h-0.5 bg-red mt-3"></span><span className='text-red mr-3'>2018</span>Première parcelle en agriculture biologique et certification Haute Valeur Environnementale</li>
                    </ul>
                </div>
                <div className='bg-white p-7 md:w-[48%] w-full md:mt-0 mt-5'>
                    <h2 className='uppercase text-red font-bebas text-3xl'>Préserver l’environnement</h2>
                    <h3 className='uppercase font-bebas text-xl text-text'>Pour atteindre l’excellence</h3>
                    <div className="w-[84px] h-0.5 bg-red mt-4"></div>
                    <p className='mt-10 font-cormorant'>
                        Si la notion de respect du terroir est aujourd’hui souvent associée à des mesures environnementales, nous sommes attachés à une autre dimension importante qui est la mise en exergue de sa typicité : la finesse, l’élégance. La recherche perpétuelle de qualité nous pousse à nous surpasser et à tirer le meilleur de chaque millésime. Au fil des années, notre équipe a acquis un savoir-faire et une connaissance précise de nos terroirs permettant l’élaboration de grands vins. La suite de l’aventure s’inscrit depuis 2016 dans l’approfondissement de mesures environnementales pour que la seule empreinte que nous laissions soit celle de la qualité irréprochable de nos vins.
                    </p>
                    <div className='flex justify-between font-cormorant mt-7 w-full'>
                        <div className='w-[72%]'>
                            <p>
                                Nous sommes certifiés Haute Valeur Environnementale de niveau 3 depuis le millésime 2018 et menons un essai en agriculture biologique sur 3,2 hectares depuis 2018.
                            </p>
                        </div>
                        <div>
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