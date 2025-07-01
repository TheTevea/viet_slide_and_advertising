
import React, { useState } from 'react';
import { Plus, Image as ImageIcon } from 'lucide-react';
import { useSlides } from '../store/SlideContext';
import { SlideTable } from '../components/slide-manager/SlideTable';
import { SlideFormModal } from '../components/ui/dialog/SlideFormModal';
import { DeleteModal } from '../components/ui/dialog/DeleteModal';
import { Pagination } from '../components/ui/pagination/Pagination';
import { Slide, SlideCategory } from '../types/index';

interface SlideManagerPageProps {
    category: SlideCategory;
}

export const SlideManagerPage: React.FC<SlideManagerPageProps> = ({ category }) => {
    const { getSlidesByCategory, deleteSlide } = useSlides();
    const slides = getSlidesByCategory(category);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
    const [slideToDelete, setSlideToDelete] = useState<Slide | null>(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const totalItems = slides.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginatedSlides = slides.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    const handleAddClick = () => {
        setSelectedSlide(null);
        setIsFormModalOpen(true);
    };

    const handleEditClick = (slide: Slide) => {
        setSelectedSlide(slide);
        setIsFormModalOpen(true);
    };

    const handleDeleteClick = (slide: Slide) => {
        setSlideToDelete(slide);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (slideToDelete) {
            deleteSlide(slideToDelete.id);
            setIsDeleteModalOpen(false);
            setSlideToDelete(null);
        }
    };
    
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-700">All Slides</h3>
                <button
                    onClick={handleAddClick}
                    className="flex items-center bg-orange-500 text-white px-3 sm:px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
                >
                    <Plus size={20} className="sm:mr-2" />
                    <span className="font-semibold hidden sm:inline">Add New</span>
                </button>
            </div>
            
            {slides.length > 0 ? (
                <>
                    <SlideTable slides={paginatedSlides} onEdit={handleEditClick} onDelete={handleDeleteClick} />
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                    />
                </>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">
                    <ImageIcon size={64} className="mx-auto text-slate-300" />
                    <h4 className="mt-4 text-lg font-semibold text-slate-600">No Slides Yet</h4>
                    <p className="text-slate-400 text-sm mt-1">Click "Add New" to create your first slide.</p>
                </div>
            )}
            
            {isFormModalOpen && (
                <SlideFormModal
                    isOpen={isFormModalOpen}
                    onClose={() => setIsFormModalOpen(false)}
                    slide={selectedSlide}
                    category={category}
                />
            )}

            {isDeleteModalOpen && slideToDelete && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={confirmDelete}
                />
            )}
        </div>
    );
};