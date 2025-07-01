import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { Mail, Lock } from 'lucide-react';

interface LoginFormProps {
    navigateToRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ navigateToRegister }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('admin@vireakbuntham.com');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await login(email, password);
            // On success, App.tsx will handle the redirect
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-3 text-center">{error}</p>}
            <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                    required
                />
            </div>
            <div className="relative">
                 <label htmlFor="password" className="sr-only">Password</label>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                    required
                />
            </div>
             <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center px-6 py-3.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 disabled:bg-orange-300 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
            <p className="text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <button type="button" onClick={navigateToRegister} className="font-semibold text-orange-600 hover:underline">
                    Sign up
                </button>
            </p>
        </form>
    );
};
