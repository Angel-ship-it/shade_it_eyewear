import React from 'react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#collections">Collections</NavLink>
          <NavLink href="#featured">Featured</NavLink>
          <NavLink href="#about">About</NavLink>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-600 hover:text-indigo-600 transition">
      {children}
    </a>
  );
}