"use client";

import Image from "next/image";
import { useState, useEffect, useRef} from "react";

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const textImage = [
    "Des vignes plantées à 80% Sur le plateau de Grand Poujeaux",
    "Des vendanges 100% manuelles Pour notre premier vin",
    "Sol de graves garonnaises, meilleur terroir du médoc",
    "François cordonnier (junior), propriétaire depuis 2016",
    "Élevage en barriques De chêne français",
    "Château dutruch Grand Poujeaux : Fraîcheur, finesse et élégance",
    "Propriété du château Dutruch Grand Poujeaux"
]

export default function Lightbox() {
    const [currentImage, setCurrentImage] = useState<number>(1);
    const [nextImage, setNextImage] = useState<number | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);

    const currentImageRef = useRef(null);
    const nextImageRef = useRef(null);
    const lightboxRef = useRef(null);
    const buttonRef = useRef(null);

    const preloadImage = (src: string): Promise<void> => {
        return new Promise((resolve) => {
            const img = new window.Image();  // Utilisez `new window.Image()` au lieu de `new Image()`
            img.src = src;
            img.onload = () => resolve();
        });
    };

    const handleImage = async (action: 'increment' | 'decrement'): Promise<void> => {
        // Désactiver les interactions (boutons, par exemple) pour éviter les clics multiples pendant l'animation
        setDisabled(true);

        // Déterminer si l'action est d'incrémenter (aller vers la droite) ou de décrémenter (aller vers la gauche)
        const isIncrement = action === "increment";

        if(action === "increment") {
           setNextImage(currentImage === 7 ? 1 : currentImage + 1);
       }

       if(action === "decrement") {
           setNextImage(currentImage === 1 ? 7 : currentImage - 1);
       }
       
        // Calculer la nouvelle image actuelle en fonction de l'action
        // Si c'est la dernière image, boucler à la première image, et inversement
        const newCurrentImage = isIncrement 
            ? (currentImage === 7 ? 1 : currentImage + 1) 
            : (currentImage === 1 ? 7 : currentImage - 1);

        // Déterminer l'URL de la prochaine image à précharger
        // Cette logique détermine l'image suivante si on avance, et l'image précédente si on recule
        const imageToPreload = `/lightbox/image-${isIncrement 
            ? (newCurrentImage === 7 ? 1 : newCurrentImage + 1) 
            : (newCurrentImage === 1 ? 7 : newCurrentImage - 1)}.png`;

        // Précharger l'image déterminée
        await preloadImage(imageToPreload);

        // Calculer les indices des images suivante et précédente pour la mise à jour future
        const newNextImage = newCurrentImage === 7 ? 1 : newCurrentImage + 1;
        const newPrevImage = newCurrentImage === 1 ? 7 : newCurrentImage - 1;



        // Vérifier si les éléments DOM pour les images actuelle et suivante sont présents
        if (currentImageRef.current && nextImageRef.current) {
            // Animer l'image actuelle pour la faire sortir de l'écran
            gsap.to(currentImageRef.current, {
                x: isIncrement ? '100%' : '-100%', // Déplacer vers la droite ou la gauche
                duration: 1, // Durée de l'animation
                ease: 'power3.inOut', // Type d'animation (accélération et décélération)
                onComplete: () => {
                    // Une fois l'animation terminée, mettre à jour l'image actuelle
                    setCurrentImage(newCurrentImage);

                    // Mettre à jour l'image suivante en fonction de la direction de l'action
                    // if (isIncrement) {
                    //     setNextImage(newNextImage);
                    // } else {
                    //     setNextImage(newPrevImage);
                    // }
                    // Réactiver les interactions
                    setDisabled(false);
                }
            });

            // Préparer l'image suivante pour entrer dans l'écran
            gsap.fromTo(nextImageRef.current, {
                x: isIncrement ? '-50%' : '50%', // Position de départ hors écran
            }, {
                x: '0%', // Position finale (centre de l'écran)
                duration: 1, // Durée de l'animation
                ease: 'power3.inOut', // Type d'animation
            });
        }
    };



    useEffect(() => {
        // Réinitialiser la position de l'image courante à chaque changement de currentImage
        if (currentImageRef.current) {
            gsap.set(currentImageRef.current, { x: '0%', opacity: 1 });
        }
    }, [currentImage]);

    useEffect(() => {
        gsap.fromTo(lightboxRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 })
    }, []);

    // useEffect(() => {
    //     preloadImage(`/lightbox/image-${currentImage}.png`);
    //     preloadImage(`/lightbox/image-${nextImage}.png`);
    // }, []);

    return (
        <section className='w-full bg-cover bg-center'>
            <div className="mx-auto flex max-w-7xl py-2 justify-center items-center w-full opacity-0" ref={lightboxRef}>
                <div 
                    className="w-full overflow-hidden relative flex md:min-h-[550px] min-h-[400px]"
                >

                    {/** Navigation button */}
                    <button className="absolute py-3 px-5 rounded-l-full bg-white right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20" onClick={()=>handleImage("increment")} disabled={disabled}>
                        <Image
                            src="/icon/arrow-right.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </button>
                    <button className="absolute py-3 px-5 rounded-r-full bg-white left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20" onClick={()=>handleImage("decrement")} disabled={disabled}>
                        <Image
                            src="/icon/arrow-left.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </button>

                    {/** Image Lightbox */}
                    <div className="absolute right-0 bottom-0 w-full z-10 h-[100%]" ref={currentImageRef}>
                        <Image
                            src={`/lightbox/image-${currentImage}.png`}
                            alt="Château Dutruch Grand Poujeaux"
                            objectFit="cover"
                            layout="fill"
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 w-full z-5 h-[100%]" ref={nextImageRef}>
                        <Image
                            src={`/lightbox/image-${nextImage}.png`}
                            alt="Château Dutruch Grand Poujeaux"
                            objectFit="cover"
                            layout="fill"
                        />
                    </div>

                    {/** Text container */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[195px] h-[45px] px-2 bg-white z-40 flex justify-center items-center">
                        {
                                <p className="text-center text-[10px] leading-[13px] font-bold text-red font-source uppercase">
                                    {textImage[currentImage-1]}
                                </p>
                        }
                    </div>
                </div>
            </div>
            <div className="my-5 flex items-center justify-center" ref={buttonRef}>
                {
                    [1,2,3,4,5,6,7].map((item, index) => {
                        return (
                            <div key={index} className={`w-[10px] h-[10px] rounded-full ${index + 1 === currentImage ? "bg-red":"bg-gray"} cursor-pointer mx-1`} onClick={() => setCurrentImage(item)}>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}