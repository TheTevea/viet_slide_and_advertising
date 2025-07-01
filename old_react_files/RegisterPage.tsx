import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RegisterForm } from '../components/auth/RegisterForm';

interface RegisterPageProps {
    navigateToLogin: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ navigateToLogin }) => {
    return (
        <AuthLayout title="Create Account">
            <RegisterForm navigateToLogin={navigateToLogin} />
        </AuthLayout>
    );
};
