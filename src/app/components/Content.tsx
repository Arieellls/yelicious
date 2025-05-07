"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Loader, ChefHat, Clock, Heart, BookOpen } from "lucide-react";
import RecipeResults from "../pages/RecipeResults";
import { useRecipeStore } from "../store/recipeStore";
import RecipeContents from "./RecipeContents";

export default function Content() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    selectedRecipe,
    setSelectedRecipe,
    setLoadingSelectedRecipe,
    loadingSelectedRecipe: loading,
  } = useRecipeStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id || selectedRecipe?.id === id) return;

      setLoadingSelectedRecipe(true);
      try {
        const res = await fetch(`/api/recipes/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await res.json();
        setSelectedRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoadingSelectedRecipe(false);
      }
    };

    fetchRecipe();
  }, [id]);

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
          <div className="flex flex-col items-center p-12 px-5 md:p-24">
            <h1 className="text-5xl pb-6 font-light font-delius mb-12">
              Yelicious
            </h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
              <Card 
                icon={<ChefHat size={24} />}
                title="Artisanal Creations"
                description="Discover carefully crafted recipes that blend tradition with modern culinary innovation."
              />
              <Card 
                icon={<Clock size={24} />}
                title="Effortless Elegance"
                description="From pan to plate in minutes – sophisticated flavors that belie their simple preparation."
              />
              <Card 
                icon={<Heart size={24} />}
                title="Mindful Nourishment"
                description="Thoughtfully balanced meals that celebrate both wellness and exquisite taste."
              />
              <Card 
                icon={<BookOpen size={24} />}
                title="Curated Collection"
                description="Build your personal recipe archive with dishes that inspire your culinary journey."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string; description: string }) {
  return (
    <div className="flex flex-col p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg transition-all duration-300 ease-in-out hover:translate-y-1 border border-gray-100 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="text-gray-600 mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
}