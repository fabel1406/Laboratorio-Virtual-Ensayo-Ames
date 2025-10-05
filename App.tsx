import React, { useState, useCallback } from 'react';
import { Stage } from './types';
import Introduction from './components/Introduction';
import Theory from './components/Theory';
import Quiz from './components/Quiz';
import VirtualLab from './components/VirtualLab';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>(Stage.INTRODUCTION);
  const [score, setScore] = useState<number>(0);
  const [participantName, setParticipantName] = useState<string>('');

  const stagesWithProgress = [Stage.THEORY, Stage.QUIZ, Stage.LAB];
  const totalProgressSteps = stagesWithProgress.length;
  const currentProgressStep = stagesWithProgress.indexOf(stage) + 1;

  const restart = useCallback(() => {
    setScore(0);
    setStage(Stage.INTRODUCTION);
    setParticipantName('');
  }, []);

  const addScore = useCallback((points: number) => {
    setScore(prev => prev + points);
  }, []);

  const nextStage = useCallback(() => {
    setStage(prev => {
      const stages = Object.values(Stage).filter(v => typeof v === 'number') as Stage[];
      const currentIndex = stages.indexOf(prev);
      if (currentIndex < stages.length - 1) {
        return stages[currentIndex + 1];
      }
      return prev;
    });
  }, []);

  const handleStart = useCallback((name: string) => {
    setParticipantName(name);
    nextStage();
  }, [nextStage]);

  const renderStage = () => {
    switch (stage) {
      case Stage.INTRODUCTION:
        return <Introduction onStart={handleStart} />;
      case Stage.THEORY:
        return <Theory onComplete={nextStage} />;
      case Stage.QUIZ:
        return <Quiz addScore={addScore} onComplete={nextStage} />;
      case Stage.LAB:
        return <VirtualLab addScore={addScore} onComplete={nextStage} />;
      case Stage.RESULTS:
        return <Results score={score} onRestart={restart} participantName={participantName} />;
      default:
        return <Introduction onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-200 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Laboratorio Virtual: Ensayo de Ames
          </h1>
          {stage !== Stage.INTRODUCTION && stage !== Stage.RESULTS && (
            <ProgressBar
              currentStep={currentProgressStep}
              totalSteps={totalProgressSteps}
              score={score}
              currentStageEnum={stage}
            />
          )}
        </header>
        <main className="w-full transition-opacity duration-500 ease-in-out">
          {renderStage()}
        </main>
      </div>
    </div>
  );
};

export default App;