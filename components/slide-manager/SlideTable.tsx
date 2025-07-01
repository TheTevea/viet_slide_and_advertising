
import React from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { Slide } from '../../types/index';

interface SlideTableProps {
    slides: Slide[];
    onEdit: (slide: Slide) => void;
    onDelete: (slide: Slide) => void;
}

const SlideCard: React.FC<{ slide: Slide; onEdit: (slide: Slide) => void; onDelete: (slide: Slide) => void; }> = ({ slide, onEdit, onDelete }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);


    return (
        <div className="bg-white rounded-lg shadow-md ring-1 ring-slate-900/5 p-4 flex gap-4 relative">
            <img src={slide.image} alt={slide.title} className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md bg-slate-100 flex-shrink-0" />
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-800 truncate pr-8">{slide.title}</h3>
                <div className="text-sm text-slate-500 mt-2 space-y-1">
                    <p><span className="font-semibold text-slate-600">Order:</span> {slide.order}</p>
                    <p className="flex items-center"><span className="font-semibold text-slate-600 mr-2">Status:</span> 
                        <span className={`py-0.5 px-2 text-xs font-semibold rounded-full ${slide.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {slide.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                    </p>
                    <p className="truncate"><span className="font-semibold text-slate-600">Updated by:</span> {slide.lastUpdatedBy}</p>
                </div>
            </div>
             <div className="absolute top-2 right-2" onClick={e => e.stopPropagation()}>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full text-slate-500 hover:bg-slate-100">
                    <MoreVertical size={20} />
                </button>
                {isMenuOpen && (
                     <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="#" onClick={(e) => { e.preventDefault(); onEdit(slide); setIsMenuOpen(false); }} className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" role="menuitem">
                                <Edit size={16} /> Edit
                            </a>
                            <a href="#" onClick={(e) => { e.preventDefault(); onDelete(slide); setIsMenuOpen(false); }} className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50" role="menuitem">
                                <Trash2 size={16} /> Delete
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export const SlideTable: React.FC<SlideTableProps> = ({ slides, onEdit, onDelete }) => {
    return (
        <>
            {/* Mobile & Tablet Card View */}
            <div className="md:hidden space-y-4">
                {slides.map(slide => (
                    <SlideCard key={slide.id} slide={slide} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-500">
                    <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Thumbnail</th>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Title</th>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Order</th>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Last Updated By</th>
                            <th scope="col" className="px-6 py-4 font-semibold tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {slides.map(slide => (
                            <tr key={slide.id} className="bg-white hover:bg-slate-50/50 even:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <img src={slide.image} alt={slide.title} className="w-28 h-20 object-cover rounded-lg bg-slate-100" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-slate-900">{slide.title}</td>
                                <td className="px-6 py-4">{slide.order}</td>
                                <td className="px-6 py-4">
                                    <span className={`py-1 px-3 text-xs font-semibold rounded-full ${slide.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {slide.status === 'active' ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{slide.lastUpdatedBy}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button onClick={() => onEdit(slide)} className="p-2 rounded-full text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                            <Edit size={18} />
                                        </button>
                                        <button onClick={() => onDelete(slide)} className="p-2 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};