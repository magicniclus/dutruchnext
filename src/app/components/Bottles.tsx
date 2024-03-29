import React, {useState, useRef, useEffect} from 'react';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

import { BeakerIcon, EnvelopeIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

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
    const bottleDescriptionRef = useRef<HTMLDivElement>(null);

    const handleBottleInformations = (index: number) => {
        setBottleIdx(index);
    }

    useEffect(() => {
    if (bottleIdx !== null) {
        bottleDescriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
}, [bottleIdx]);

    const cardBottleOne = () => {
        if (lang === "fr") {
            return (
                <>
                    <div className="flex flex-col">
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-3xl text-[36px]">Château dutruch grand poujeaux</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Vente directe producteur</h3>
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
                                    <a href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group md:max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition-all duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'  />
                                        <p className='font-bebas text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Vous êtes un professionnel</p>
                                    </div>
                                     <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
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
                                     <li className='flex items-start mt-3'>Dans sa jeunesse, le Château Dutruch Grand Poujeaux présente des arômes de fruits rouges et noirs frais et croquants, avec de subtiles notes grillées et torréfiées. La bouche est suave, fraîche et précise. Les tanins, présents mais bien intégrés, sont d’une grande persistance.</li>
                                    <li className='flex items-start mt-3'>Avec l’âge, l’aromatique évolue vers des notes truffées, animales et mentholées.
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
                        <div className='flex'>
                            <img src="/logo/independant.png" alt="producteur indépendant" className="h-[66px] w-auto" />
                            <div className='ml-2'>
                                <h2 className="text-red font-bebas text-3xl text-[36px]">Château dutruch grand poujeaux</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Direct sales from producer</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 text-[20px] font-bold'>A pure expression of our terroir. A cabernet-based blend with great Medoc style, which stands out by its freshness, finesse and elegance.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/grand-poujeaux.png" alt="grand-poujeaux" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production : 80 to 120 000 bottles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Are you an individual</p>
                                    </div>
                                    <a  href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Order on twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Are you a professional</p>
                                    </div>
                                    <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contact the winery</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase  text-[24px]'>Terroir & vineyard</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% deep Garonne gravels (Grand Poujeaux plateau)</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% clay-limestone and sandy soils</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha of vines with 8 500 / 10 000 vines/ha</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>average age of the vines: 29 years old</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>manual harvest</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>concrete and stainless-steel temperature-controlled tanks</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>17 to 25 days macerations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase  text-[24px]'>Ageing</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 months including 12 in French oak barrels</li>
                                        <li className='flex items-center  text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>1/3 new oak, 1/3 barrels of 1 year, 1/3 barrels of 2 years</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Tasting</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                Whilst the oak character is fundamental because it provides precision and tannic structure, it is essential for us that the oak only supports the expression of the wine and not the other way around.
                                <ul className=''>
                                     <li className='flex items-start mt-3'>In its youth, Château Dutruch Grand Poujeaux presents aromas dominated by intense red and black fruits, with subtle underlying toasted and roasted notes. On the palate it is smooth yet precise, with great depth of fruit and perfect balancing acidity. The tannins, present but well integrated, are ripe and persistent.</li>
                                    <li className='flex items-start mt-3'>With age, the flavours develop and become more complex, with aromatic notes such as menthol and truffle.</li>
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
                                    <a href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                   <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
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
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Direct sales from producer</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>More than a second wine, this is a merlot-dominant blend showing crispness and delicacy. Le Petit Dutruch aims to be modern and more accessible in its youth.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/petit-dutruch.png" alt="petit-dutruch" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production: 10 to 20 000 bottles</p>
                                 <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Are you an individual</p>
                                    </div>
                                     <a  href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Order on twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Are you a professional</p>
                                    </div>
                                     <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contact the winery</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vineyard</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>10% deep Garonne gravels (Grand Poujeaux plateau)</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>90% clay-limestone and sandy soils</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>31 ha of vines with 8 500 / 10 000 vines/ha</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>average age of the vines: 29 years old</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>mechanical harvest</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>concrete and stainless-steel temperature-controlled tanks</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>17 to 25 days macerations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Ageing</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>18 months including 12 in concrete tanks and French oak barrels of 1 year or more.</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 min-w-4 h-0.5 bg-red"></div>2/3 concrete tanks and 1/3 French barrels of 3 years and more</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px] uppercase'>Tasting</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                                From our younger vines, Le Petit Dutruch is a wine for early consumption. Fruit forward with appealing acidity, its lighter structure will make it an easy accompaniment to meals, but also appetizers such as cold meats, cheese, toast, etc.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>We recommend drinking the Petit Dutruch within 3 to 5 years, although it can be stored longer with ease.</p>
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
                                <h2 className="text-red font-bebas text-3xl text-[36px]">CUVÉE COLLECTION</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Vente directe producteur</h3>
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
                                    <a href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
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
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>18 mois dont 12 en barriques de chêne français</li>
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
                                <h2 className="text-red font-bebas text-3xl text-[36px]">CUVÉE COLLECTION</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Direct sales from producer</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>The Cuvée Collection was born from our desire to realise the full potential of our great terroirs in exceptional vintages. It is a top-of-the-range vintage for which we set out in search of perfection.<br/><span className='mt-3 inline-block'>Each bottle is unique and numbered.</span></p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/collection.png" alt="cuvée collection" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production: 1200 bottles (2016)</p>
                               <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Are you an individual</p>
                                    </div>
                                    <a  href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Order on twil.fr</p>
                                    </a>
                                </div>
                                 <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Are you a professional</p>
                                    </div>
                                   <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contact the winery</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>Terroir & vineyard</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>90% deep Garonne gravels (Grand Poujeaux plateau)</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>10% clay-limestone and sandy soils</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>31 ha of vines with 8 500 / 10 000 vines/ha</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>Age of the vines: 35 + years old</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>manual harvest</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>concrete and stainless-steel temperature-controlled tanks</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>17 to 25 days macerations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 upercase text-[24px]'>Ageing</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>18 months including 12 in French oak barrels</li>
                                        <li className='flex items-center text-[19px]'> <div className="mr-2 w-4 h-0.5 bg-red"></div>50% new oak, 50% 1 year old barrels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 upercase text-[24px]'>Dégustation</h3>
                            <p className='font-cormorant text-text text-[19px]'>
                               The nose of ripe fruit, raspberries, blackcurrant is of great depth and is complemented by subtle aromas of toasted oak. A precise attack with a rich, ample palate and deliciously fresh finish. It reveals the subtle power of a great Médoc, all with remarkable balance. The tannins are present but already smooth, the finish long, fresh and flavorsome.
                            </p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Ageing potential is more than 15 years.</p>
                            <p className='font-cormorant text-text mt-2 text-[19px]'>Blend : 70% cabernet sauvignon – 29% merlot – 1% petit verdot</p>
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
                                <h2 className="text-red font-bebas text-3xl text-[36px]">GAMME « PUR »</h2>
                                <h3 className='font-bebas text-xl text-text text-[24px]'>Vente directe producteur</h3>
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
                                     <a href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Commander sur twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3 text-[20px]'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p>Vous êtes un professionnel</p>
                                    </div>
                                    <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contacter le château</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
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
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>30% en amphonres</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>70% en barriques de 1 et 2 vins</li>
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
                            <div className='ml-2 -translate-y-3'>
                                <h2 className="text-red font-bebas text-[36px]">GAMME « PUR »</h2>
                                <h3 className='font-bebas text-xl text-[24px]'>Direct sales from producer</h3>
                            </div>
                        </div>
                        <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>The “pur” range is an exercise in style, a desire to highlight one or more grape varieties per vintage. Like a Pantone, from which the label is inspired, each batch is our definition of the grape variety highlighted, its typicity and its varietal characteristics.</p>
                        <div className='mt-5 flex md:flex-row flex-col justify-between md:items-center'>
                            <img src="/bouteilles/pur.png" alt="gamme pur" className='md:h-[419px] md:w-auto w-24' />
                            <div className='flex flex-col justify-between md:ml-10 md:h-[100%]'>
                                <p className='text-red font-cormorant mt-5 font-bold text-[20px]'>Production: 2500 bottles</p>
                                <div className='flex flex-col font-cormorant text-text md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red text-[20px]"></div><p>Are you an individual</p>
                                    </div>
                                    <a  href="https://www.twil.fr/france/bordeaux/chateau-dutruch-grand-poujeaux.html" target="_blank" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <ShoppingCartIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>Order on twil.fr</p>
                                    </a>
                                </div>
                                <div className='flex flex-col font-cormorant text-text mb-10 md:mt-0 mt-5'>
                                    <div className='flex items-center mb-3'>
                                        <div className="mr-2 w-4 h-0.5 bg-red"></div><p className='  text-[20px]'>Are you a professional</p>
                                    </div>
                                    <a href="#form" className='group max-w-64 justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out md:hover:bg-white md:hover:border-2 md:hover:border-red'>
                                        <EnvelopeIcon className='h-6 w-6 text-white md:group-hover:text-red transition-all duration-300 ease-in-out mr-3' />
                                        <p className='font-bebas bold text-white text-[18px] md:group-hover:text-red transition-all duration-300 ease-in-out mr-3'>contact the winery</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around ml-5'>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 uppercase text-[24px]'>Terroir & vineyard</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>100% clay soils</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>Age of the vines: 25 years old</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Vinification</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>mechanical harvest</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>concrete and stainless-steel temperature-controlled tanks</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>17 to 25 days macerations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='font-bebas text-xl text-text mb-1 mt-4 uppercase text-[24px]'>Ageing</h3>
                                    <ul className='font-cormorant text-text text-sm'>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>6 months</li>
                                        <li className='flex items-center'> <div className="mr-2 min-w-4 h-0.5 bg-red text-[19px]"></div>30% in amphorae / 70% 1 year old barrel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:mt-0 mt-5'>
                            <h3 className='font-bebas text-xl text-text mb-1 text-[24px]'>Tasting</h3>
                            <p className='font-cormorant  text-[19px]'>
                               The first vintage of the range. A ruby red, bright and intense colour with a fresh attack, opening to a round and fine finish on the palate. 
                            </p>
                            <p className='font-cormorant  text-[19px] mt-2'>The tight and grainy tannic structure is the result of aging in amphorae. The light woodiness provided by the barrels is present but discrete.</p>
                            <p className='font-cormorant  text-[19px] mt-2'>We recommend drinking Pure Merlot 2022 within 2 to 5 years.</p>
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
            <section className="mx-auto flex flex-col max-w-7xl py-10 px-4 min-h-[392px] w-full" id="bottle">
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
                           <h2 className='text-text text-center uppercase max-w-[70%] font-bebas text-2xl transition-colors duration-300 ease-in-out md:group-hover:text-red'>
                               {bottleIdx === null || bottleIdx < 0 || bottleIdx > 3 ? (
                                <>
                                    {index === 0 && (
                                        <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                            <span>CHÂTEAU DUTRUCH</span><br /><span>GRAND POUJEAUX</span>
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                            <span>LE PETIT</span><br /><span>DUTRUCH</span>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                            <span>CUVÉE</span><br /><span>COLLECTION</span>
                                        </div>
                                    )}
                                    {index === 3 && (
                                        <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                            <span>GAMME</span><br /><span>«PUR»</span>
                                        </div>
                                    )}
                                </>
                            ) : (
                                index !== bottleIdx && (
                                    <>
                                        {index === 0 && (
                                            <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                                <span>CHÂTEAU DUTRUCH</span><br /><span>GRAND POUJEAUX</span>
                                            </div>
                                        )}
                                        {index === 1 && (
                                            <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                                <span>LE PETIT</span><br /><span>DUTRUCH</span>
                                            </div>
                                        )}
                                        {index === 2 && (
                                            <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                                <span>CUVÉE</span><br /><span>COLLECTION</span>
                                            </div>
                                        )}
                                        {index === 3 && (
                                            <div className="group-hover:transform leading-6 group-hover:translate-y-2 transition  duration-300 ease-in-out">
                                                <span>GAMME</span><br /><span>«PUR»</span>
                                            </div>
                                        )}
                                    </>
                                )
                            )}
                            </h2>
                            <div className={`absolute ${index === bottleIdx ? "h-[160px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[120px]"} w-0.5 bg-red -bottom-32 md:flex hidden`}></div>
                            <div className='mx-auto flex flex-col max-w-5xl py-2 px-4 w-full'>
                                {
                                    bottleIdx !== null && bottleIdx === index && (
                                        <div className={`md:hidden relative w-full min-h-[500px] border border-red mx-auto flex max-w-5xl p-5 mt-10 bg-white z-10 transition duration-150 ease-in-out ${bottleIdx !== null ? "opacity-100" : "opacity-0" }`} ref={bottleDescriptionRef}>
                                            <div className={`absolute ${index === bottleIdx ? "h-[50px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[50px]"} w-0.5 bg-red -top-[50px] md:hidden flex left-1/2 transform -translate-x-1/2 `}></div>
                                            <div className='absolute p-1 top-3 md:top-2 right-2 md:right-5 rounded-full border border-red cursor-pointer hover:scale-105 transition duration-300 ease-in-out' onClick={()=>{setBottleIdx(null)}}><img src="/icon/close.png" /></div>
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