import React, { useState } from 'react';
import DnaIcon from './icons/DnaIcon';
import BeakerIcon from './icons/BeakerIcon';
import CheckIcon from './icons/CheckIcon';
// Fix: Import the missing BookOpenIcon component.
import BookOpenIcon from './icons/BookOpenIcon';

interface IntroductionProps {
  onStart: (name: string) => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleStartClick = () => {
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 animate-fade-in">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Bienvenido al Laboratorio Virtual</h2>
      <p className="text-slate-300 max-w-3xl mx-auto mb-8 text-lg">
        Estás a punto de sumergirte en el Ensayo de Ames, una de las pruebas más importantes en toxicología genética. 
        Este módulo interactivo te guiará a través de la teoría, te pondrá a prueba con un quiz y te permitirá tomar decisiones cruciales en un caso de laboratorio simulado.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left mb-10 max-w-4xl mx-auto">
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-blue-500/20 text-blue-400 p-2 rounded-full"><BookOpenIcon className="w-6 h-6" /></div>
            <h3 className="text-xl font-semibold text-white">Aprende</h3>
          </div>
          <p className="text-slate-400">Comprende los fundamentos científicos del ensayo, desde las cepas bacterianas hasta la activación metabólica.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-green-500/20 text-green-400 p-2 rounded-full"><BeakerIcon className="w-6 h-6" /></div>
            <h3 className="text-xl font-semibold text-white">Experimenta</h3>
          </div>
          <p className="text-slate-400">Aplica tus conocimientos en un caso práctico realista, seleccionando la cepa y metodología correctas.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-purple-500/20 text-purple-400 p-2 rounded-full"><CheckIcon className="w-6 h-6" /></div>
            <h3 className="text-xl font-semibold text-white">Evalúa</h3>
          </div>
          <p className="text-slate-400">Mide tu progreso con un sistema de puntuación y obtén retroalimentación personalizada para reforzar tu aprendizaje.</p>
        </div>
      </div>
      
      <div className="max-w-md mx-auto mb-8">
        <label htmlFor="name-input" className="block text-sm font-medium text-slate-300 mb-2">
            Para comenzar, por favor introduce tu nombre:
        </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Marie Curie"
          className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-full text-center text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
          autoComplete="name"
        />
      </div>

      <p className="text-slate-400 mb-8 italic">Duración estimada: 10-15 minutos.</p>

      <button
        onClick={handleStartClick}
        disabled={!name.trim()}
        className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Comenzar Aprendizaje
      </button>
    </div>
  );
};

export default Introduction;