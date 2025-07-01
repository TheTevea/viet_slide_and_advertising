
import React from 'react';

interface AuthLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md">
                <div className="flex justify-center items-center mb-6">
                    <img src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" alt="Vireak Buntham Logo" className="h-12 w-auto" />
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg ring-1 ring-slate-900/5">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-1">{title}</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">Welcome! Please enter your details.</p>
                    {children}
                </div>
            </div>
        </div>
    );
};
