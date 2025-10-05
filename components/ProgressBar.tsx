import React from 'react';
import { Stage } from '../types';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  score: number;
  currentStageEnum: Stage;
}

const stageNames: { [key in Stage]?: string } = {
    [Stage.THEORY]: "Teoría",
    [Stage.QUIZ]: "Quiz",
    [Stage.LAB]: "Laboratorio",
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, score, currentStageEnum }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const currentStageName = stageNames[currentStageEnum];

  return (
    <div className="w-full bg-slate-800/80 rounded-full p-2 border border-slate-700 backdrop-blur-sm sticky top-4 z-10">
        <div className="flex justify-between items-center px-4">
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-cyan-300">Progreso</span>
                    <span className="text-sm font-medium text-slate-400">{currentStageName ? `${currentStep}/${totalSteps}: ${currentStageName}`: ""}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                    className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
                </div>
            </div>
            <div className="w-px h-10 bg-slate-700 mx-6"></div>
            <div className="text-center">
                <div className="text-sm font-semibold text-purple-300">Puntuación</div>
                <div className="text-2xl font-bold text-white">{score}</div>
            </div>
        </div>
    </div>
  );
};

export default ProgressBar;