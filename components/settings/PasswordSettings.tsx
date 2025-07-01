
import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { useSlides } from '../../store/SlideContext';

export const PasswordSettings: React.FC = () => {
    const { changePassword } = useAuth();
    const { addNotification } = useSlides();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);
        try {
            await changePassword(currentPassword, newPassword);
            addNotification('Password changed successfully!', 'success');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(errorMessage);
            addNotification(`Update failed: ${errorMessage}`, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                     {error && <p className="text-red-500 text-sm p-3 bg-red-50 border border-red-200 rounded-lg">{error}</p>}
                    <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                        <input
                            id="current-password"
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                             className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                            required
                        />
                    </div>
                     <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                        <input
                            id="new-password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                             className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                            required
                        />
                    </div>
                     <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
                        <input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                             className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                            required
                        />
                    </div>
                </div>
                 <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading || !currentPassword || !newPassword}
                        className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm disabled:bg-orange-300 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Updating...' : 'Change Password'}
                    </button>
                </div>
            </form>
        </div>
    );
};
