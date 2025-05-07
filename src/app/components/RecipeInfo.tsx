"use client";

import {
  Bookmark,
  BookmarkCheck,
  CircleMinus,
  CirclePlus,
  Clock,
  Users,
} from "lucide-react";
import RecipeIngredients from "./RecipeIngredients";
import Directions from "./Directions";
import { useRecipeStore } from "../store/recipeStore";
import { useState, useEffect } from "react";
import { useServingStore } from "../hooks/servingsStore";

export default function RecipeInfo() {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);
  const [additionalServings, setAdditionalServings] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);

  const totalServings = (selectedRecipe?.servings ?? 0) + additionalServings;

  // Load bookmarked state from localStorage on mount
  useEffect(() => {
    if (selectedRecipe) {
      const storedBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") || "[]",
      );
      const isBookmarked = storedBookmarks.some(
        (r: { id: string }) => r.id === selectedRecipe.id,
      );
      setBookmarked(isBookmarked);
    }
  }, [selectedRecipe]);

  const toggleBookmark = () => {
    if (!selectedRecipe) return;

    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const isAlready = stored.some(
      (r: { id: string }) => r.id === selectedRecipe.id,
    );

    let updatedBookmarks;
    if (isAlready) {
      updatedBookmarks = stored.filter(
        (r: { id: string }) => r.id !== selectedRecipe.id,
      );
      setBookmarked(false);
    } else {
      updatedBookmarks = [...stored, selectedRecipe];
      setBookmarked(true);
    }

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  const addServings = () => setAdditionalServings((prev) => prev + 1);
  const minusServings = () => {
    const currentTotal = (selectedRecipe?.servings ?? 0) + additionalServings;
    if (currentTotal > 1) {
      setAdditionalServings((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-10 flex h-full w-full flex-col items-center justify-around">
      <div className="flex flex-col gap-3 w-full items-center justify-center px-10 pb-10 sm:px-0 sm:flex-row sm:gap-10">
        <div className="flex gap-5 sm:gap-10">
          <ImageLabel label={`${selectedRecipe?.cooking_time} Minutes`}>
            <Clock width={22} height={22} />
          </ImageLabel>
          <ImageLabel label={`${totalServings} Servings`}>
            <Users width={22} height={22} />
          </ImageLabel>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <div className="flex items-center justify-center gap-2">
            <CirclePlus
              className="cursor-pointer transition-transform duration-200 ease-in hover:scale-108"
              onClick={addServings}
            />
            <CircleMinus
              className={`cursor-pointer transition-transform duration-200 ease-in hover:scale-108 ${
                totalServings <= 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={minusServings}
            />
          </div>
          <div
            className="flex cursor-pointer justify-between rounded-full border-2 border-[#735557] p-1 transition-transform duration-200 ease-in hover:scale-108 sm:p-2"
            onClick={toggleBookmark}
          >
            {bookmarked ? (
              <Bookmark
                className="h-5 w-5 fill-[#735557] sm:h-7 sm:w-7"
                fill=""
              />
            ) : (
              <Bookmark className="h-5 w-5 sm:h-7 sm:w-7" />
            )}
          </div>
        </div>
      </div>

      <RecipeIngredients
        recipe={selectedRecipe}
        originalServings={selectedRecipe?.servings ?? 1}
        totalServings={totalServings}
      />
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
