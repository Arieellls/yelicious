"use client";

import { Loader } from "lucide-react";
import RecipeResults from "../pages/RecipeResults";
import { useRecipeStore } from "../store/recipeStore";
import RecipeContents from "./RecipeContents";

export default function Content() {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const loading = useRecipeStore((state) => state.loadingSelectedRecipe);

  return (
    <div className="min-h-screen w-full items-start justify-start bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] shadow-md">
      <div className="flex w-full flex-col md:flex-row">
        <RecipeResults />
        {loading ? (
          <div className="mt-30 flex flex-1 items-start justify-center">
            <Loader className="h-12 w-12 animate-spin" color="#834547" />
          </div>
        ) : selectedRecipe ? (
          <RecipeContents />
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p>Arielito Manorina</p>
          </div>
        )}
      </div>
    </div>
  );
}
