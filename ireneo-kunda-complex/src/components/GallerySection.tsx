import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/schoolData';
import { Search, Image as ImageIcon, ZoomIn, Calendar, Tag } from 'lucide-react';

interface GallerySectionProps {
  onSelectImageForLightbox: (imgUrl: string, title: string, desc?: string, date?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectImageForLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Classroom', 'STEM', 'Arts'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>Campus Media Archives</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Campus Life & Photo Gallery
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Take a visual tour of our vibrant school community, academic achievements, sports competitions, and modern campus infrastructure.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search gallery photos..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-slate-900"
          />
        </div>
      </div>

      {/* Photos Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-3">
          <p className="text-slate-500 text-sm font-semibold">No photos match your current search query or filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-amber-600 underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onSelectImageForLightbox(item.imageUrl, item.title, item.description, item.date)
              }
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-slate-950 font-bold p-2.5 rounded-full shadow-lg">
                    <ZoomIn className="w-5 h-5 text-amber-600" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-amber-700 font-bold">View Lightbox</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
