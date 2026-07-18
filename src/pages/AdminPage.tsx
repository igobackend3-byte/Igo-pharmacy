import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import { useStore } from "../context/StoreContext";

export default function AdminPage() {
  const { products, appointments, doctors, updateStock, addProduct } = useStore();

  return (
    <AdminDashboard
      products={products}
      appointments={appointments}
      doctors={doctors}
      onUpdateStock={updateStock}
      onAddProduct={addProduct}
    />
  );
}
