import React from 'react';
import { Badge } from '../types';
import SealIcon from './icons/SealIcon';

interface Evaluation {
    title: string;
    badge: string;
    message: string;
    color: string;
}

interface CertificateProps {
    score: number;
    participantName: string;
    evaluation: Evaluation;
    unlockedBadges: Badge[];
}

// NOTE: This component is styled with a white background and dark text for PDF export.
const Certificate: React.FC<CertificateProps> = ({ score, participantName, evaluation, unlockedBadges }) => {
    const today = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div id="certificate-for-pdf" className="bg-white text-gray-800 font-serif" style={{ width: '210mm', height: '297mm', padding: '20mm', display: 'flex', flexDirection: 'column', border: '10px solid #e5e7eb' }}>
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-700" style={{ fontFamily: '"Garamond", serif' }}>Certificado de Finalización</h1>
                <p className="text-xl mt-2 text-gray-600">Módulo Interactivo: Ensayo de Mutagenicidad de Ames</p>
            </div>

            <div className="text-center my-8">
                <p className="text-lg text-gray-600">Se otorga este certificado a:</p>
                <p className="text-4xl font-semibold my-4 text-blue-800" style={{ fontFamily: '"Garamond", serif' }}>{participantName}</p>
            </div>

            <div className="text-center text-lg text-gray-700 leading-relaxed flex-grow">
                <p>Por haber completado exitosamente el módulo de aprendizaje y laboratorio virtual, demostrando competencia en los principios y la aplicación del Ensayo de Ames.</p>
                <p className="mt-6">Puntuación Final Obtenida:</p>
                <p className="text-6xl font-bold text-blue-800 my-4">{score} / 100</p>
                <p className="font-semibold text-2xl" style={{ color: '#374151' }}>"{evaluation.title}"</p>
            </div>
            
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Insignias Obtenidas:</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                    {unlockedBadges.map(badge => (
                        <div key={badge.name} className="flex items-center gap-2 p-2 border border-gray-300 rounded-md bg-gray-50">
                            <badge.icon className="w-6 h-6 text-yellow-600" />
                            <span className="text-sm font-semibold text-gray-700">{badge.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-8 flex justify-between items-center text-gray-600">
                <div className="text-left">
                    <p className="text-sm">Fecha de Emisión: {today}</p>
                    <p className="text-sm">Laboratorio Virtual de Toxicología</p>
                </div>
                <div>
                    <SealIcon className="w-24 h-24 text-blue-800" />
                </div>
            </div>
        </div>
    );
};

export default Certificate;