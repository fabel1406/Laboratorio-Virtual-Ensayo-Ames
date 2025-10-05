
import React from 'react';

const DnaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 4.5c-2.2-2.2-5.8-2.2-8 0s-2.2 5.8 0 8c2.2 2.2 5.8 2.2 8 0"></path>
        <path d="M8.5 19.5c2.2 2.2 5.8 2.2 8 0s2.2-5.8 0-8c-2.2-2.2-5.8-2.2-8 0"></path>
        <path d="M4.5 8.5h15"></path>
        <path d="M8.5 4.5v15"></path>
    </svg>
);

export default DnaIcon;
