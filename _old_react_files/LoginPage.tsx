import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { LoginForm } from '../components/auth/LoginForm';

interface LoginPageProps {
    navigateToRegister: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ navigateToRegister }) => {
    return (
        <AuthLayout title="Sign In">
            <LoginForm navigateToRegister={navigateToRegister} />
        </AuthLayout>
    );
};
