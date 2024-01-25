import React from 'react';
import { useState, useEffect } from "react";

const Formulaire = () => {

    const [showBackground, setShowBackground] = useState(false);
      
    useEffect(() => {
        const handleResize = () => {
            setShowBackground(window.innerWidth < 2000);
        };

        // Définir l'état initial en fonction de la largeur de la fenêtre
        handleResize();

        // Ajouter le gestionnaire d'événements pour le redimensionnement
        window.addEventListener('resize', handleResize);

        // Nettoyer le gestionnaire d'événements lors du démontage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className='mx-auto flex flex-col md:max-w-5xl py-1 md:px-4 w-full'>
            <div className='bg-beige w-full md:translate md:-translate-y-16 p-7'>
                <div>
                    <h2 className="text-red font-bebas text-3xl">NOUS CONTACTER</h2>
                    <h3 className='font-bebas text-xl text-text'>Pour plus de renseignements</h3>
                    <div className="mt-3 w-[85px] h-0.5 bg-red"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-3'>
                        <div className='flex md:flex-row flex-col'>
                            <div className="flex md:w-[40%] justify-between md:flex-row flex-col">
                                <div className='flex flex-col md:mt-0'>
                                    <label className='font-cormorant ml-2 text-text' htmlFor="name">Prenom*</label>
                                    <input type="text" name="name" id="name" placeholder='JHON' className='text-sm p-2 text-source rounded-sm' />
                                </div>
                                <div className='flex flex-col md:mt-0 mt-3'>
                                    <label className='font-cormorant ml-2 text-text' htmlFor="name">Nom*</label>
                                    <input type="text" name="name" id="lastName" placeholder='DOE' className='text-sm p-2 text-source rounded-sm' />
                                </div>
                            </div>
                            <div className='flex flex-col md:ml-10 md:w-[30%] md:mt-0 mt-3'>
                                <label className='font-cormorant ml-2 text-text' htmlFor="name">Entreprise (le cas échéant)</label>
                                <input type="text" name="name" id="entreprise" placeholder='CAVE & CIE' className='text-sm p-2 text-source rounded-sm' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex md:flex-row flex-col'>
                            <div className="flex md:w-[40%]">
                                <div className='flex flex-col w-full'>
                                    <label className='font-cormorant ml-2' htmlFor="email">Email*</label>
                                    <input type="text" name="email" id="email" placeholder='JOHNDOE@EMAIL.COM' className='text-sm w-full p-2 text-source rounded-sm' />
                                </div>
                            </div>
                            <div className="flex md:w-[40%] md:ml-10 md:flex-row flex-col">
                                <div className='flex flex-col md:mt-0 mt-3'>
                                    <label className='font-cormorant ml-2 text-text' htmlFor="phone">Téléphone*</label>
                                    <input type="number" name="phone" id="phone" placeholder='05 56 00 00 00' className='text-sm p-2 text-source rounded-sm md:max-w-[140px]' />
                                </div>
                                <div className='flex flex-col md:ml-10 md:mt-0 mt-3'>
                                    <label className='font-cormorant ml-2 text-text' htmlFor="country">Pays*</label>
                                    <input type="text" name="country" id="pays" placeholder='FRANCE' className='text-sm p-2 text-source rounded-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className="flex w-full">
                            <div className='flex flex-col w-full'>
                                <label className='font-cormorant ml-2 text-text' htmlFor="email">Précisez votre demande pour être recontacté*</label>
                                <input type="text" name="text" id="text" placeholder='VOTRE MESSAGE' className='text-sm w-full p-2 text-source rounded-sm' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 text-text text-sm flex justify-between md:flex-row flex-col'>
                        <div className='md:w-1/2 border-none'>
                            <input type="checkbox" name="checkbox" id="checkbox" className='mr-2' />
                            <label className='font-cormorant text-text' htmlFor="checkbox">J’accepte que mes données personnelles soient collectées afin que CHÂTEAU DUTRUCH GRAND POUJEAUX puisse me recontacter.</label>
                        </div>
                        <div className='md:w-[220px] flex md:items-end text-text justify-between md:flex-row flex-col md:mt-0 mt-5'>
                            <p className='text-xs font-cormorant md:mb-0 mb-2'>*Champs obligatoires</p>
                            <button type="submit" className='justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer hover:shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                <img src="/icon/send.png" alt="send" className='mr-3 h-5' />
                                <p className='font-bebas bold text-white'>ENVOYER</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Formulaire;