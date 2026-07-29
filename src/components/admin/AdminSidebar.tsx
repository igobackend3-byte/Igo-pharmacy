import React from "react";
import { 
  TrendingUp, ShoppingBag, Calendar, Users, Percent, Settings, 
  Package, Layout, FileText, MessageSquare, Star, 
  Briefcase, Bell, BarChart2, User, HelpCircle
} from "lucide-react";

export type AdminTab = 
  | "dashboard" | "orders" | "customers" | "products" | "categories"
  | "inventory" | "banner" | "clinic" | "coupons" | "blogs" 
  | "faq" | "testimonials" | "franchise" | "messages" 
  | "reports" | "settings" | "notifications" | "profile" | "sales_history";

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "orders", label: "Orders", icon: <Package className="w-4 h-4" /> },
    { id: "customers", label: "Customers & Leads", icon: <Users className="w-4 h-4" /> },
    { id: "products", label: "Products", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "categories", label: "Categories", icon: <Layout className="w-4 h-4" /> },
    { id: "inventory", label: "Inventory", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "banner", label: "Homepage CMS", icon: <Layout className="w-4 h-4" /> },
    { id: "blogs", label: "Blogs", icon: <FileText className="w-4 h-4" /> },
    { id: "faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "testimonials", label: "Testimonials", icon: <Star className="w-4 h-4" /> },
    { id: "franchise", label: "Franchise Leads", icon: <Briefcase className="w-4 h-4" /> },
    { id: "messages", label: "Contact Messages", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "clinic", label: "Clinic", icon: <Calendar className="w-4 h-4" /> },
    { id: "coupons", label: "Coupons", icon: <Percent className="w-4 h-4" /> },
    { id: "reports", label: "Reports", icon: <BarChart2 className="w-4 h-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="w-4 h-4" /> },
    { id: "profile", label: "Admin Profile", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden p-2 max-h-[85vh] overflow-y-auto">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as AdminTab)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm cursor-pointer ${
              activeTab === t.id 
                ? 'bg-emerald-50 text-emerald-800 shadow-sm border border-emerald-100' 
                : 'text-stone-500 hover:bg-stone-50 hover:text-stone-800'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
