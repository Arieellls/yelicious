"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Loader, ChefHat, Clock, Heart, BookOpen, Search } from "lucide-react";
import RecipeResults from "../pages/RecipeResults";
import { useRecipeStore } from "../store/recipeStore";
import RecipeContents from "./RecipeContents";
import SearchQueriesList from "./SearchQueriesList";

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
  }, [id, selectedRecipe?.id, setLoadingSelectedRecipe, setSelectedRecipe]);

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
            <h1 className="font-delius mb-12 pb-6 text-5xl font-light">
              Yelicious
            </h1>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
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
            <div className="w-full">
              <SearchQueriesList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-opacity-80 flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm backdrop-blur-sm transition-all duration-300 ease-in-out hover:translate-y-1">
      <div className="mb-4 flex items-center">
        <div className="mr-3 text-gray-600">{icon}</div>
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      </div>
      <p className="leading-relaxed font-light text-gray-600">{description}</p>
    </div>
  );
}
