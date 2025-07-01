
import React from 'react';

export const AppearanceSettings: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-md font-semibold text-slate-800">Dark Mode</h3>
                    <p className="text-sm text-slate-500">Coming soon!</p>
                </div>
                <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                    disabled
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    ></span>
                </button>
            </div>
        </div>
    );
};
