import React from "react";
import { useNavigate } from "react-router-dom";
import AIConsultation from "../components/AIConsultation";
import { useStore } from "../context/StoreContext";

export default function ConsultPage() {
  const navigate = useNavigate();
  const { doctors, products, bookAppointment } = useStore();

  return (
    <AIConsultation
      doctors={doctors}
      products={products}
      onBookAppointment={bookAppointment}
      onSelectProductById={(prodId) => navigate(`/product/${prodId}`)}
    />
  );
}
