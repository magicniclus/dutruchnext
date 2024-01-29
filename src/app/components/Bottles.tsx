import React, {useState, useRef} from 'react';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bottle= [
    {
        title: 'Château dutruch grand poujeaux',
        image: '/bouteilles/grand-poujeaux.png',
    },{
        title: 'Le petit dutruch',
        image: '/bouteilles/petit-dutruch.png',
    },{
        title: 'Cuvée Collection',
        image: '/bouteilles/collection.png',
    },{
        title: 'GAMME «PUR»',
        image: '/bouteilles/pur.png',
    }
]

interface BottlesProps {
    lang: "fr" | "eng";
}

const Bottles = ({lang}: BottlesProps) => {

    const [bottleIdx, setBottleIdx] = useState<number | null>(null);

    const bottleRef = useRef(null);

    const handleBottleInformations = (index: number) => {
        console.log(index);
        setBottleIdx(index);
    }

    const cardBottleOne = () => {
        if (lang === "fr") {
            return (
                <>
                    <div className="flex flex-col">
                        <div className='flex md:items-start items'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">Château dutruch grand poujeaux</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 text-[20px] font-bold'>Porte drapeau de la propriété, il est l’expression même de notre terroir. Fruit d’un assemblage à dominance de Cabernet-Sauvignon au style des grands vins du Médoc, il se démarque par sa fraîcheur, sa finesse et son élégance.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/grand-poujeaux.png" alt="grand-poujeaux" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 80 à 120 000 bouteilles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white  text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase  text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% graves garonnaises (plateau de Grand Poujeaux)</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% terres argilo-calcaires</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha de vignoble avec 8 500 / 10 000 pieds/ha</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 29 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>vendanges manuelles</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 mois dont 12 en barriques de chêne français</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>1/3 de barriques neuves, 1/3 de barriques de 1 vin, 1/3 de barriques de 2 vins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1  text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                Si le boisé du chêne français est indispensable à la précision et la structure tannique, il est essentiel pour nous qu’il ne soit qu’un support à l’expression du vin et non l’inverse.
                                <ul className=''>
                                     <li className='flex items-start'> <div className="mr-2 min-w-4 h-0.5 bg-red mt-3"></div>Dans sa jeunesse, le Château Dutruch Grand Poujeaux présente des arômes de fruits rouges et noirs frais et croquants, avec de subtiles notes grillées et torréfiées. La bouche est suave, fraîche et précise. Les tanins, présents mais bien intégrés, sont d’une grande persistance.</li>
                                    <li className='flex items-start'> <div className="mr-2 min-w-4 h-0.5 bg-red mt-3"></div>Avec l’âge, l’aromatique évolue vers des notes truffées, animales et mentholées.
                                        Nous vous conseillons d’attendre au minimum 3 à 5 ans, mais le potentiel de garde peut être impressionnant en fonction des millésimes.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                             <>
                    <div className="flex flex-col">
                        <div className='flex md:items-start items'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">Château dutruch grand poujeaux</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 text-[20px] font-bold'>Porte drapeau de la propriété, il est l’expression même de notre terroir. Fruit d’un assemblage à dominance de Cabernet-Sauvignon au style des grands vins du Médoc, il se démarque par sa fraîcheur, sa finesse et son élégance.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/grand-poujeaux.png" alt="grand-poujeaux" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 80 à 120 000 bouteilles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white  text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase  text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% graves garonnaises (plateau de Grand Poujeaux)</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% terres argilo-calcaires</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha de vignoble avec 8 500 / 10 000 pieds/ha</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 29 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>vendanges manuelles</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 mois dont 12 en barriques de chêne français</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>1/3 de barriques neuves, 1/3 de barriques de 1 vin, 1/3 de barriques de 2 vins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1  text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                Si le boisé du chêne français est indispensable à la précision et la structure tannique, il est essentiel pour nous qu’il ne soit qu’un support à l’expression du vin et non l’inverse.
                                <ul className=''>
                                     <li className='flex items-start'> <div className="mr-2 min-w-4 h-0.5 bg-red mt-3"></div>Dans sa jeunesse, le Château Dutruch Grand Poujeaux présente des arômes de fruits rouges et noirs frais et croquants, avec de subtiles notes grillées et torréfiées. La bouche est suave, fraîche et précise. Les tanins, présents mais bien intégrés, sont d’une grande persistance.</li>
                                    <li className='flex items-start'> <div className="mr-2 min-w-4 h-0.5 bg-red mt-3"></div>Avec l’âge, l’aromatique évolue vers des notes truffées, animales et mentholées.
                                        Nous vous conseillons d’attendre au minimum 3 à 5 ans, mais le potentiel de garde peut être impressionnant en fonction des millésimes.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </>
            )
        }
    }

    const cardBottleTwo = () => {
        if (lang === "fr") {
            return (
                 <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-3xl text-[36px]">Le petit dutruch</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Plus qu’un second vin, issu d’un assemblage à dominance de Merlot lui apportant croquant et gourmandise, Le Petit Dutruch se veut moderne et plus accessible sur la jeunesse.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/petit-dutruch.png" alt="petit-dutruch" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 10 à 20 000 bouteilles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% graves garonnaises (plateau de Grand Poujeaux)</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% terres argilo-calcaires</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha de vignoble avec 8 500 / 10 000 pieds/ha</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 18 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>vendanges mécaniques</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 mois dont 12 en cuves béton et barriques de chêne français</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>2/3 en cuves béton et 1/3 de barriques de 3 vins et plus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                Issu de nos jeunes vignes, le Petit Dutruch est un vin de consommation. Facile à boire car sur le fruit et la fraîcheur, sa trame plus légère en feront un allié des repas mais également des apéritifs à condition qu’ils soient conséquents : charcuterie, fromage, toasts, etc.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Nous recommandons de boire le Petit Dutruch dans les 3 à 5 ans, bien qu’il puisse se conserver plus longtemps sans problème.</p>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                 <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-3xl text-[36px]">Le petit dutruch</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Plus qu’un second vin, issu d’un assemblage à dominance de Merlot lui apportant croquant et gourmandise, Le Petit Dutruch se veut moderne et plus accessible sur la jeunesse.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/petit-dutruch.png" alt="petit-dutruch" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 10 à 20 000 bouteilles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% graves garonnaises (plateau de Grand Poujeaux)</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% terres argilo-calcaires</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha de vignoble avec 8 500 / 10 000 pieds/ha</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 18 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>vendanges mécaniques</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 mois dont 12 en cuves béton et barriques de chêne français</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>2/3 en cuves béton et 1/3 de barriques de 3 vins et plus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                Issu de nos jeunes vignes, le Petit Dutruch est un vin de consommation. Facile à boire car sur le fruit et la fraîcheur, sa trame plus légère en feront un allié des repas mais également des apéritifs à condition qu’ils soient conséquents : charcuterie, fromage, toasts, etc.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Nous recommandons de boire le Petit Dutruch dans les 3 à 5 ans, bien qu’il puisse se conserver plus longtemps sans problème.</p>
                        </div>
                    </div>
                </>
            )
        }
    }

    const cardBottleThree = () => {
        if (lang === "fr") {
            return (
                <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">CUVÉE COLLECTION</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>La cuvée Collection est née de notre envie d’explorer le plein potentiel de nos grands terroirs sur des millésimes exceptionnels. C’est une cuvée haut de gamme pour laquelle nous sommes partis à la recherche de la perfection. Chaque bouteille est unique et numérotée.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/collection.png" alt="cuvée collection" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 1 200 bouteilles (2016)</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>90% graves garonnaises profondes</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>10% argiles et argilo-calcaires</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 35 ans et plus</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>vendanges mécaniques</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>100% barriques de chêne français</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>50% de barriques neuves et 50% de barriques de 1 vin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                               Le nez de fruits mûrs, framboises, cassis est d’une grande profondeur et est complété par de subtiles arômes de bois grillé. L’attaque est franche et précise, la bouche riche, ample et fraîche. Nous retrouvons la puissance subtile des grands Médoc, le tout avec un équilibre remarquable. Les tanins sont présents mais déjà fondus, la finale est longue, fraîche et sapide.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Le potentiel de garde est supérieur à 15 ans.</p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Assemblage : 70% cabernet sauvignon – 29% merlot – 1% petit verdot</p>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                 <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">CUVÉE COLLECTION</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>La cuvée Collection est née de notre envie d’explorer le plein potentiel de nos grands terroirs sur des millésimes exceptionnels. C’est une cuvée haut de gamme pour laquelle nous sommes partis à la recherche de la perfection. Chaque bouteille est unique et numérotée.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/collection.png" alt="cuvée collection" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 1 200 bouteilles (2016)</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>90% graves garonnaises profondes</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>10% argiles et argilo-calcaires</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>âge moyen du vignoble : 35 ans et plus</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>vendanges mécaniques</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>100% barriques de chêne français</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>50% de barriques neuves et 50% de barriques de 1 vin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                               Le nez de fruits mûrs, framboises, cassis est d’une grande profondeur et est complété par de subtiles arômes de bois grillé. L’attaque est franche et précise, la bouche riche, ample et fraîche. Nous retrouvons la puissance subtile des grands Médoc, le tout avec un équilibre remarquable. Les tanins sont présents mais déjà fondus, la finale est longue, fraîche et sapide.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Le potentiel de garde est supérieur à 15 ans.</p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Assemblage : 70% cabernet sauvignon – 29% merlot – 1% petit verdot</p>
                        </div>
                    </div>
                </>
            )
        }
    }

    const cardBottleFour = () => {
        if (lang === "fr") {
            return (
                <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">GAMME « PUR »</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>La gamme « pur » est un exercice de style, une volonté de mettre en avant un ou plusieurs cépages par millésime. Tel un pantone, dont l’étiquette s’inspire, chaque lot est notre définition du cépage mis en avant, de sa typicité et de ses caractéristiques variétales.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/pur.png" alt="gamme pur" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 2 500 bouteilles (2022 - pur merlot)</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>100% terres argileuses</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>âge moyen du vignoble : 25 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>vendanges mécaniques</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>6 mois</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>30% en amphores / 70% en barriques de 1 vin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant  text-[19px]'>
                               Premier millésime de la gamme, la couleur est rouge rubis, brillant et intense. L’attaque est fraîche, la bouche est ronde et fine.
                            </p>
                            <p className='font-cormorant  text-[19px] mt-2'>La trame tannique serrée et granuleuse est l’empreinte de l’élevage en amphores. Le boisé léger apporté par les barriques est présent mais se fait discret.</p>
                            <p className='font-cormorant  text-[19px] mt-2'>Nous recommandons de boire le Pur Merlot 2022 dans les 2 à 5 ans, bien qu’il puisse se conserver plus longtemps sans problème.</p>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                               <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-[36px]">GAMME « PUR »</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Vente directe producteur</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>La gamme « pur » est un exercice de style, une volonté de mettre en avant un ou plusieurs cépages par millésime. Tel un pantone, dont l’étiquette s’inspire, chaque lot est notre définition du cépage mis en avant, de sa typicité et de ses caractéristiques variétales.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/pur.png" alt="gamme pur" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 2 500 bouteilles (2022 - pur merlot)</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un particulier</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/cart.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a className='max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                        <img src="/icon/envelope.png" alt="cart" className='mr-3' />
                                        <p className='font-bebas bold text-white text-[20px]'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vignoble</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>100% terres argileuses</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>âge moyen du vignoble : 25 ans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>vendanges mécaniques</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>cuves béton et inox thermorégulées</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>macérations de 17 à 25 jours</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>ÉLEVAGE</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>6 mois</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>30% en amphores / 70% en barriques de 1 vin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px]'>DÉGUSTATION</h3>
                            <p className='font-cormorant  text-[19px]'>
                               Premier millésime de la gamme, la couleur est rouge rubis, brillant et intense. L’attaque est fraîche, la bouche est ronde et fine.
                            </p>
                            <p className='font-cormorant  text-[19px] mt-2'>La trame tannique serrée et granuleuse est l’empreinte de l’élevage en amphores. Le boisé léger apporté par les barriques est présent mais se fait discret.</p>
                            <p className='font-cormorant  text-[19px] mt-2'>Nous recommandons de boire le Pur Merlot 2022 dans les 2 à 5 ans, bien qu’il puisse se conserver plus longtemps sans problème.</p>
                        </div>
                    </div>
                </>
            )
        }
    }

    const handleBottleText = (index: number) => {
        switch (index) {
            case 0:
                return cardBottleOne()  
            case 1:
                return cardBottleTwo()
            case 2:
                return cardBottleThree()
            case 3:
                return cardBottleFour()
            default:
                break;
        }
    }

    return (
        <>
            <section className="mx-auto flex flex-col max-w-5xl py-10 px-4 min-h-[392px] w-full">
                <div className='w-full flex justify-between flex-col md:flex-row' ref={bottleRef}>
                    {bottle.map((bottle, index) => (
                        <div key={index} className='group relative flex-1 flex flex-col items-center md:w-[22%] justify-between font-bebas md:mt-0 mt-10'>
                            <div className='relative'>
                                <img 
                                    src={bottle.image} 
                                    alt={bottle.title} 
                                    className={"h-[474px] object-cover transition-transform duration-300 ease-in-out md:hover:scale-110  md:plus-hover:scale-110 md:group-hover:scale-110" + (index === bottleIdx ? " scale-110" : "")}
                                />
                                <div 
                                    className={`p-2 bg-gray/30 rounded-full absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer plus ${index !== bottleIdx ? "opacity-100" : "opacity-0"}`} 
                                    onClick={()=>handleBottleInformations(index)}
                                >
                                    <img src="/icon/plus.png" alt="Plus" />
                                </div>
                            </div>
                           <h2 className='text-text text-center uppercase max-w-[70%] font-bold text-2xl transition-colors duration-300 ease-in-out md:group-hover:text-red'>
                                {bottleIdx === null || bottleIdx < 0 || bottleIdx > 3 ? (
                                    <>
                                        {index === 0 && <><span>CHÂTEAU DUTRUCH</span><br /><span>GRAND POUJEAUX</span></>}
                                        {index === 1 && <><span>LE PETIT</span><br /><span>DUTRUCH</span></>}
                                        {index === 2 && <><span>CUVÉE</span><br /><span>COLLECTION</span></>}
                                        {index === 3 && <><span>GAMME</span><br /><span>«PUR»</span></>}
                                    </>
                                ) : (
                                    index !== bottleIdx && (
                                        <>
                                            {index === 0 && <><span>CHÂTEAU DUTRUCH</span><br /><span>GRAND POUJEAUX</span></>}
                                            {index === 1 && <><span>LE PETIT</span><br /><span>DUTRUCH</span></>}
                                            {index === 2 && <><span>CUVÉE</span><br /><span>COLLECTION</span></>}
                                            {index === 3 && <><span>GAMME</span><br /><span>«PUR»</span></>}
                                        </>
                                    )
                                )}
                            </h2>
                            <div className={`absolute ${index === bottleIdx ? "h-[160px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[90px]"} w-0.5 bg-red -bottom-28 md:flex hidden`}></div>
                            <div className='mx-auto flex flex-col max-w-5xl py-2 px-4 w-full'>
                                {
                                    bottleIdx !== null && bottleIdx === index && (
                                        <div className={`md:hidden relative w-full min-h-[500px] border border-red mx-auto flex max-w-5xl p-5 mt-10 bg-white z-10 transition duration-150 ease-in-out ${bottleIdx !== null ? "opacity-100" : "opacity-0" }`}>
                                            <div className={`absolute ${index === bottleIdx ? "h-[50px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[50px]"} w-0.5 bg-red -top-[50px] md:hidden flex left-1/2 transform -translate-x-1/2 `}></div>
                                            <div className='absolute p-1 top-3 md:top-5 right-3 md:right-5 rounded-full border border-red cursor-pointer hover:scale-105 transition duration-300 ease-in-out' onClick={()=>{setBottleIdx(null)}}><img src="/icon/close.png" /></div>
                                            {
                                                handleBottleText(bottleIdx)
                                            }   
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='mx-auto flex flex-col max-w-5xl py-2 px-4 w-full'>
                {
                    bottleIdx !== null && (
                        <div className={`relative w-full border border-red mx-auto md:flex hidden max-w-5xl p-5 bg-white z-10 transition duration-300 ease-in-out ${bottleIdx !== null ? "" : "hidden"}`}>
                            <div className='absolute p-1 top-5 right-5 rounded-full border border-red cursor-pointer hover:scale-105 transition duration-300 ease-in-out' onClick={()=>{setBottleIdx(null)}}>
                                <img src="/icon/close.png" />
                            </div>
                            {
                                handleBottleText(bottleIdx)
                            }
                        </div>
                    )
                }
            </section>
            <div className={`md:flex hidden w-full min-h-[280px] bg-blue ${bottleIdx !== null ? "mt-0" : "mt-20"}`} style={{ transform: 'translateY(-20px)' }}>
                <img src="/background/bouteille.png" className='w-full' />
            </div>
        </>
    );
};

export default Bottles;