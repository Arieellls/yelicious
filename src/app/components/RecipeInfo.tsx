"use client";

import { Bookmark, CircleMinus, CirclePlus, Clock, Users } from "lucide-react";
import RecipeIngredients from "./RecipeIngredients";
import Directions from "./Directions";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeInfo() {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center justify-around">
      <div className="flex w-full items-center justify-around gap-10 px-10 pb-10 sm:px-0">
        <div className="flex gap-5 sm:gap-10">
          <ImageLabel label={`${selectedRecipe?.cooking_time} Minutes`}>
            <Clock width={22} height={22} />
          </ImageLabel>
          <ImageLabel label={`${selectedRecipe?.servings} Servings`}>
            <Users width={22} height={22} />
          </ImageLabel>
          <div className="flex items-center justify-center gap-2">
            <CirclePlus className="cursor-pointer transition-transform duration-200 ease-in hover:scale-108" />
            <CircleMinus className="cursor-pointer transition-transform duration-200 ease-in hover:scale-108" />
          </div>
        </div>
        <div className="flex cursor-pointer justify-between rounded-full border-2 border-[#735557] p-1 transition-transform duration-200 ease-in hover:scale-108 sm:p-2">
          <Bookmark className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
      </div>

      {/* <div className="my-6 flex flex-col items-center justify-center gap-7 py-10 uppercase">
        <h1 className="text-xl font-semibold">Nutritional data / serving</h1>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {nutritionData({ label: "Calories", value: "200" })}
          {nutritionData({ label: "Fat", value: "10g" })}
          {nutritionData({ label: "Carbs", value: "30g" })}
          {nutritionData({ label: "Protein", value: "5g" })}
        </div>
      </div> */}

      <RecipeIngredients recipe={selectedRecipe} />
      <Directions />
    </div>
  );
}

function ImageLabel({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase sm:text-lg">
      {children} <p>{label}</p>
    </div>
  );
}

// function nutritionData({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex h-32 w-32 flex-col items-center justify-center rounded-md border-2 border-[#735557] p-5 text-lg font-semibold uppercase">
//       <p>{label}</p>
//       <p className="font-normal">{value}</p>
//     </div>
//   );
// }
