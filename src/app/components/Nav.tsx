import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setLanguage } from '../../redux/slice';

import gsap from 'gsap';

const Nav = () => {
    const dispatch = useDispatch();
    const validationAge = useSelector((state: RootState) => state.validationAge);

    const logoRef = useRef(null);

    const handleLanguage = (language: string) => {
        dispatch(setLanguage(language));
    };

    useEffect(() => {
        if (validationAge) {
            // Si validationAge est true, déclencher l'animation
            gsap.fromTo(logoRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power1.inOut", delay: 0.2 });
        }
    }, [validationAge]);

    return (
        <nav className='w-full bg-background'>
            <div className='mx-auto flex max-w-7xl px-4 py-2 justify-between items-center opacity-0'  ref={logoRef}>
                <div className='flex space-x-4'>
                    <a href='/' className='text-primary font-bold text-2xl sm:block hidden overflow-hidden '>
                        <img src='/logo/logo-nav.png' alt='Château Dutruch Grand Poujeaux' className="w-[200px] h-auto" />
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex space-x-2'>
                        <button className='text-white text-normal hover:scale-105 transition-all duration-200 cursor-pointer font-bebas font-light' onClick={()=>handleLanguage("fr")}>
                            FR
                        </button>
                        <p className='text-white'>|</p>
                        <button className='text-white text-normal hover:scale-105 transition-all duration-200 cursor-pointer font-bebas font-light -tracking-tighter' onClick={()=>handleLanguage("eng")}>
                            ENG
                        </button>
                    </div>
                    <a href="/#form" >
                        <img src='/icon/envelope.png' alt='envelope' className='hover:scale-105 transition-all duration-200 cursor-pointer w-[25px] h-auto' />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;