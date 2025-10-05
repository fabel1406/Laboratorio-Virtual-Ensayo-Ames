import React, { useState } from 'react';
import StarIcon from './icons/StarIcon';
import { Badge } from '../types';
import BookOpenIcon from './icons/BookOpenIcon';
import BeakerIcon from './icons/BeakerIcon';
import CheckIcon from './icons/CheckIcon';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Certificate from './Certificate';

interface ResultsProps {
  score: number;
  onRestart: () => void;
  participantName: string;
}

const getUnlockedBadges = (score: number): Badge[] => {
    const allBadges: { threshold: number; badge: Badge }[] = [
        {
            threshold: 0,
            badge: {
                name: 'Explorador del Ames',
                description: 'Completaste el módulo de aprendizaje.',
                icon: BookOpenIcon,
                color: 'text-slate-300',
                bgColor: 'bg-slate-700/50'
            }
        },
        {
            threshold: 50,
            badge: {
                name: 'Técnico de Laboratorio',
                description: 'Demostraste un conocimiento fundamental del procedimiento.',
                icon: BeakerIcon,
                color: 'text-yellow-400',
                bgColor: 'bg-yellow-900/50'
            }
        },
        {
            threshold: 70,
            badge: {
                name: 'Científico Metódico',
                description: 'Aplicaste correctamente los conceptos en el laboratorio.',
                icon: CheckIcon,
                color: 'text-green-400',
                bgColor: 'bg-green-900/50'
            }
        },
        {
            threshold: 90,
            badge: {
                name: 'Maestro de la Mutagénesis',
                description: 'Dominas los detalles y matices del Ensayo de Ames.',
                icon: StarIcon,
                color: 'text-cyan-400',
                bgColor: 'bg-cyan-900/50'
            }
        }
    ];

    return allBadges
        .filter(item => score >= item.threshold)
        .map(item => item.badge);
};

const Results: React.FC<ResultsProps> = ({ score, onRestart, participantName }) => {
  const [isExporting, setIsExporting] = useState(false);

  const getEvaluation = () => {
    if (score >= 90) {
      return {
        title: '¡Excelente!',
        badge: 'Experto en Mutagenicidad',
        message: 'Has demostrado un dominio excepcional de los conceptos y su aplicación práctica. Tus decisiones en el laboratorio fueron impecables. ¡Gran trabajo!',
        color: 'text-cyan-400',
        badgeColor: 'bg-cyan-500/20 text-cyan-300'
      };
    }
    if (score >= 70) {
      return {
        title: '¡Muy Bien!',
        badge: 'Científico Prometedor',
        message: 'Tienes una sólida comprensión del Ensayo de Ames. Cometiste algunos pequeños errores, pero tu razonamiento general fue correcto. ¡Sigue así!',
        color: 'text-green-400',
        badgeColor: 'bg-green-500/20 text-green-300'
      };
    }
    if (score >= 50) {
      return {
        title: 'Aprobado',
        badge: 'Conocimiento Fundamental',
        message: 'Comprendes los conceptos básicos, pero hay áreas clave que necesitan refuerzo. Repasa la teoría sobre la especificidad de las cepas y metodologías.',
        color: 'text-yellow-400',
        badgeColor: 'bg-yellow-500/20 text-yellow-300'
      };
    }
    return {
      title: 'Necesita Repasar',
      badge: 'Estudiante en Formación',
      message: 'Parece que algunos conceptos fundamentales no quedaron claros. Te recomendamos repetir el módulo para afianzar tus conocimientos antes de continuar.',
      color: 'text-red-400',
      badgeColor: 'bg-red-500/20 text-red-300'
    };
  };

  const evaluation = getEvaluation();
  const scorePercentage = score;
  const unlockedBadges = getUnlockedBadges(score).reverse();
  
  const handleExportPDF = async () => {
    setIsExporting(true);
    const certificateElement = document.getElementById('certificate-for-pdf');
    if (!certificateElement) {
        console.error('Certificate element not found!');
        setIsExporting(false);
        return;
    }

    try {
        const canvas = await html2canvas(certificateElement, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Certificado_Ensayo_Ames_${participantName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Hubo un error al generar el PDF. Por favor, inténtalo de nuevo.');
    } finally {
        setIsExporting(false);
    }
  };

  return (
    <>
      <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 animate-fade-in">
        <h2 className={`text-4xl font-extrabold ${evaluation.color} mb-2`}>{evaluation.title}</h2>
        <p className="text-xl text-slate-400 mb-4">Certificado para: <span className="font-bold text-white">{participantName}</span></p>

        <div className="my-8 flex justify-center items-center">
          <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                      className="text-slate-700"
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                  />
                  <path
                      className={evaluation.color}
                      strokeDasharray={`${scorePercentage}, 100`}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{transition: 'stroke-dasharray 1.5s ease-out'}}
                  />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-4xl font-bold text-white">{score}</span>
                  <span className="text-slate-400 block text-sm">puntos</span>
              </div>
          </div>
        </div>
        
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold ${evaluation.badgeColor} mb-6`}>
          <StarIcon className="w-5 h-5" />
          {evaluation.badge}
        </span>
        
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          {evaluation.message}
        </p>

        <div className="mt-12 w-full max-w-3xl mx-auto">
          <div className="w-full border-t border-slate-700 mb-8"></div>
          <h3 className="text-2xl font-bold text-slate-300 text-center mb-6">Insignias Desbloqueadas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unlockedBadges.map((badge, index) => (
              <div 
                  key={index} 
                  className={`p-4 rounded-lg border border-slate-700/50 flex items-center gap-4 ${badge.bgColor} animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-md ${badge.color}`}>{badge.name}</h4>
                  <p className="text-sm text-slate-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <button
              onClick={onRestart}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-cyan-500/30"
            >
              Reiniciar Módulo
            </button>
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-wait"
            >
              {isExporting ? 'Exportando...' : 'Exportar Certificado PDF'}
            </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 opacity-0" style={{ left: '-9999px' }}>
          <Certificate
              score={score}
              participantName={participantName}
              evaluation={evaluation}
              unlockedBadges={unlockedBadges}
          />
      </div>
    </>
  );
};

export default Results;