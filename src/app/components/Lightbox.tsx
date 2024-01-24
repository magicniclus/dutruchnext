"use client";

import Image from "next/image";
import { useState, useEffect, useRef} from "react";

import gsap from "gsap";

export default function Lightbox() {
    const [currentImage, setCurrentImage] = useState<number>(1);
    const [nextImage, setNextImage] = useState<number>(2);

    const currentImageRef = useRef(null);
    const nextImageRef = useRef(null);

    const handleImage = (action: string) => {
        const isIncrement = action === "increment";
        const newCurrentImage = isIncrement ? (currentImage === 7 ? 1 : currentImage + 1) : (currentImage === 1 ? 7 : currentImage - 1);
        
        // Calculer la nouvelle image suivante (nextImage) et précédente (prevImage)
        const newNextImage = newCurrentImage === 7 ? 1 : newCurrentImage + 1;
        const newPrevImage = newCurrentImage === 1 ? 7 : newCurrentImage - 1;

        if(action === "increment") {
            setNextImage(currentImage === 7 ? 1 : currentImage + 1);
        }

        if(action === "decrement") {
            setNextImage(currentImage === 1 ? 7 : currentImage - 1);
        }

        if (currentImageRef.current && nextImageRef.current) {
            // Animer l'image courante pour la faire sortir de l'écran
            gsap.to(currentImageRef.current, {
                x: isIncrement ? '100%' : '-100%', 
                duration: 1, 
                ease: 'power3.inOut',
                onComplete: () => {
                    // Mettre à jour currentImage
                    setCurrentImage(newCurrentImage);
                    
                    // Précharger la prochaine image en fonction de la direction
                    if (isIncrement) {
                        setNextImage(newNextImage);
                    } else {
                        setNextImage(newPrevImage);
                    }
                }
            });

            // Animer l'image suivante pour qu'elle se déplace de sa position initiale à 0
            gsap.fromTo(nextImageRef.current, {
                x: isIncrement ? '-50%' : '50%',
            }, {
                x: '0%', 
                duration: 1, 
                ease: 'power3.inOut',
            });
        }
    }

    useEffect(() => {
        // Réinitialiser la position de l'image courante à chaque changement de currentImage
        if (currentImageRef.current) {
            gsap.set(currentImageRef.current, { x: '0%', opacity: 1 });
        }
    }, [currentImage]);

    return (
        <section className='w-full bg-cover bg-center'>
            <div className="mx-auto flex max-w-5xl py-2 justify-center items-center min-h-[392px] w-full">
                <div className="w-full overflow-hidden relative flex min-h-[550px]">
                    <div className="absolute py-3 px-5 rounded-l-full bg-white right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20" onClick={()=>handleImage("increment")}>
                        <Image
                            src="/icon/arrow-right.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </div>
                    <div className="absolute py-3 px-5 rounded-r-full bg-white left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-20" onClick={()=>handleImage("decrement")}>
                        <Image
                            src="/icon/arrow-left.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 w-full z-10" ref={currentImageRef}>
                        <Image
                            src={`/lightbox/image-${currentImage}.png`}
                            alt="Château Dutruch Grand Poujeaux"
                            width={500}
                            height={500}
                            objectFit="contain"
                            layout="responsive"
                        />
                    </div>
                    <div className="absolute right-0 bottom-0 w-full z-5" ref={nextImageRef}>
                        <Image
                            src={`/lightbox/image-${nextImage}.png`}
                            alt="Château Dutruch Grand Poujeaux"
                            width={500}
                            height={500}
                            objectFit="contain"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}