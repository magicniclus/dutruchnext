"use client";

import React, {useRef, useState, useEffect} from 'react';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import gsap from 'gsap';

const Hero = () => {
    const validationAge = useSelector((state: RootState) => state.validationAge);

    const imageRefOne = useRef(null);
    const imageRefTwo = useRef(null);
    const lignOne = useRef(null);
    const lignTwo = useRef(null);

    useEffect(() => {
        if (validationAge) {
            if(validationAge){
                // Si validationAge est true, déclencher l'animation
                gsap.fromTo(imageRefOne.current, { opacity: 0 }, { opacity:1 , duration: 1, ease: "power1.inOut" });
                gsap.fromTo(imageRefTwo.current, { y: 90 }, { y: 0, duration: 1, ease: "power1.inOut", delay: 0.1 });
                gsap.fromTo(lignOne.current, { x: -100 }, { x: 0, duration: 1, ease: "power1.inOut", delay: 0.2 });
                gsap.fromTo(lignTwo.current, { x: 100 }, { x: 0, duration: 1, ease: "power1.inOut", delay: 0.2 });
            }
        }
    }, [validationAge]);

    return (
        <section className='w-full  bg-[url("/background/chateau-dessin.png")] bg-cover bg-center'>
            <div className='mx-auto flex max-w-5xl py-2 px-4 justify-center items-center min-h-[392px] w-full'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-hidden'>
                        <img src='/logo/logo-hero.png' alt='Château Dutruch Grand Poujeaux' width={300} height={200} ref={imageRefOne} className='opacity-0 w-[300px] h-auto' />
                    </div>
                    <div className="mt-10 flex items-end">
                        <div className='overflow-hidden'>
                            <div className='w-14 h-0.5 bg-red mb-1 -translate-x-20' ref={lignOne}></div>
                        </div>
                        <div className='overflow-hidden'>
                            <img src='/logo/logo-moulis-medoc.png' alt='moulis-en-medoc' className='mr-3 ml-3 translate-y-48 w-[150px] h-auto' ref={imageRefTwo} />
                        </div>
                        <div className='overflow-hidden'>
                            <div className='w-14 h-0.5 bg-red mb-1 translate-x-20' ref={lignTwo}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;