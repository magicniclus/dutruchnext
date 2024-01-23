"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Lightbox from "./components/Lightbox";

import { RootState } from '@/redux/store';

import { useSelector } from 'react-redux';

import Image from "next/image";

export default function Home() {

    // Sélectionnez la clé de langue actuelle de l'état Redux
    type LanguageKey = 'fr' | 'eng';
    const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

  return (
    <>
        <header>
          <Nav />
        </header>
        <main className="">
          <Hero />
          <Who lang={languageKey} />
          <Lightbox />
        </main>
    </>
  );
}
