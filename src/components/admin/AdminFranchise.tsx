import React, { useState } from "react";
import { Search, MapPin, Phone, Mail, Building, Clock, ArrowLeft, MessageSquare, CheckCircle, FileText } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminFranchise() {
  const { adminLeads } = useStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const filteredLeads = adminLeads?.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.company.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (selectedLeadId) {
    const lead = filteredLeads.find(l => l.id === selectedLeadId);
    if (!lead) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedLeadId(null)}
            className="p-2 bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-stone-800">Lead Details: {lead.name}</h2>
            <p className="text-sm text-stone-500">Date Received: {lead.date}</p>
          </div>
          <span className={`ml-4 inline-flex px-3 py-1 rounded-full text-sm font-bold ${
            lead.status === 'New' ? 'bg-amber-100 text-amber-700' :
            lead.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
            'bg-emerald-100 text-emerald-700'
          }`}>
            {lead.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-emerald-600" /> Enquiry Details
              </h3>
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-stone-700 italic">
                "{lead.enquiry || 'No specific enquiry text provided.'}"
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" /> Admin Notes & Follow-up
              </h3>
              <textarea 
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={4}
                placeholder="Add internal notes or follow-up details here..."
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button className="bg-stone-800 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-stone-900 transition-colors">
                  Save Notes
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-stone-600">
                  <Building className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="font-bold text-stone-800">{lead.company}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{lead.email}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{lead.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{lead.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-800 mb-4">Lead Source</h3>
              <div className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-xl border border-emerald-100 font-bold flex items-center justify-between">
                <span>{lead.source || 'Website Contact Form'}</span>
                <Clock className="h-4 w-4" />
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-sm">
                <CheckCircle className="h-4 w-4" /> Mark as Contacted
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">B2B & Franchise Leads</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search leads by name or company..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Contact Name</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Company & Location</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Contact Info</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <button 
                      onClick={() => setSelectedLeadId(lead.id)}
                      className="text-sm font-bold text-emerald-800 hover:underline cursor-pointer text-left"
                    >
                      {lead.name}
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-stone-800">{lead.company}</p>
                    <p className="text-xs text-stone-500">{lead.location}</p>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1 text-xs text-stone-600">
                      <div className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> {lead.email}</div>
                      <div className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> {lead.phone}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                      lead.status === 'New' ? 'bg-amber-100 text-amber-700' :
                      lead.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-sm text-stone-500">
                    {lead.date}
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-stone-500">No leads found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
