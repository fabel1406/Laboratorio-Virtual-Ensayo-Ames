import React from 'react';

const SealIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="transparent" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="42" fill="transparent" stroke="currentColor" strokeWidth="1"/>
        <polygon 
            points="50,15 61,35 85,35 67,50 73,70 50,60 27,70 33,50 15,35 39,35" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth="2"
        />
        <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="serif" fontWeight="bold">A+</text>
    </svg>
);

export default SealIcon;
