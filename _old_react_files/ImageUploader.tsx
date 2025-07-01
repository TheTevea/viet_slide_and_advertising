import React, { useCallback, useState } from 'react';
import { UploadCloud, X } from 'lucide-react';

interface ImageUploaderProps {
    image: string | null;
    onImageChange: (base64: string | null) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ image, onImageChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (file: File | null) => {
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setError('File size cannot exceed 5MB.');
            return;
        }

        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            setError(null);
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setError('Invalid file type. Please upload a JPG or PNG file.');
        }
    };

    const onDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            handleFileChange(event.dataTransfer.files[0]);
        }
    }, []);
    
    const onDragEnter = (e: React.DragEvent<HTMLLabelElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
    const onDragLeave = (e: React.DragEvent<HTMLLabelElement>) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
    const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => { e.preventDefault(); e.stopPropagation(); };

    return (
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Photo</label>
            <div className="mt-1">
                <label
                    htmlFor="file-upload"
                    className={`relative flex justify-center items-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragging ? 'border-orange-500 bg-orange-50' : 'border-slate-300 hover:border-orange-400'}`}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                >
                    {image ? (
                        <>
                            <img src={image} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl">
                                <span className="text-white font-semibold">Change Photo</span>
                            </div>
                            <button 
                                type="button" 
                                onClick={(e) => { e.preventDefault(); onImageChange(null); }}
                                className="absolute top-2 right-2 p-1.5 bg-white/80 text-slate-700 rounded-full hover:bg-white hover:scale-110 transition-all"
                            >
                                <X size={18} />
                            </button>
                        </>
                    ) : (
                        <div className="space-y-2 text-center">
                            <UploadCloud size={48} className="mx-auto text-slate-400" />
                            <div className="flex text-sm text-slate-600">
                                <span className="font-semibold text-orange-600">Click to upload</span>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PNG or JPG (MAX. 5MB)</p>
                        </div>
                    )}
                </label>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)} accept="image/png, image/jpeg" />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
};