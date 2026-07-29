import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  FileText, CheckCircle, FileEdit, Star, 
  Search, RefreshCcw, Eye, Edit, Trash2, 
  Clock, Calendar, X, Plus, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { AdminBlog } from '../../types';

export default function AdminBlogs() {
  const { adminBlogs } = useStore();
  const [selectedBlog, setSelectedBlog] = useState<AdminBlog | null>(adminBlogs[0] || null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [authorFilter, setAuthorFilter] = useState("All Authors");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Derived stats
  const totalBlogs = 128; // Hardcoded mock to match screenshot, or use adminBlogs.length if preferred. Let's use 128 to match screenshot perfectly.
  const publishedCount = 96;
  const draftCount = 18;
  const featuredCount = 14;

  const filteredBlogs = adminBlogs.filter(blog => {
    return (
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.author.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (categoryFilter === "All Categories" || blog.category === categoryFilter) &&
      (statusFilter === "All Status" || blog.status === statusFilter) &&
      (authorFilter === "All Authors" || blog.author === authorFilter)
    );
  });

  const totalPages = Math.ceil(128 / itemsPerPage); // Match screenshot entries count

  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All Categories");
    setStatusFilter("All Status");
    setAuthorFilter("All Authors");
  };

  return (
    <div className="flex gap-6 relative">
      {/* Main Content Area */}
      <div className={`flex-1 space-y-6 ${selectedBlog ? 'hidden lg:block lg:w-2/3' : 'w-full'}`}>
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-stone-800">Blog Management</h2>
            <p className="text-sm text-stone-500">Manage and organize your blog posts</p>
          </div>
          <button className="bg-emerald-800 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-900 transition-colors">
            <Plus className="h-4 w-4" /> Add New Blog
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase">Total Blogs</p>
              <p className="text-2xl font-black text-stone-800">{totalBlogs}</p>
              <p className="text-xs text-stone-400">All blog posts</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase">Published</p>
              <p className="text-2xl font-black text-stone-800">{publishedCount}</p>
              <p className="text-xs text-stone-400">Live on website</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
              <FileEdit className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase">Drafts</p>
              <p className="text-2xl font-black text-stone-800">{draftCount}</p>
              <p className="text-xs text-stone-400">Not published</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-500 uppercase">Featured</p>
              <p className="text-2xl font-black text-stone-800">{featuredCount}</p>
              <p className="text-xs text-stone-400">Featured blogs</p>
            </div>
          </div>
        </div>

        {/* Filters & Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search blog..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="All Categories">All Categories</option>
                <option value="Ayurveda">Ayurveda</option>
                <option value="Immunity">Immunity</option>
                <option value="Wellness">Wellness</option>
                <option value="Detox">Detox</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Hair Care">Hair Care</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="All Status">All Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
              <select
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                className="px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="All Authors">All Authors</option>
                <option value="IGO Pharma Team">IGO Pharma Team</option>
                <option value="Dr. Meera Sharma">Dr. Meera Sharma</option>
                <option value="Dr. Arjun Nair">Dr. Arjun Nair</option>
              </select>
              <button 
                onClick={resetFilters}
                className="px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-100 transition-colors ml-auto md:ml-0"
              >
                <RefreshCcw className="h-4 w-4" /> Reset
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500">Cover Image</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500">Blog Title</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500 text-center">Category</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500">Author</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500">Publish Date</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500 text-center">Status</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500 text-center">Featured</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500 text-center">Views</th>
                  <th className="py-3 px-4 text-xs font-bold text-stone-500 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredBlogs.map(blog => (
                  <tr 
                    key={blog.id} 
                    className={`hover:bg-stone-50 transition-colors cursor-pointer ${selectedBlog?.id === blog.id ? 'bg-emerald-50/50' : ''}`}
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <td className="py-3 px-4 w-24">
                      <div className="h-12 w-20 rounded-lg overflow-hidden bg-stone-100 flex items-center justify-center">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm font-bold text-stone-800 line-clamp-2 max-w-[200px]">{blog.title}</p>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-bold">
                        {blog.category}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-xs text-stone-600 font-medium">{blog.author}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-xs text-stone-600 font-medium whitespace-nowrap">
                        <p>{blog.date.split(" ").slice(0, 3).join(" ")}</p>
                        <p className="text-stone-400">{blog.date.split(" ").slice(3).join(" ")}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex px-2 py-1 rounded text-xs font-bold ${
                        blog.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Star className={`h-4 w-4 mx-auto ${blog.featured ? 'text-emerald-600 fill-emerald-600' : 'text-stone-300'}`} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <p className="text-xs font-bold text-stone-600">{blog.views.toLocaleString()}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-stone-400 hover:text-emerald-600"><Eye className="h-4 w-4" /></button>
                        <button className="text-stone-400 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
                        <button className="text-stone-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredBlogs.length === 0 && (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-stone-500">No blogs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-stone-600">
            <div>
              Showing 1 to {filteredBlogs.length} of 128 entries
            </div>
            <div className="flex gap-1">
              <button className="px-2 py-1 rounded border border-stone-200 hover:bg-stone-50"><ChevronLeft className="h-4 w-4" /></button>
              <button className="px-3 py-1 rounded bg-emerald-800 text-white font-bold">1</button>
              <button className="px-3 py-1 rounded border border-stone-200 hover:bg-stone-50">2</button>
              <button className="px-3 py-1 rounded border border-stone-200 hover:bg-stone-50">3</button>
              <span className="px-2 py-1">...</span>
              <button className="px-3 py-1 rounded border border-stone-200 hover:bg-stone-50">22</button>
              <button className="px-2 py-1 rounded border border-stone-200 hover:bg-stone-50"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>

        </div>
      </div>

      {/* Right Preview Pane */}
      {selectedBlog && (
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col sticky top-6 self-start max-h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="p-4 border-b border-stone-200 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
            <h3 className="font-bold text-stone-800">Preview</h3>
            <button 
              onClick={() => setSelectedBlog(null)} 
              className="text-stone-400 hover:text-stone-600 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-6">
            {/* Image Preview */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-stone-100">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
            </div>

            {/* Title & Info */}
            <div className="space-y-3">
              <h2 className="text-xl font-black text-stone-800 leading-tight">{selectedBlog.title}</h2>
              <span className="inline-flex px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-bold">
                {selectedBlog.category}
              </span>
              <p className="text-sm text-stone-600 leading-relaxed">{selectedBlog.snippet}</p>
              
              <div className="flex items-center gap-4 text-xs font-medium text-stone-500 pt-2">
                <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {selectedBlog.readTime}</div>
                <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {selectedBlog.date.split(" ").slice(0, 3).join(" ")}</div>
              </div>
            </div>

            {/* Author */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-stone-800">Author</h4>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-stone-100 bg-stone-50">
                <div className="h-10 w-10 rounded-full bg-white border border-stone-200 flex items-center justify-center font-bold text-emerald-700">
                  {selectedBlog.author.includes('IGO') ? 'IGO' : selectedBlog.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-800">{selectedBlog.author}</p>
                  <p className="text-xs text-stone-500">Wellness Experts</p>
                </div>
              </div>
            </div>

            {/* SEO Score */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-800">SEO Score</h4>
                <span className="text-xs font-bold text-emerald-600">{selectedBlog.seoScore} / 100</span>
              </div>
              <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-700 rounded-full"
                  style={{ width: `${selectedBlog.seoScore}%` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <button className="w-full py-3 bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors">
                <CheckCircle className="h-4 w-4" /> Publish Now
              </button>
              <button className="w-full py-3 bg-white text-stone-700 border border-stone-200 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors">
                <FileEdit className="h-4 w-4" /> Save as Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
