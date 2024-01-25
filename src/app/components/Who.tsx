import React, { useState, useEffect } from 'react';

// Définir les types de props pour le composant
interface WhoProps {
  lang: "fr" | "eng";
}

const Who = ({ lang }: WhoProps) => {
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

  const textFr = ()=>{
    return (
        <section>
            <h1 className="text-red font-bebas text-3xl">Grand poujeaux</h1>
            <h2 className='font-bebas text-xl text-text'>Le meilleur terroir de moulis-en-médoc</h2>
            <div className="w-[84px] h-0.5 bg-red mt-4"></div>
            <div className='font-cormorant mt-10 text-text'>
                <p>
                    Situées à l’extrême Est de l’appellation Moulis, nos vignes sont plantées 
                </p>
                <ul>
                    <li className='flex items-center'> <div className="mr-2 w-4 h-0.5 bg-red"></div>à 80% sur le plateau de Grand Poujeaux, connu pour être le meilleur terroir de Moulis,</li>
                    <li className='flex items-center'> <div className="mr-2 w-4 h-0.5 bg-red"></div>et à 20% dans des sols argilo-calcaires et sableux.</li>
                </ul>
                <p>
                    Cette diversité apporte à nos vins une grande complexité et une grande richesse.
                </p>
            </div>
            <div className='font-cormorant mt-10'>
                <p>
                    Le terroir Grand Poujeaux doit son excellence et sa réputation prestigieuse :
                </p>
                <ul>
                    <li className='flex items-center'> <div className="mr-2 w-4 h-0.5 bg-red"></div>à ses sols de graves profondes appelés « Terrasses de type 3 » faisant partie des tous meilleurs du Médoc,</li>
                    <li className='flex items-center'> <div className="mr-2 w-4 h-0.5 bg-red"></div>et à sa proximité avec l’estuaire de la Gironde dont les influences en termes de température et d’hygrométrie </li>
                </ul>
                <p>
                    permettent une maturation optimale des raisins.
                </p>
            </div>
            <button className='text-white bg-red py-3 px-4 rounded-full normal-lg mt-10'>DÉCOUVRIR NOS VINS</button>
        </section>
    )
  }

  const textAng = ()=>{
    return (
        <></>
    )
  }

  return (
    <div className={`w-full bg-cover bg-right py-20 ${showBackground ? 'md:bg-[url("/background/vigne.png")]' : ''}`}>
        <div className='mx-auto flex max-w-5xl py-2 px-4 min-h-[392px] w-full'>
            {
                lang === "fr" ? textFr() : textAng()
            }
        </div>
    </div>
  );
}

export default Who;
