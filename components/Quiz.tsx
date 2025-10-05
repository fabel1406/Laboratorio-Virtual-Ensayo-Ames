import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface QuizProps {
  addScore: (points: number) => void;
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ addScore, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const question: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correctAnswerIndex;

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === question.correctAnswerIndex) {
      addScore(5);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onComplete();
    }
  };

  const getButtonClass = (index: number) => {
    if (!showFeedback) {
      return 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-cyan-400';
    }

    const isCorrectAnswer = index === question.correctAnswerIndex;
    const isSelectedAnswer = index === selectedAnswer;

    if (isCorrectAnswer) {
      // Highlight correct answer
      return 'bg-green-500/20 border-green-500 text-white';
    }

    if (isSelectedAnswer && !isCorrect) {
      // Highlight selected incorrect answer
      return 'bg-red-500/20 border-red-500 text-white';
    }

    // Disabled style for other buttons
    return 'bg-slate-800 border-slate-700 text-slate-500 opacity-50';
  };


  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400">Quiz Rápido</h2>
        <p className="text-slate-400">Pregunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</p>
      </div>

      <div className="bg-slate-900 rounded-lg p-6 mb-6">
        <p className="text-xl text-center text-slate-200">{question.question}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showFeedback}
            className={`p-4 rounded-lg text-left transition-all duration-300 border-2 ${getButtonClass(index)} ${!showFeedback ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`p-4 rounded-lg mt-6 text-center animate-fade-in flex items-center justify-center gap-3 ${isCorrect ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
          {isCorrect ? <CheckIcon className="w-6 h-6" /> : <XIcon className="w-6 h-6" />}
          <div>
            <p className="font-semibold">{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</p>
            <p className="text-sm">{question.feedback}</p>
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="text-center mt-8">
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-green-500/30"
          >
            {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ir al Laboratorio'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;