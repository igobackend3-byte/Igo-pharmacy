import React, { useState } from "react";
import { Search, Calendar, Video, Filter, CheckCircle, XCircle, Clock } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export default function AdminClinic() {
  const { adminAppointments } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApts = adminAppointments.filter(a => 
    a.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.doctorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-stone-800">Clinic Appointments</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by patient or doctor..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-3 py-2 border border-stone-200 rounded-lg text-sm font-bold text-stone-600 flex items-center gap-2 hover:bg-stone-50">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Patient</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Doctor</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Schedule</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Type</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase">Status</th>
                <th className="py-3 px-4 text-xs font-bold text-stone-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredApts.map(apt => (
                <tr key={apt.id} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-stone-800">{apt.patientName}</p>
                    <p className="text-xs text-stone-500">{apt.patientPhone}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-stone-800">{apt.doctorName}</p>
                    <p className="text-xs text-stone-500">{apt.system}</p>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-col gap-1 text-sm text-stone-600">
                      <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {apt.date}</div>
                      <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {apt.timeSlot}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-stone-600 bg-stone-100 px-2 py-1 rounded-md uppercase">
                      {apt.type === 'video' ? <Video className="h-3 w-3" /> : null} {apt.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-bold ${
                      apt.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      apt.status === 'Scheduled' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Mark Completed">
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Cancel">
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredApts.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-500">No appointments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
