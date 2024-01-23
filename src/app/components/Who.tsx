import React, { useState, useEffect } from 'react';

const Who = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth < 1440);
    };

    // Définir l'état initial en fonction de la largeur de la fenêtre
    handleResize();

    // Ajouter le gestionnaire d'événements pour le redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoyer le gestionnaire d'événements lors du démontage
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full bg-cover bg-right min-h-[613px] ${showBackground ? 'md:bg-[url("/background/vigne.png")]' : ''}`}>
      
    </div>
  );
}

export default Who;
