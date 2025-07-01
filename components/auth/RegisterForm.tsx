import React, { useState } from 'react';
import { useAuth } from '../../store/AuthContext';
import { User, Mail, Lock } from 'lucide-react';

interface RegisterFormProps {
    navigateToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ navigateToLogin }) => {
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        setError('');
        setIsLoading(true);
        try {
            await register(name, email, password);
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
                <label htmlFor="name" className="sr-only">Full Name</label>
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                    required
                />
            </div>
            <div className="relative">
                <label htmlFor="email-reg" className="sr-only">Email</label>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    id="email-reg"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                    required
                />
            </div>
            <div className="relative">
                <label htmlFor="password-reg" className="sr-only">Password</label>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    id="password-reg"
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
                {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
            <p className="text-center text-sm text-slate-500">
                Already have an account?{' '}
                <button type="button" onClick={navigateToLogin} className="font-semibold text-orange-600 hover:underline">
                    Sign in
                </button>
            </p>
        </form>
    );
};
