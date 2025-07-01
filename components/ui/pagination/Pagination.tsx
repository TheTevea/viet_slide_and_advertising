
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) => {
    const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    if (totalPages <= 1) return null;

    return (
        <nav className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6 mt-6 rounded-b-xl" aria-label="Pagination">
            <div className="hidden sm:block">
                <p className="text-sm text-slate-600">
                    Showing <span className="font-semibold text-slate-800">{startItem}</span> to <span className="font-semibold text-slate-800">{endItem}</span> of{' '}
                    <span className="font-semibold text-slate-800">{totalItems}</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft size={18} className="sm:mr-2" />
                    <span className="hidden sm:inline">Previous</span>
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 sm:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <span className="hidden sm:inline">Next</span>
                     <ChevronRight size={18} className="sm:ml-2" />
                </button>
            </div>
        </nav>
    );
};
