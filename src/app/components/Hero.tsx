import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='w-full  bg-[url("/background/chateau-dessin.png")] bg-cover bg-center'>
            <div className='mx-auto flex max-w-5xl py-2 px-4 justify-center items-center min-h-[392px] w-full'>
                <div className='flex flex-col items-center'>
                    <Image src='/logo/logo-hero.png' alt='Château Dutruch Grand Poujeaux' width={300} height={200} />
                    <div className="mt-10 flex items-end">
                        <div className='w-14 h-0.5 bg-red mb-1'></div>
                        <Image src='/logo/logo-moulis-medoc.png' alt='moulis-en-medoc' width={150} height={50} className='mr-3 ml-3' />
                        <div className='w-14 h-0.5 bg-red mb-1'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;