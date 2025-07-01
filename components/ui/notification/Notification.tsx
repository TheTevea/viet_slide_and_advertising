import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    const isSuccess = type === 'success';
    
    const baseClasses = "max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
    const iconColor = isSuccess ? 'text-green-500' : 'text-red-500';
    const textColor = 'text-slate-800';
    const closeButtonHover = isSuccess ? 'hover:bg-green-100' : 'hover:bg-red-100';

    return (
        <div className={baseClasses}>
            <div className="p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        {isSuccess ? 
                            <CheckCircle className={iconColor} aria-hidden="true" /> : 
                            <XCircle className={iconColor} aria-hidden="true" />}
                    </div>
                    <div className={`ml-3 w-0 flex-1 pt-0.5`}>
                        <p className={`text-sm font-semibold ${textColor}`}>{isSuccess ? 'Successfully!' : 'Error!'}</p>
                        <p className={`mt-1 text-sm text-slate-500`}>{message}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button 
                            onClick={onClose} 
                            className={`inline-flex rounded-md p-1.5 text-slate-400 ${closeButtonHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-colors`}
                        >
                            <span className="sr-only">Close</span>
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};