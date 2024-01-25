import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slice';
import { RootState } from '@/redux/store';

// Objet de langues
import { language } from '../../lib/language';

const Nav = () => {
    const dispatch = useDispatch();

    // Sélectionnez la clé de langue actuelle de l'état Redux
    type LanguageKey = 'fr' | 'eng';
    const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

    // Accédez aux traductions pour la langue actuelle
    useEffect(() => {
        console.log(languageKey);
        console.log(language[languageKey as keyof typeof language]);
    }, [languageKey]);

    const handleLanguage = (language: string) => {
        dispatch(setLanguage(language));
    };

    return (
        <nav className='w-full bg-background'>
            <div className='mx-auto flex max-w-5xl px-4 py-2 justify-between items-center'>
                <div className='flex space-x-4'>
                    <a href='/' className='text-primary font-bold text-2xl sm:block hidden '>
                        <Image src='/logo/logo-nav.png' alt='Château Dutruch Grand Poujeaux' width={200} height={200} />
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
                    <a href="mailto:casteranicolas.contact@gmail.com" >
                        <Image src='/icon/envelope.png' alt='envelope' width={25} height={5} className='hover:scale-105 transition-all duration-200 cursor-pointer' />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;