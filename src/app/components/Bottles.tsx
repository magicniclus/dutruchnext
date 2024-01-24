import React, {useState, useEffect} from 'react';

import Image from 'next/image';

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

const Bottles = () => {

    const [bottleIdx, setBottleIdx] = useState<number | null>(null);

    const handleBottleInformations = (index: number) => {
        console.log(index);
        setBottleIdx(index);
    }

    return (
        <>
            <section className="mx-auto flex flex-col max-w-5xl py-2 px-4 min-h-[392px] w-full">
                <div className='w-full flex justify-between flex-col md:flex-row'>
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
                                 {index === bottleIdx ? "" : bottle.title}
                            </h2>
                            <div className={`absolute ${index === bottleIdx ? "h-[90px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[55px]"} w-0.5 bg-red -bottom-20 md:flex hidden`}></div>
                            {
                                bottleIdx !== null && bottleIdx === index && (
                                    <div className='md:hidden relative w-full min-h-[500px] border border-red mx-auto flex max-w-5xl py-2 mt-16 bg-white z-10'>
                                        <div className={`absolute ${index === bottleIdx ? "h-[50px]" : bottleIdx !== null && bottleIdx !== index ? "" : "h-[50px]"} w-0.5 bg-red -top-[50px] md:hidden flex left-1/2 transform -translate-x-1/2 `}></div>
                                        <div className='absolute p-1 top-5 right-5 rounded-full border border-red cursor-pointer hover:scale-105 transition duration-300 ease-in-out' onClick={()=>{setBottleIdx(null)}}><img src="/icon/close.png" /></div>
                                    </div>
                                )
                            }
                        </div>
                    ))}
                </div>
            </section>
            {
                bottleIdx !== null && (
                    <div className='hidden relative w-full min-h-[500px] border border-red mx-auto md:flex max-w-5xl py-2 mt-16 bg-white z-10'>
                        <div className='absolute p-1 top-5 right-5 rounded-full border border-red cursor-pointer hover:scale-105 transition duration-300 ease-in-out' onClick={()=>{setBottleIdx(null)}}><img src="/icon/close.png" /></div>
                    </div>
                )
            }
           <div className={`md:flex hidden w-full min-h-[280px] bg-blue ${bottleIdx !== null ? "mt-0" : "mt-20"}`} style={{ transform: 'translateY(-20px)' }}>
                <img src="/background/bouteille.png" className='w-full' />
            </div>

        </>
    );
};

export default Bottles;