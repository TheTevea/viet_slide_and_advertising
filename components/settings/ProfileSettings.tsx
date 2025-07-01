
import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { useSlides } from '../../store/SlideContext';

export const ProfileSettings: React.FC = () => {
    const { user, updateProfile } = useAuth();
    const { addNotification } = useSlides();
    const [name, setName] = useState(user?.name || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name === user?.name || !name.trim()) return;

        setIsLoading(true);
        try {
            await updateProfile(name);
            addNotification('Profile updated successfully!', 'success');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            addNotification(`Update failed: ${errorMessage}`, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                         <input
                            id="email"
                            type="email"
                            value={user?.email || ''}
                            disabled
                            className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed"
                        />
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading || name === user?.name || !name.trim()}
                        className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm disabled:bg-orange-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};
