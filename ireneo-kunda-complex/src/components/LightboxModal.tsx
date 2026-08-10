import React from 'react';
import { X, Calendar } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description?: string;
  date?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  date,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 space-y-2 bg-slate-900 border-t border-slate-800">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
            {date && (
              <span className="text-xs text-amber-400 flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-md">
                <Calendar className="w-3.5 h-3.5" />
                <span>{date}</span>
              </span>
            )}
          </div>
          {description && <p className="text-xs text-slate-300 leading-relaxed">{description}</p>}
        </div>
      </div>
    </div>
  );
};
