import React, { useState } from "react";
import { Upload, Save, Eye, CheckCircle } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminBanner() {
  const { bannerConfig, setBannerConfig } = useStore();
  
  const [title, setTitle] = useState(bannerConfig.title || "");
  const [subtitle, setSubtitle] = useState(bannerConfig.subtitle || "");
  const [image, setImage] = useState(bannerConfig.image || "");
  const [ctaText, setCtaText] = useState(bannerConfig.ctaText || "Shop Now");
  const [ctaLink, setCtaLink] = useState(bannerConfig.ctaLink || "/shop");
  const [publishStatus, setPublishStatus] = useState(bannerConfig.publishStatus || "Published");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setBannerConfig({
      title,
      subtitle,
      image,
      ctaText,
      ctaLink,
      publishStatus: publishStatus as any
    });
    alert("Banner configuration updated successfully!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Mock image upload by using a default Unsplash image if clicked, or an object URL if a real file is chosen
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
    } else {
      // Fallback mock
      setImage("https://images.unsplash.com/photo-1512207128881-1b3072c6f6e2?auto=format&fit=crop&q=80&w=1200");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Homepage CMS: Banner</h2>
        <button onClick={handleSave} className="bg-emerald-800 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-900 transition-colors">
          <Save className="h-4 w-4" /> Save Configuration
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Editor Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 space-y-6">
          <h3 className="font-bold text-stone-800 border-b border-stone-100 pb-2">Banner Content</h3>
          
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Status</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" value="Published" checked={publishStatus === "Published"} onChange={() => setPublishStatus("Published")} className="text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm font-bold text-stone-700">Published</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" value="Draft" checked={publishStatus === "Draft"} onChange={() => setPublishStatus("Draft")} className="text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm font-bold text-stone-700">Draft</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Headline (Title)</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Sub-headline (Description)</label>
            <textarea 
              value={subtitle} 
              onChange={(e) => setSubtitle(e.target.value)} 
              rows={3}
              className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">CTA Button Text</label>
              <input 
                type="text" 
                value={ctaText} 
                onChange={(e) => setCtaText(e.target.value)} 
                className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">CTA Link</label>
              <input 
                type="text" 
                value={ctaLink} 
                onChange={(e) => setCtaLink(e.target.value)} 
                className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Background Image</label>
            <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-stone-50 transition-colors cursor-pointer relative overflow-hidden">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Upload className="h-8 w-8 text-stone-400 mb-2" />
              <p className="text-sm font-bold text-stone-700">Click to upload image</p>
              <p className="text-xs text-stone-500 mt-1">PNG, JPG up to 5MB</p>
            </div>
            <div className="mt-2 text-xs text-stone-500 font-mono break-all bg-stone-100 p-2 rounded-lg">
              Current URL: {image}
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-4">
          <h3 className="font-bold text-stone-800 flex items-center gap-2">
            <Eye className="h-5 w-5 text-emerald-600" /> Live Preview
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative bg-emerald-950 aspect-[4/3] flex items-center justify-center">
            
            {/* Background Image */}
            <img src={image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"} alt="Banner Preview" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-4">
                <CheckCircle className="h-3 w-3" />
                {subtitle || "Subtitle Preview"}
              </span>
              <h1 className="text-2xl font-extrabold tracking-tight text-white leading-tight font-sans mb-3">
                {title || "Headline Preview"}
              </h1>
              
              <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-emerald-950 shadow-md">
                {ctaText || "Button Text"}
              </button>
            </div>

            {publishStatus === "Draft" && (
              <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                DRAFT MODE
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
