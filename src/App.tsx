import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sustainability } from './components/Sustainability';
import { Collections } from './components/Collections';
import { Featured } from './components/Featured';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Sustainability />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

export default App;