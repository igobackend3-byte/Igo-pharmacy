import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sliders, ArrowLeft } from "lucide-react";
import AdminSidebar, { AdminTab } from "./admin/AdminSidebar";
import AdminOverview from "./admin/AdminOverview";
import AdminOrders from "./admin/AdminOrders";
import AdminCustomers from "./admin/AdminCustomers";
import AdminProducts from "./admin/AdminProducts";
import AdminInventory from "./admin/AdminInventory";
import AdminBanner from "./admin/AdminBanner";
import AdminClinic from "./admin/AdminClinic";
import AdminCoupons from "./admin/AdminCoupons";
import AdminGenericTab from "./admin/AdminGenericTab";
import AdminSalesHistory from "./admin/AdminSalesHistory";
import AdminFranchise from "./admin/AdminFranchise";
import AdminBlogs from "./admin/AdminBlogs";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <AdminOverview setActiveTab={setActiveTab} />;
      case "sales_history": return <AdminSalesHistory />;
      case "orders": return <AdminOrders />;
      case "customers": return <AdminCustomers />;
      case "products": return <AdminProducts />;
      case "inventory": return <AdminInventory />;
      case "banner": return <AdminBanner />;
      case "clinic": return <AdminClinic />;
      case "coupons": return <AdminCoupons />;
      
      // Placeholders for new modules
      case "categories": return <AdminGenericTab title="Category Management" description="Manage product categories, sub-categories, and category banners." />;
      case "blogs": return <AdminBlogs />;
      case "faq": return <AdminGenericTab title="FAQ Manager" />;
      case "testimonials": return <AdminGenericTab title="Testimonials & Reviews" />;
      case "franchise": return <AdminFranchise />;
      case "messages": return <AdminGenericTab title="Contact Messages" />;
      case "reports": return <AdminGenericTab title="Advanced Reports" description="Generate detailed sales, inventory, and GST reports." />;
      case "settings": return <AdminGenericTab title="Store Settings" />;
      case "notifications": return <AdminGenericTab title="System Notifications" />;
      case "profile": return <AdminGenericTab title="Admin Profile" />;
      
      default: return <AdminOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Navigation for Admin */}
      <div className="bg-stone-900 text-white px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <Sliders className="h-5 w-5 text-emerald-400" />
          <span className="font-black text-lg tracking-wide text-white font-mono">IGO ADMIN <span className="text-emerald-400">PRO</span></span>
        </div>
        <Link to="/" className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-sm font-bold bg-stone-800 px-4 py-2 rounded-lg hover:bg-stone-700">
          <ArrowLeft className="h-4 w-4" />
          Back to Storefront
        </Link>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-8 md:px-8 space-y-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content Area */}
        <div className="flex-1 w-full min-w-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
