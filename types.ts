// Fix: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export enum Stage {
  INTRODUCTION,
  THEORY,
  QUIZ,
  LAB,
  RESULTS,
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export interface TheoryCardData {
    title: string;
    content: string;
    icon: React.ComponentType<{ className?: string }>;
    color: 'blue' | 'green' | 'purple';
}

export interface LabChoice {
    id: string;
    text: string;
    feedback: string;
}

export interface Badge {
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
}