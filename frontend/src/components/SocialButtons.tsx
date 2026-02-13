import React from 'react';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-5 bg-slate-900 rounded-2xl text-slate-400 hover:text-white hover:bg-cyan-600 hover:-translate-y-2 transition-all duration-300 border border-slate-800 shadow-xl"
      aria-label={label}
    >
      <span className="text-3xl md:text-4xl">{icon}</span>
    </a>
  );
};