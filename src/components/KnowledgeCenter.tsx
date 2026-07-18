import React, { useState } from "react";
import { Search, BookOpen, Leaf, Sparkles, HelpCircle, Heart, Award, ArrowRight, BookMarked, User } from "lucide-react";
import { Blog, Ingredient } from "../types";

interface KnowledgeCenterProps {
  blogs: Blog[];
  ingredients: Ingredient[];
  onSelectIngredientSearch: (ingName: string) => void;
}

export default function KnowledgeCenter({
  blogs,
  ingredients,
  onSelectIngredientSearch
}: KnowledgeCenterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  // Filter blogs
  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = activeCategory === "All" || b.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  // Filter ingredients
  const filteredIngredients = ingredients.filter(i => 
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["All", "Ayurveda", "Siddha", "Lifestyle", "Remedies"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-12">
      
      {/* Banner / Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 font-mono uppercase tracking-wider">
          <BookMarked className="h-4 w-4" /> IGO Pharma Wellness Library
        </span>
        <h2 className="text-3xl font-black text-emerald-950">Vedic Knowledge Center</h2>
        <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
          Unlock therapeutic guides, traditional seasonal habits (Ritucharya), home formulations, and deep botanical studies vetted by certified AYUSH physicians.
        </p>

        {/* Global knowledge search bar */}
        <div className="mx-auto max-w-md relative flex h-11 items-center rounded-full border border-stone-200 bg-white px-4 shadow-sm focus-within:border-emerald-700 transition-all mt-4">
          <Search className="h-5 w-5 text-stone-400" />
          <input 
            type="text" 
            placeholder="Search blogs, ingredients, home remedies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent px-3 text-sm outline-none placeholder-stone-400 text-stone-800"
          />
        </div>
      </div>

      {/* Main Grid Layout: Ingredients Library Left, Blogs/Remedies Right */}
      <div className="grid gap-8 lg:grid-cols-3">
        
        {/* Left Side: Herbal Ingredients Database */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5 border-b pb-3 border-stone-150">
              <Leaf className="h-5 w-5 text-emerald-700" />
              Botanical Herb Library
            </h3>

            {/* List searchable raw herbs */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {filteredIngredients.map(ing => (
                <button
                  key={ing.id}
                  onClick={() => setSelectedIngredient(ing)}
                  className={`w-full flex flex-col rounded-xl p-3 text-left transition-all border cursor-pointer ${selectedIngredient?.id === ing.id ? 'bg-emerald-50 border-emerald-600 shadow-sm' : 'bg-stone-50 hover:bg-stone-100 border-transparent'}`}
                >
                  <span className="text-xs font-bold text-stone-800">{ing.name}</span>
                  <span className="text-[10px] italic text-stone-400 font-mono">{ing.botanicalName}</span>
                </button>
              ))}
              {filteredIngredients.length === 0 && (
                <p className="text-xs text-stone-500 italic text-center py-4">No matching botanical herbs found.</p>
              )}
            </div>
          </div>

          {/* Interactive Herb Detail Card */}
          {selectedIngredient && (
            <div className="rounded-2xl border border-amber-100 bg-amber-50/20 p-5 shadow-sm space-y-4 animate-fade-in">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-800 font-mono">Botanical Profile</span>
                <h4 className="text-base font-bold text-emerald-950">{selectedIngredient.name}</h4>
                <p className="text-[10px] font-mono text-stone-500">{selectedIngredient.botanicalName}</p>
              </div>

              <div className="space-y-2 text-xs text-stone-700">
                {selectedIngredient.sanskritName && <p><strong>Sanskrit Name:</strong> {selectedIngredient.sanskritName}</p>}
                {selectedIngredient.tamilName && <p><strong>Tamil Name:</strong> {selectedIngredient.tamilName}</p>}
                <p><strong>Scriptural Properties:</strong> {selectedIngredient.properties}</p>
                <p className="font-light leading-relaxed">{selectedIngredient.description}</p>
              </div>

              <div className="space-y-2 border-t border-amber-200/50 pt-3">
                <h5 className="text-[10px] font-black uppercase text-stone-500">Known Clinical Synergies:</h5>
                <ul className="space-y-1 text-xs text-stone-600">
                  {selectedIngredient.benefits.slice(0, 3).map((b, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-amber-700 font-bold">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectIngredientSearch(selectedIngredient.name)}
                className="w-full flex items-center justify-center gap-1 rounded-xl bg-emerald-800 py-2.5 text-xs font-bold text-white hover:bg-emerald-950 transition-colors shadow-sm cursor-pointer"
              >
                Search Recipes with {selectedIngredient.name}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Educational Blog and Home Remedy Guides */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Tab category switchers */}
          <div className="flex flex-wrap border-b border-stone-200 pb-2 gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedBlog(null);
                }}
                className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${activeCategory === cat ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Core educational views */}
          {!selectedBlog ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredBlogs.map(blog => (
                <div 
                  key={blog.id}
                  onClick={() => setSelectedBlog(blog)}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 w-full overflow-hidden">
                      <img src={blog.image} alt={blog.title} className="h-full w-full object-cover hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">
                        <span>{blog.category}</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-stone-900 line-clamp-2 leading-snug">{blog.title}</h4>
                      <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed font-light">{blog.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-4 border-t border-stone-50 flex items-center justify-between text-[11px] text-stone-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" /> By {blog.author}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              ))}
              {filteredBlogs.length === 0 && (
                <p className="sm:col-span-2 text-center py-12 text-sm text-stone-500 italic">No matching wellness articles found in this category.</p>
              )}
            </div>
          ) : (
            /* Single Blog full detail presentation */
            <div className="rounded-2xl border border-amber-100 bg-white p-6 md:p-8 shadow-sm space-y-6 animate-fade-in">
              <button 
                onClick={() => setSelectedBlog(null)}
                className="text-xs font-bold text-stone-400 hover:text-stone-800 cursor-pointer"
              >
                ← Back to Wellness Guides
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-amber-700 font-mono">
                  <span>{selectedBlog.category}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900 leading-tight">{selectedBlog.title}</h3>
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <span>By <strong>{selectedBlog.author}</strong></span>
                  <span>•</span>
                  <span>Published {selectedBlog.date}</span>
                </div>
              </div>

              <div className="h-64 rounded-xl overflow-hidden border">
                <img src={selectedBlog.image} alt={selectedBlog.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </div>

              {/* Blog body markdown */}
              <div className="prose max-w-none text-xs md:text-sm text-stone-700 leading-relaxed space-y-4 font-light whitespace-pre-line">
                {selectedBlog.content}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100">
                {selectedBlog.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold text-stone-500 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
