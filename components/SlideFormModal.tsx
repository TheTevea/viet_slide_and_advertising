import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSlides } from '../context/SlideContext';
import { Slide, SlideCategory } from '../types';
import { ImageUploader } from './ImageUploader';

interface SlideFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    slide: Slide | null;
    category: SlideCategory;
}

export const SlideFormModal: React.FC<SlideFormModalProps> = ({ isOpen, onClose, slide, category }) => {
    const { addSlide, updateSlide } = useSlides();
    const [title, setTitle] = useState('');
    const [order, setOrder] = useState(1);
    const [status, setStatus] = useState<'active' | 'inactive'>('active');
    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (slide) {
            setTitle(slide.title);
            setOrder(slide.order);
            setStatus(slide.status);
            setImage(slide.image);
        } else {
            setTitle('');
            setOrder(1);
            setStatus('active');
            setImage(null);
        }
        setError(''); // Reset error on open
    }, [slide, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !image) {
            setError('Title and image are required.');
            return;
        }
        setError('');

        const slideData = {
            title,
            order: Number(order),
            status,
            image,
            category,
        };
        
        if (slide) {
            updateSlide({ ...slide, ...slideData });
        } else {
            addSlide(slideData);
        }
        onClose();
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b border-slate-200">
                    <h3 className="text-xl font-semibold text-slate-800">{slide ? 'Update Slide' : 'Add New Slide'}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
                    <ImageUploader image={image} onImageChange={setImage} />
                    
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            placeholder="e.g. Summer Collection"
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow"
                            required
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="order" className="block text-sm font-medium text-slate-700 mb-1">Order</label>
                            <input
                                id="order"
                                type="number"
                                min="1"
                                value={order}
                                onChange={(e) => setOrder(parseInt(e.target.value, 10) || 1)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow"
                                required
                            />
                        </div>
                         <div>
                            <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow bg-white"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                     {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}
                </form>
                <div className="flex justify-end items-center p-5 border-t border-slate-200 mt-auto bg-slate-50 rounded-b-xl">
                    <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg hover:bg-slate-100 mr-3 transition-colors">Cancel</button>
                    <button type="submit" onClick={handleSubmit} className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm">{slide ? 'Update Slide' : 'Save Slide'}</button>
                </div>
            </div>
        </div>
    );
};