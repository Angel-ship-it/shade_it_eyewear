import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&q=80"
          alt="Elegant woman wearing ShadeItEyewear"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-xl text-white">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-wider">
                LIMITED EDITION COLLECTION
              </span>
            </div>
            
            <h1 className="text-5xl font-light space-y-2">
              <span className="block">Redefining</span>
              <span className="block font-medium">Elegance Through</span>
              <span className="block italic">Vision</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Each piece in our collection is meticulously crafted in limited quantities, 
              ensuring exclusivity and unparalleled attention to detail.
            </p>

            <button className="bg-white text-black px-8 py-4 text-lg tracking-wide hover:bg-gray-100 transition-colors">
              EXPLORE COLLECTION
            </button>

            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/20">
              <div>
                <p className="text-gray-400 text-sm">Limited Edition</p>
                <p className="text-2xl font-light">25 Pieces</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Handcrafted</p>
                <p className="text-2xl font-light">In Italy</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Sustainable</p>
                <p className="text-2xl font-light">Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-16">
            <span className="text-white/80 text-sm tracking-wider">PREMIUM MATERIALS</span>
            <span className="text-white/80 text-sm tracking-wider">ITALIAN CRAFTSMANSHIP</span>
            <span className="text-white/80 text-sm tracking-wider">LIFETIME WARRANTY</span>
          </div>
        </div>
      </div>
    </section>
  );
}