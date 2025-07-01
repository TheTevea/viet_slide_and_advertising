
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { SlideManagerPage } from './pages/SlideManagerPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SlideCategory } from './types/index';
import { useSlides } from './store/SlideContext';
import { useAuth } from './store/AuthContext';
import { Notification } from './components/ui/notification/Notification';

const categoryTitles: Record<SlideCategory, string> = {
    'mobile-slideshow': 'Mobile Slide Show',
    'mobile-advertising': 'Mobile Advertising',
    'website-slideshow': 'Website Slide Show',
    'website-advertising': 'Website Advertising',
};

const App: React.FC = () => {
    const { user } = useAuth();
    const [authPage, setAuthPage] = useState<'login' | 'register'>('login');
    const [activeCategory, setActiveCategory] = useState<SlideCategory>('mobile-slideshow');
    const { notifications, removeNotification } = useSlides();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCategoryChange = (category: SlideCategory) => {
        setActiveCategory(category);
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
        }
    };

    if (!user) {
        if (authPage === 'login') {
            return <LoginPage navigateToRegister={() => setAuthPage('register')} />;
        }
        return <RegisterPage navigateToLogin={() => setAuthPage('login')} />;
    }

    return (
        <div className="flex bg-slate-50 min-h-screen">
            <Sidebar 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange}
                isSidebarOpen={isSidebarOpen} 
                setIsSidebarOpen={setIsSidebarOpen} 
            />

            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            <div className="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
                <Header 
                    title={categoryTitles[activeCategory]}
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <SlideManagerPage category={activeCategory} />
                </main>
            </div>
            
            <div className="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
                {notifications.map(notif => (
                    <Notification 
                        key={notif.id} 
                        message={notif.message} 
                        type={notif.type} 
                        onClose={() => removeNotification(notif.id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
