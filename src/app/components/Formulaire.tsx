import React from 'react';
import { useState, useEffect } from "react";

import { addProspect } from '@/firebase/dataManager';

interface FormulaireProps {
    lang: "fr" | "eng";
}

    const Formulaire = ({lang}: FormulaireProps) => {

        const [isSubmitted, setIsSubmitted] = useState(false);
        const [showBackground, setShowBackground] = useState(false);

        const [prenom, setPrenom] = useState("");
        const [nom, setNom] = useState("");
        const [email, setEmail] = useState("");
        const [telephone, setTelephone] = useState("");
        const [entreprise, setEntreprise] = useState("");
        const [pays, setPays] = useState("");
        const [message, setMessage] = useState("");
        const [checkbox, setCheckbox] = useState(false);
        const [isValid, setIsValid] = useState(false);

        useEffect(() => {
            const emailRegex = /\S+@\S+\.\S+/;
            const phoneRegex = /^[0-9]{10}$/;
            const isFormValid =
                prenom.length > 1 &&
                nom.length > 1 &&
                message.length > 0 &&
                pays.length > 0 &&
                emailRegex.test(email) &&
                phoneRegex.test(telephone) &&
                checkbox; // Inclure la checkbox dans la validation

            setIsValid(isFormValid);
        }, [prenom, nom, email, telephone, message, pays, checkbox]);
      
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const prospectData = {
            prenom,
            nom,
            email,
            telephone,
            entreprise,
            pays,
            message,
        };
        try {
        await addProspect({
            prenom,
            nom,
            email,
            telephone,
            entreprise,
            pays,
            message,
        });
        setIsSubmitted(true); // Mise à jour de l'état lorsque le formulaire est soumis avec succès
        return fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(prospectData),
          }).then((response) => {
            if (!response.ok) {
              return response.json().then((err) => {
                throw new Error(err.message);
              });
            } else {
              return response.json().then((data) => {
                console.log("API Response:", data);
              });
            }
          });
        } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire: ", error);
        }
    };

    const handleForm = () => {
        if(lang === 'fr'){
            if(isSubmitted){
                return (
                    <section className='mx-auto flex flex-col md:max-w-5xl md:px-4 w-full'>
                        <div className='bg-beige w-full md:translate md:-translate-y-16 p-16'>
                            <div className='w-full flex justify-center items-center flex-col'>
                                <h2 className="text-red font-bebas text-3xl">Merci de nous avoir contacté</h2>
                                <h3 className='font-bebas text-xl text-text'>Nous reviendrons vers vous rapidement.</h3>
                            </div>
                        </div>
                    </section>
                );
            }
            return (
                <section className='mx-auto flex flex-col md:max-w-7xl md:px-4 w-full' id="form">
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
                                            <input type="text" name="name" id="name" placeholder='JHON' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setPrenom(e.target.value)} value={prenom} />
                                        </div>
                                        <div className='flex flex-col md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="name">Nom*</label>
                                            <input type="text" name="name" id="lastName" placeholder='DOE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setNom(e.target.value)} value={nom} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:ml-10 md:w-[30%] md:mt-0 mt-3'>
                                        <label className='font-cormorant ml-2 text-text' htmlFor="name">Entreprise (le cas échéant)</label>
                                        <input type="text" name="name" id="entreprise" placeholder='CAVE & CIE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setEntreprise(e.target.value)} value={entreprise} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className='flex md:flex-row flex-col'>
                                    <div className="flex md:w-[40%]">
                                        <div className='flex flex-col w-full'>
                                            <label className='font-cormorant ml-2' htmlFor="email">Email*</label>
                                            <input type="text" name="email" id="email" placeholder='JOHNDOE@EMAIL.COM' className='text-sm w-full p-2 text-source rounded-sm' onChange={(e)=>setEmail(e.target.value)} value={email} />
                                        </div>
                                    </div>
                                    <div className="flex md:w-[40%] md:ml-10 md:flex-row flex-col">
                                        <div className='flex flex-col md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="phone">Téléphone*</label>
                                            <input type="number" name="phone" id="phone" placeholder='05 56 00 00 00' className='text-sm p-2 text-source rounded-sm md:max-w-[140px]' onChange={(e)=>setTelephone(e.target.value)} value={telephone} />
                                        </div>
                                        <div className='flex flex-col md:ml-10 md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="country">Pays*</label>
                                            <input type="text" name="country" id="pays" placeholder='FRANCE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setPays(e.target.value)} value={pays} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className="flex w-full">
                                    <div className='flex flex-col w-full'>
                                        <label className='font-cormorant ml-2 text-text' htmlFor="email">Précisez votre demande pour être recontacté*</label>
                                        <input type="text" name="text" id="text" placeholder='VOTRE MESSAGE' className='text-sm w-full p-2 text-source rounded-sm' onChange={(e)=>setMessage(e.target.value)} value={message} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 text-text text-sm flex justify-between md:flex-row flex-col'>
                                <div className='md:w-1/2 border-none'>
                                    <input type="checkbox" name="checkbox" id="checkbox" className='mr-2' onChange={e=>setCheckbox(e.target.checked)} checked={checkbox}  />
                                    <label className='font-cormorant text-text' htmlFor="checkbox">J’accepte que mes données personnelles soient collectées afin que CHÂTEAU DUTRUCH GRAND POUJEAUX puisse me recontacter.</label>
                                </div>
                                <div className='md:w-[220px] flex md:items-end text-text justify-between md:flex-row flex-col md:mt-0 mt-5'>
                                    <p className='text-xs font-cormorant md:mb-0 mb-2'>*Champs obligatoires</p>
                                    <button
                                        disabled={!isValid}
                                        type="submit"
                                        className={`justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out ${!isValid ? "opacity-50" : "opacity-100 hover:shadow-md hover:scale-105"}`}
                                    >
                                        <img src="/icon/send.png" alt="send" className='mr-3 h-5' />
                                        <p className='font-bebas bold text-white'>ENVOYER</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            )
        }else{
            if(isSubmitted){
                return (
                    <section className='mx-auto flex flex-col md:max-w-5xl md:px-4 w-full'>
                        <div className='bg-beige w-full md:translate md:-translate-y-16 p-7'>
                            <div>
                                <h2 className="text-red font-bebas text-3xl">Thank you for having contacted us</h2>
                                <h3 className='font-bebas text-xl text-text'>We will get back to you quickly.</h3>
                                <div className="mt-3 w-[85px] h-0.5 bg-red"></div>
                            </div>
                        </div>
                    </section>
                );
            }
            return (
                              <section className='mx-auto flex flex-col md:max-w-5xl md:px-4 w-full'>
                    <div className='bg-beige w-full md:translate md:-translate-y-16 p-7'>
                        <div>
                            <h2 className="text-red font-bebas text-3xl">CONTACT US</h2>
                            <h3 className='font-bebas text-xl text-text'>For more information</h3>
                            <div className="mt-3 w-[85px] h-0.5 bg-red"></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mt-3'>
                                <div className='flex md:flex-row flex-col'>
                                    <div className="flex md:w-[40%] justify-between md:flex-row flex-col">
                                        <div className='flex flex-col md:mt-0'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="name">First name*</label>
                                            <input type="text" name="name" id="name" placeholder='JHON' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setPrenom(e.target.value)} value={prenom} />
                                        </div>
                                        <div className='flex flex-col md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="name">Name*</label>
                                            <input type="text" name="name" id="lastName" placeholder='DOE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setNom(e.target.value)} value={nom} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:ml-10 md:w-[30%] md:mt-0 mt-3'>
                                        <label className='font-cormorant ml-2 text-text' htmlFor="name">Company (if applicable)</label>
                                        <input type="text" name="name" id="entreprise" placeholder='CAVE & CIE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setEntreprise(e.target.value)} value={entreprise} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className='flex md:flex-row flex-col'>
                                    <div className="flex md:w-[40%]">
                                        <div className='flex flex-col w-full'>
                                            <label className='font-cormorant ml-2' htmlFor="email">Email*</label>
                                            <input type="text" name="email" id="email" placeholder='JOHNDOE@EMAIL.COM' className='text-sm w-full p-2 text-source rounded-sm' onChange={(e)=>setEmail(e.target.value)} value={email} />
                                        </div>
                                    </div>
                                    <div className="flex md:w-[40%] md:ml-10 md:flex-row flex-col">
                                        <div className='flex flex-col md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="phone">Phone*</label>
                                            <input type="number" name="phone" id="phone" placeholder='05 56 00 00 00' className='text-sm p-2 text-source rounded-sm md:max-w-[140px]' onChange={(e)=>setTelephone(e.target.value)} value={telephone} />
                                        </div>
                                        <div className='flex flex-col md:ml-10 md:mt-0 mt-3'>
                                            <label className='font-cormorant ml-2 text-text' htmlFor="country">Country*</label>
                                            <input type="text" name="country" id="pays" placeholder='FRANCE' className='text-sm p-2 text-source rounded-sm' onChange={(e)=>setPays(e.target.value)} value={pays} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className="flex w-full">
                                    <div className='flex flex-col w-full'>
                                        <label className='font-cormorant ml-2 text-text' htmlFor="email">Specify your request to be contacted*</label>
                                        <input type="text" name="text" id="text" placeholder='VOTRE MESSAGE' className='text-sm w-full p-2 text-source rounded-sm' onChange={(e)=>setMessage(e.target.value)} value={message} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 text-text text-sm flex justify-between md:flex-row flex-col'>
                                <div className='md:w-1/2 border-none'>
                                    <input type="checkbox" name="checkbox" id="checkbox" className='mr-2' onChange={e=>setCheckbox(e.target.checked)} checked={checkbox}  />
                                    <label className='font-cormorant text-text' htmlFor="checkbox">I accept that my personal data will be collected so that CHÂTEAU DUTRUCH GRAND POUJEAUX can contact me again.</label>
                                </div>
                                <div className='md:w-[220px] flex md:items-end text-text justify-between md:flex-row flex-col md:mt-0 mt-5'>
                                    <p className='text-xs font-cormorant md:mb-0 mb-2'>*Required fields</p>
                                    <button
                                        disabled={!isValid}
                                        type="submit"
                                        className={`justify-center flex bg-red px-5 py-2 rounded-full items-center cursor-pointer transition duration-300 ease-in-out ${!isValid ? "opacity-50" : "opacity-100 hover:shadow-md hover:scale-105"}`}
                                    >
                                        <img src="/icon/send.png" alt="send" className='mr-3 h-5' />
                                        <p className='font-bebas bold text-white'>SEND</p>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            )
        }     
    }

    return (
        <>
            {handleForm()}
        </>
    );
};

export default Formulaire;