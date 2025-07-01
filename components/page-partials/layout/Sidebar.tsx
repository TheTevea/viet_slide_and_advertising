
import React, { useState, useEffect } from 'react';
import { ChevronDown, LayoutDashboard, Presentation, X } from 'lucide-react';
import { SlideCategory } from '../../../types/index';

type View = 'manager' | 'settings';

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
    currentView: View;
    onNavigate: (view: View, category?: SlideCategory) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, currentView, onNavigate, isSidebarOpen, setIsSidebarOpen }) => {
    const [openMenus, setOpenMenus] = useState({ 
        mobile: activeView.startsWith('mobile'), 
        website: activeView.startsWith('website') 
    });

    useEffect(() => {
        // Keep menus open if the view is manager
        if(currentView === 'manager') {
            setOpenMenus({
                mobile: activeView.startsWith('mobile'),
                website: activeView.startsWith('website')
            });
        }
    }, [activeView, currentView]);


    const toggleMenu = (menu: 'mobile' | 'website') => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };


    return (
        <aside className={`w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-6 border-b border-slate-200 flex items-center justify-between h-20">
                 <img src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" alt="Vireak Buntham Logo" className="h-10 w-auto" />
                <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500 hover:text-orange-500" aria-label="Close menu">
                    <X size={24} />
                </button>
            </div>
            <nav className="flex-1 p-4 overflow-y-auto">
                <NavItem 
                    icon={<LayoutDashboard size={22} />}
                    text="Mobile"
                    hasSubmenu
                    isSubmenuOpen={openMenus.mobile}
                    onClick={() => toggleMenu('mobile')}
                    active={currentView === 'manager' && activeView.startsWith('mobile')}
                >
                    <SubNavItem text="Slide Show" active={activeView === 'mobile-slideshow'} onClick={() => onNavigate('manager', 'mobile-slideshow')} />
                    <SubNavItem text="Advertising" active={activeView === 'mobile-advertising'} onClick={() => onNavigate('manager', 'mobile-advertising')} />
                </NavItem>
                <NavItem
                    icon={<Presentation size={22} />}
                    text="Website"
                    hasSubmenu
                    isSubmenuOpen={openMenus.website}
                    onClick={() => toggleMenu('website')}
                    active={currentView === 'manager' && activeView.startsWith('website')}
                >
                    <SubNavItem text="Slide Show" active={activeView === 'website-slideshow'} onClick={() => onNavigate('manager', 'website-slideshow')} />
                    <SubNavItem text="Advertising" active={activeView === 'website-advertising'} onClick={() => onNavigate('manager', 'website-advertising')} />
                </NavItem>
            </nav>
        </aside>
    );
};
