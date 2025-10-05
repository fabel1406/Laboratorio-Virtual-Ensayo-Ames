
import React from 'react';
import { THEORY_CARDS } from '../constants';
import { TheoryCardData } from '../types';

interface TheoryProps {
  onComplete: () => void;
}

const colorClasses = {
    blue: {
        bg: 'bg-blue-900/50 border-blue-700',
        iconBg: 'bg-blue-500/20 text-blue-400',
        title: 'text-blue-300'
    },
    green: {
        bg: 'bg-green-900/50 border-green-700',
        iconBg: 'bg-green-500/20 text-green-400',
        title: 'text-green-300'
    },
    purple: {
        bg: 'bg-purple-900/50 border-purple-700',
        iconBg: 'bg-purple-500/20 text-purple-400',
        title: 'text-purple-300'
    }
}

const TheoryCard: React.FC<{ card: TheoryCardData }> = ({ card }) => {
    const classes = colorClasses[card.color];
    return (
        <div className={`p-6 rounded-xl border ${classes.bg} flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
            <div className="flex items-center gap-4">
                 <div className={`p-3 rounded-full ${classes.iconBg}`}>
                    <card.icon className="w-7 h-7" />
                 </div>
                 <h3 className={`text-2xl font-bold ${classes.title}`}>{card.title}</h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">{card.content}</p>
        </div>
    );
};


const Theory: React.FC<TheoryProps> = ({ onComplete }) => {
  return (
    <div className="animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">Fundamentos Teóricos</h2>
            <p className="text-slate-400 text-lg">Repasa los conceptos clave antes de la evaluación y el laboratorio.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
            {THEORY_CARDS.map(card => <TheoryCard key={card.title} card={card} />)}
        </div>
        <div className="text-center">
            <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30"
            >
            Ir al Quiz
            </button>
      </div>
    </div>
  );
};

export default Theory;
