import React, { useState } from 'react';
import { LAB_STRAINS, LAB_METHODS, LAB_S9_CHOICES } from '../constants';
import { LabChoice } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import BeakerIcon from './icons/BeakerIcon';

interface VirtualLabProps {
  addScore: (points: number) => void;
  onComplete: () => void;
}

type LabStep = 'intro' | 'strain' | 'method' | 's9' | 'results';

const VirtualLab: React.FC<VirtualLabProps> = ({ addScore, onComplete }) => {
  const [step, setStep] = useState<LabStep>('intro');
  const [feedback, setFeedback] = useState<{ text: string; correct: boolean } | null>(null);
  
  const handleChoice = (choice: LabChoice, correctId: string, points: number, nextStep: LabStep) => {
    const isCorrect = choice.id === correctId;
    setFeedback({ text: choice.feedback, correct: isCorrect });
    if (isCorrect) {
      addScore(points);
    }
    setTimeout(() => {
      setStep(nextStep);
      setFeedback(null);
    }, 3000);
  };

  const renderIntro = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">Caso Práctico: Laboratorio Virtual</h2>
      <div className="bg-slate-900 rounded-lg p-6 mb-6 text-left max-w-2xl mx-auto">
        <p className="text-xl font-semibold mb-2">Sustancia de Prueba: Nitrosamina Experimental NX-5</p>
        <p className="text-slate-300 mb-4">Se te ha encargado evaluar el potencial mutagénico de un nuevo compuesto. La inteligencia artificial predice que es un pro-mutágeno que probablemente causa sustituciones de pares de bases.</p>
        <p className="font-semibold text-green-300">Tu misión: Diseñar el experimento de Ames correctamente para obtener resultados fiables.</p>
      </div>
      <button onClick={() => setStep('strain')} className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-green-500/30">Comenzar Experimento</button>
    </div>
  );

  const renderStep = (title: string, question: string, choices: LabChoice[], correctId: string, points: number, nextStep: LabStep) => (
    <div>
        <h3 className="text-2xl font-bold text-green-400 text-center mb-2">{title}</h3>
        <p className="text-slate-400 text-center mb-6">{question}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {choices.map(choice => (
                <button 
                    key={choice.id}
                    onClick={() => handleChoice(choice, correctId, points, nextStep)}
                    disabled={!!feedback}
                    className="p-6 bg-slate-700 rounded-lg text-center hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {choice.text}
                </button>
            ))}
        </div>
    </div>
  );
  
  const renderResults = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">Análisis de Resultados</h2>
      <div className="bg-slate-900 rounded-lg p-6 mb-6 text-left max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <BeakerIcon className="w-24 h-24 text-cyan-400 flex-shrink-0" />
          <div>
            <p className="text-lg text-slate-300 mb-2"><span className="font-bold text-white">Observación:</span> Se contaron <span className="text-cyan-400 font-bold text-xl">245 colonias</span> revertantes en las placas tratadas con NX-5 + S9.</p>
            <p className="text-lg text-slate-300 mb-4"><span className="font-bold text-white">Control:</span> Las placas de control (sin NX-5) mostraron un promedio de <span className="font-bold text-xl">15</span> colonias de reversión espontánea.</p>
            <hr className="border-slate-700 my-4"/>
            <p className="font-bold text-xl text-green-300 mb-2">Interpretación:</p>
            <p className="text-slate-300">El número de colonias inducidas (245) es significativamente mayor que el doble del control espontáneo (2 x 15 = 30). Por lo tanto, el resultado es <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">POSITIVO</span> para mutagenicidad.</p>
          </div>
      </div>
      <button onClick={onComplete} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30">Ver mi Puntuación Final</button>
    </div>
  );

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 animate-fade-in">
      {step === 'intro' && renderIntro()}
      {step === 'strain' && renderStep('Paso 1: Selección de Cepa', 'Basado en las propiedades de la nitrosamina, ¿qué cepa bacteriana eliges?', LAB_STRAINS, 'TA100', 20, 'method')}
      {step === 'method' && renderStep('Paso 2: Selección de Metodología', '¿Qué metodología de ensayo maximizará la sensibilidad para este compuesto?', LAB_METHODS, 'preincubation', 20, 's9')}
      {step === 's9' && renderStep('Paso 3: Activación Metabólica', 'El compuesto es un pro-mutágeno. ¿Debes añadir la fracción S9 a tu ensayo?', LAB_S9_CHOICES, 'yes', 20, 'results')}
      {step === 'results' && renderResults()}
      
      {feedback && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className={`bg-slate-800 rounded-2xl p-8 shadow-2xl border ${feedback.correct ? 'border-green-500/50' : 'border-red-500/50'} w-full max-w-md text-center animate-scale-in`}>
            <div className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center ${feedback.correct ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
              {feedback.correct ? (
                <CheckIcon className="w-12 h-12 text-green-300" />
              ) : (
                <XIcon className="w-12 h-12 text-red-300" />
              )}
            </div>
            <h3 className={`text-3xl font-bold mb-3 ${feedback.correct ? 'text-green-300' : 'text-red-300'}`}>
              {feedback.correct ? '¡Decisión Correcta!' : 'Opción Incorrecta'}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {feedback.text}
            </p>
            <p className="text-slate-500 text-sm mt-6 italic">
              Avanzando al siguiente paso...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualLab;