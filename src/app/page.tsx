"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Who from "./components/Who";

import Image from "next/image";

export default function Home() {

  return (
    <>
        <header>
          <Nav />
          <Hero />
          <Who />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        </main>
    </>
  );
}
