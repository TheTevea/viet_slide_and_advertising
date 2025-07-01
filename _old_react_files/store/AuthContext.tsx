

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User, AuthContextType } from '../types/index';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database - In a real app, this would be a backend API.
const MOCK_USERS: { [id: string]: User } = {
    '1': { id: '1', name: 'Moni Roy', email: 'admin@vireakbuntham.com' }
};
const MOCK_PASSWORDS: { [email: string]: string } = {
    'admin@vireakbuntham.com': 'password123'
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const storedUser = localStorage.getItem('authUser');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Could not parse user from localStorage", error);
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('authUser');
        }
    }, [user]);

    const login = async (email: string, password: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundUser = Object.values(MOCK_USERS).find(u => u.email === email);
                if (foundUser && MOCK_PASSWORDS[email] === password) {
                    setUser(foundUser);
                    resolve();
                } else {
                    reject(new Error('Invalid email or password.'));
                }
            }, 500);
        });
    };

    const register = async (name: string, email: string, password: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Object.values(MOCK_USERS).some(u => u.email === email)) {
                    reject(new Error('An account with this email already exists.'));
                    return;
                }
                const id = Date.now().toString();
                const newUser: User = { id, name, email };
                MOCK_USERS[id] = newUser;
                MOCK_PASSWORDS[email] = password;
                setUser(newUser);
                resolve();
            }, 500);
        });
    };
    
    const logout = () => {
        setUser(null);
    };

    const updateProfile = async (name: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user) {
                    const updatedUser = { ...user, name };
                    MOCK_USERS[user.id] = updatedUser;
                    setUser(updatedUser);
                    resolve();
                } else {
                    reject(new Error('User not found.'));
                }
            }, 500);
        });
    };

    const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user && MOCK_PASSWORDS[user.email] === currentPassword) {
                    MOCK_PASSWORDS[user.email] = newPassword;
                    resolve();
                } else {
                    reject(new Error('Incorrect current password.'));
                }
            }, 500);
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, updateProfile, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};