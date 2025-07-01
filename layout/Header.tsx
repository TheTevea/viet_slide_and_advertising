import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="px-8 h-20 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
                <div className="flex items-center space-x-4 cursor-pointer group">
                    <img className="h-11 w-11 rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?u=moniroy" alt="User" />
                    <div className="text-right hidden sm:block">
                        <p className="font-semibold text-slate-800 text-sm">Moni Roy</p>
                        <p className="text-xs text-slate-500">Admin</p>
                    </div>
                     <ChevronDown size={20} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
            </div>
        </header>
    );
};