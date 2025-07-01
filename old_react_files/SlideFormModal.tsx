
import React, { useState, useEffect } from 'react';
import { X, WandSparkles } from 'lucide-react';
import { useSlides } from '../../../store/SlideContext';
import { Slide, SlideCategory } from '../../../types/index';
import { ImageUploader } from '../ImageUploader';
import { generateTitleFromImage } from '../../../services/geminiService';

interface SlideFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    slide: Slide | null;
    category: SlideCategory;
}

export const SlideFormModal: React.FC<SlideFormModalProps> = ({ isOpen, onClose, slide, category }) => {
    const { addSlide, updateSlide, addNotification } = useSlides();
    const [title, setTitle] = useState('');
    const [order, setOrder] = useState(1);
    const [status, setStatus] = useState<'active' | 'inactive'>('active');
    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState(false);

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
        setError('');
        setIsGenerating(false);
    }, [slide, isOpen]);

    const handleGenerateTitle = async () => {
        if (!image) {
            addNotification("Please upload an image first to generate a title.", "error");
            return;
        }
        setIsGenerating(true);
        try {
            const generatedTitle = await generateTitleFromImage(image);
            setTitle(generatedTitle);
            addNotification("Title generated successfully!", "success");
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
            addNotification(`AI generation failed: ${errorMessage}`, "error");
            console.error(err);
        } finally {
            setIsGenerating(false);
        }
    };

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
        <div className="fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-0 sm:p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-none sm:rounded-xl shadow-2xl w-full h-full sm:w-11/12 sm:max-w-4xl sm:h-auto sm:max-h-[95vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 sm:p-5 border-b border-slate-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800">{slide ? 'Update Slide' : 'Add New Slide'}</h3>
                    <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
                        <ImageUploader image={image} onImageChange={setImage} />
                        
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label htmlFor="title" className="block text-sm font-medium text-slate-700">Title</label>
                                <button
                                    type="button"
                                    onClick={handleGenerateTitle}
                                    disabled={!image || isGenerating}
                                    className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 disabled:text-slate-400 disabled:cursor-not-allowed"
                                >
                                    <WandSparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                                    {isGenerating ? 'Generating...' : 'Generate with AI'}
                                </button>
                            </div>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                placeholder="e.g. Summer Collection"
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                                required
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="order" className="block text-sm font-medium text-slate-700 mb-1">Order</label>
                                <input
                                    id="order"
                                    type="number"
                                    min="1"
                                    value={order}
                                    onChange={(e) => setOrder(parseInt(e.target.value, 10) || 1)}
                                    className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                                    className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    </div>
                    <div className="flex justify-end items-center p-4 sm:p-5 border-t border-slate-200 mt-auto bg-slate-50 sm:rounded-b-xl">
                        <button type="button" onClick={onClose} className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg hover:bg-slate-100 mr-3 transition-colors">Cancel</button>
                        <button type="submit" className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm">{slide ? 'Update Slide' : 'Save Slide'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};