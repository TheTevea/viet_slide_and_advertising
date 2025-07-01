import React, { useState } from 'react';
import { ChevronDown, LayoutDashboard, Settings, LogOut, Presentation, Megaphone } from 'lucide-react';
import { SlideCategory } from '../types';

interface NavItemProps {
    icon: React.ReactNode;
    text: string | React.ReactNode;
    hasSubmenu?: boolean;
    isSubmenuOpen?: boolean;
    onClick: () => void;
    children?: React.ReactNode;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, hasSubmenu = false, isSubmenuOpen = false, onClick, children, active = false }) => (
    <div>
        <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onClick(); }} 
            className={`flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group ${active ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'text-slate-600 hover:bg-slate-100'}`}
        >
            <div className={active ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'}>{icon}</div>
            <span className="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">{text}</span>
            {hasSubmenu && <ChevronDown size={18} className={`transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />}
        </a>
        {hasSubmenu && isSubmenuOpen && (
            <ul className="pl-12 pr-2 py-1 space-y-1">{children}</ul>
        )}
    </div>
);

interface SubNavItemProps {
    text: string;
    onClick: () => void;
    active: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ text, onClick, active }) => (
    <li>
        <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onClick(); }} 
            className={`block p-2 text-sm rounded-md transition-colors ${active ? 'font-bold text-orange-600' : 'text-slate-500 hover:text-orange-500 font-medium'}`}
        >
            {text}
        </a>
    </li>
);

interface SidebarProps {
    activeView: SlideCategory;
    setActiveView: (view: SlideCategory) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    const [openMenus, setOpenMenus] = useState({ 
        mobile: activeView.startsWith('mobile'), 
        website: activeView.startsWith('website') 
    });

    const toggleMenu = (menu: 'mobile' | 'website') => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed">
            <div className="p-6 border-b border-slate-200 flex items-center justify-center h-20">
                <h1 className="text-3xl font-extrabold text-orange-500">Vireak Buntham</h1>
            </div>
            <nav className="flex-1 p-4 overflow-y-auto">
                <NavItem 
                    icon={<LayoutDashboard size={22} />}
                    text="Mobile"
                    hasSubmenu
                    isSubmenuOpen={openMenus.mobile}
                    onClick={() => toggleMenu('mobile')}
                    active={activeView.startsWith('mobile')}
                >
                    <SubNavItem text="Slide Show" active={activeView === 'mobile-slideshow'} onClick={() => setActiveView('mobile-slideshow')} />
                    <SubNavItem text="Advertising" active={activeView === 'mobile-advertising'} onClick={() => setActiveView('mobile-advertising')} />
                </NavItem>
                <NavItem
                    icon={<Presentation size={22} />}
                    text="Website"
                    hasSubmenu
                    isSubmenuOpen={openMenus.website}
                    onClick={() => toggleMenu('website')}
                    active={activeView.startsWith('website')}
                >
                    <SubNavItem text="Slide Show" active={activeView === 'website-slideshow'} onClick={() => setActiveView('website-slideshow')} />
                    <SubNavItem text="Advertising" active={activeView === 'website-advertising'} onClick={() => setActiveView('website-advertising')} />
                </NavItem>
                <NavItem icon={<Settings size={22} />} text="Settings" onClick={() => {}} />
            </nav>
            <div className="p-4 border-t border-slate-200">
                <NavItem 
                    icon={<LogOut size={22} />} 
                    text={<span className="text-red-500 group-hover:text-red-600">Logout</span>} 
                    onClick={() => {}}
                    active={false} // Ensure logout never gets the primary active style
                />
            </div>
        </aside>
    );
};