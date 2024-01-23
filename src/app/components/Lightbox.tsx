"use client";

import Image from "next/image";
import { useState, useEffect} from "react";

export default function Lightbox() {
    const [currentImage, setCurrentImage] = useState<number>(1);
    const [nextImage, setNextImage] = useState<number>(2);

const handleImage = (action: string) => {
    if (action === "increment") {
        const newCurrentImage = currentImage === 7 ? 1 : currentImage + 1;
        const newNextImage = newCurrentImage === 7 ? 1 : newCurrentImage + 1;

        setCurrentImage(newCurrentImage);
        setNextImage(newNextImage);
    } else { // action === "decrement"
        const newCurrentImage = currentImage === 1 ? 7 : currentImage - 1;
        const newNextImage = newCurrentImage === 1 ? 7 : newCurrentImage - 1;

        setCurrentImage(newCurrentImage);
        setNextImage(newNextImage);
    }
}


    useEffect(()=>{
        console.log(currentImage);
        console.log(nextImage);
    }, [currentImage])

    return (
        <section className='w-full bg-cover bg-center'>
            <div className="mx-auto flex max-w-5xl py-2 justify-center items-center min-h-[392px] w-full">
                <div className="w-full overflow-hidden relative flex">
                    <div className="absolute py-3 px-5 rounded-l-full bg-white right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>handleImage("increment")}>
                        <Image
                            src="/icon/arrow-right.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </div>
                    <div className="absolute py-3 px-5 rounded-r-full bg-white left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>handleImage("decrement")}>
                        <Image
                            src="/icon/arrow-left.png"
                            alt="Château Dutruch Grand Poujeaux"
                            width={12}
                            height={12}
                        />
                    </div>
                     <Image
                        src={`/lightbox/image-${nextImage}.png`}
                        alt="Château Dutruch Grand Poujeaux"
                        width={400}
                        height={400}
                        objectFit="cover"
                        layout="responsive"
                    />
                    <Image
                        src={`/lightbox/image-${currentImage}.png`}
                        alt="Château Dutruch Grand Poujeaux"
                        width={600}
                        height={400}
                        objectFit="cover"
                        layout="responsive"
                    />
                </div>
            </div>
        </section>
    )
}