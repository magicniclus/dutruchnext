"use client";

import Image from "next/image";
import { useState, useEffect, useRef} from "react";

import gsap from "gsap";

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
    const [nextImage, setNextImage] = useState<number>(2);
    const [disabled, setDisabled] = useState<boolean>(false);

    const currentImageRef = useRef(null);
    const nextImageRef = useRef(null);

   const [startX, setStartX] = useState<number>(0);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
    };

    const handleEnd = (currentX: number) => {
        if (currentX > startX) {
        handleImage("increment");
        } else if (currentX < startX) {
        handleImage("decrement");
        }
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        handleEnd(e.changedTouches[0].clientX);
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        handleEnd(e.clientX);
    };

    const handleImage = (action: string) => {
        setDisabled(true);
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
                    setDisabled(false);
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
            <div className="mx-auto flex max-w-5xl py-2 justify-center items-center w-full">
                <div 
                    className="w-full overflow-hidden relative flex md:min-h-[550px] min-h-[400px]"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
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
            <div className="my-5 flex items-center justify-center">
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