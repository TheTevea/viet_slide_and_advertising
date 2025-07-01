
import React from 'react';
import { ProfileSettings } from '../components/settings/ProfileSettings';
import { PasswordSettings } from '../components/settings/PasswordSettings';
import { AppearanceSettings } from '../components/settings/AppearanceSettings';
import { DataSettings } from '../components/settings/DataSettings';

export const SettingsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-slate-800">Profile</h2>
                    <p className="text-sm text-slate-500 mt-1">Manage your personal information.</p>
                </div>
                <div className="lg:col-span-2">
                    <ProfileSettings />
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-slate-800">Security</h2>
                    <p className="text-sm text-slate-500 mt-1">Change your password.</p>
                </div>
                <div className="lg:col-span-2">
                    <PasswordSettings />
                </div>
            </div>

            <hr className="my-8 border-slate-200" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-slate-800">Appearance</h2>
                    <p className="text-sm text-slate-500 mt-1">Customize the look and feel.</p>
                </div>
                <div className="lg:col-span-2">
                    <AppearanceSettings />
                </div>
            </div>

            <hr className="my-8 border-slate-200" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-slate-800">Data Management</h2>
                    <p className="text-sm text-slate-500 mt-1">Manage application data.</p>
                </div>
                <div className="lg:col-span-2">
                    <DataSettings />
                </div>
            </div>
        </div>
    );
};
