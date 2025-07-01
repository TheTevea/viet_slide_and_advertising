import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Slide } from '../types';

interface SlideTableProps {
    slides: Slide[];
    onEdit: (slide: Slide) => void;
    onDelete: (slide: Slide) => void;
}

export const SlideTable: React.FC<SlideTableProps> = ({ slides, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
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
                        <tr key={slide.id} className="bg-white hover:bg-slate-50/50 transition-colors">
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
    );
};