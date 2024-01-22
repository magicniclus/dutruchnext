"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";

import Image from "next/image";

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function Home() {
  return (
    
      <Provider store={store}>
        <header>
          <Nav />
          <Hero />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        </main>
      </Provider>
  );
}
