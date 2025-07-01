
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-4xl mx-auto text-center mb-8 sm:mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
        AI Story Generator
      </h1>
      <p className="text-slate-400 text-lg">
        Craft magnificent tales from a simple prompt.
      </p>
    </header>
  );
};