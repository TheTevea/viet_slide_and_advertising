
import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { DeleteModal } from '../ui/dialog/DeleteModal';
import { useSlides } from '../../store/SlideContext';

export const DataSettings: React.FC = () => {
    const { logout } = useAuth();
    const { addNotification } = useSlides();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleClearData = () => {
        try {
            // Clear slides from local storage
            localStorage.removeItem('slides');
            // Log the user out, which clears their session
            logout();
            // A full page reload will happen implicitly as App.tsx rerenders to the login page.
            // On next login, slides will be re-initialized from mockData.
        } catch (error) {
            addNotification('Failed to clear data.', 'error');
            console.error('Data clearing error:', error);
        }
    };
    
    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5 border-2 border-transparent hover:border-red-500 transition-colors">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-md font-semibold text-slate-800">Clear All App Data</h3>
                        <p className="text-sm text-slate-500 mt-1">This will permanently delete all slides and log you out.</p>
                    </div>
                     <button
                        onClick={() => setIsDeleteModalOpen(true)}
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                    >
                        Clear Data
                    </button>
                </div>
            </div>
            <DeleteModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => {
                    setIsDeleteModalOpen(false);
                    handleClearData();
                }}
                title="Permanently Clear All Data?"
                description="This will delete all slides across all categories and log you out of the application. This action cannot be undone."
                confirmText="Yes, Clear Everything"
            />
        </>
    );
};
