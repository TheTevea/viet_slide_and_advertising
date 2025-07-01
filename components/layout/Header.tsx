
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, LogOut } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';

interface HeaderProps {
    title: string;
    onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDropdownOpen(false);
        logout();
    }
    
    return (
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200">
            <div className="px-4 sm:px-8 h-20 flex justify-between items-center">
                <div className="flex items-center gap-4">
                     <button onClick={onMenuClick} className="lg:hidden text-slate-600 hover:text-orange-500" aria-label="Open menu">
                        <Menu size={24} />
                    </button>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 whitespace-nowrap">{title}</h2>
                </div>
                
                <div className="relative" ref={dropdownRef}>
                    <div 
                        onClick={() => setIsDropdownOpen(prev => !prev)} 
                        className="flex items-center space-x-2 sm:space-x-4 cursor-pointer group p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                    >
                        <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white" src={`https://i.pravatar.cc/150?u=${user?.email}`} alt="User" />
                        <div className="text-right hidden sm:block">
                            <p className="font-semibold text-slate-800 text-sm">{user?.name || 'User'}</p>
                            <p className="text-xs text-slate-500">Admin</p>
                        </div>
                         <ChevronDown size={20} className={`text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30 animate-in fade-in-0 zoom-in-95">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                <div className="px-4 py-3 border-b border-slate-100">
                                    <p className="text-sm font-semibold text-slate-900 leading-tight">{user?.name}</p>
                                    <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email}</p>
                                </div>
                                <div className="py-1">
                                    <a href="#" onClick={handleLogout} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors" role="menuitem">
                                        <LogOut size={16} className="text-slate-500" />
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
