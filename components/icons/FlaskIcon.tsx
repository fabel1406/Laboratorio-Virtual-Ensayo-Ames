
import React from 'react';

const FlaskIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6"></path>
        <path d="M12 3v7.5"></path>
        <path d="M11 14h2"></path>
        <path d="M7 21a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v0a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Z"></path>
    </svg>
);

export default FlaskIcon;
