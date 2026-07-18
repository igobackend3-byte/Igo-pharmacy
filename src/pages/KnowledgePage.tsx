import React from "react";
import { useNavigate } from "react-router-dom";
import KnowledgeCenter from "../components/KnowledgeCenter";
import { useStore } from "../context/StoreContext";

export default function KnowledgePage() {
  const navigate = useNavigate();
  const { blogs, ingredients } = useStore();

  return (
    <KnowledgeCenter
      blogs={blogs}
      ingredients={ingredients}
      onSelectIngredientSearch={(ingName) => navigate(`/shop?search=${encodeURIComponent(ingName)}`)}
    />
  );
}
