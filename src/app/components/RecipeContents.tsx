"use client";

import Image from "next/image";
import RecipeInfo from "./RecipeInfo";
import { useRecipeStore } from "../store/recipeStore";

function formatTitle(title: string) {
  if (title.length > 45) return "text-sm top-8";
  if (title.length > 35) return "text-lg top-10";
  if (title.length > 30) return "text-xl top-10";
  return "text-2xl top-10";
}

export default function RecipeContents() {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);

  return (
    <div className="flex flex-col items-start justify-start sm:flex-1">
      <div className="hidden">
        <h1 className="text-2xl font-semibold">Welcome to Yelicious!</h1>
        <p className="text-md mt-4">
          Your one-stop solution for delicious recipes.
        </p>
      </div>
      <div className="relative top-0 aspect-video h-[500px] w-full overflow-hidden">
        <p
          className={`font-great-vibes absolute z-30 w-68 px-5 leading-6 font-normal text-[#BBD8A3] ${
            selectedRecipe?.title ? formatTitle(selectedRecipe.title) : ""
          }`}
        >
          {selectedRecipe?.title}
        </p>

        <Image
          src="/ribbon.png"
          alt="Ribbon"
          width={300}
          height={300}
          className="absolute top-5 left-0 z-20 opacity-100"
        />
        <Image
          src={selectedRecipe?.image_url || ""}
          alt="Recipe"
          width={200}
          height={200}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_#6366f1,_#a5b4fc,_#e0e7ff)] opacity-75"></div>
      </div>
      <RecipeInfo />
    </div>
  );
}
