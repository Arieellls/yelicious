"use client";

import { Loader, Smile } from "lucide-react";

import RecipeTile from "../components/RecipeTile";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeResults() {
  const recipes = useRecipeStore((state) => state.recipes);
  const loading = useRecipeStore((state) => state.loading);
  const currentPage = useRecipeStore((state) => state.currentPage);
  const recipesPerPage = useRecipeStore((state) => state.recipesPerPage);
  const setCurrentPage = useRecipeStore((state) => state.setCurrentPage);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage,
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex max-h-full w-full flex-col justify-between bg-[#F1EFEC] pt-8 pb-8 shadow-md sm:min-h-screen md:w-[30%]">
      {loading ? (
        <div className="mt-32 flex w-full items-center justify-center">
          <Loader className="h-12 w-12 animate-spin" color="#834547" />
        </div>
      ) : recipes.length === 0 ? (
        <p className="mt-0 flex items-center justify-center gap-3 p-5 font-semibold sm:mt-32">
          <Smile className="h-12 w-12" color="#834547" />
          Start by searching for a recipe or an ingredient. Have fun!
        </p>
      ) : (
        <>
          <div className="flex flex-col">
            {paginatedRecipes.map((recipe) => (
              <RecipeTile key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
      <div>
        {/* Prev/Next Buttons with Page Info */}
        {recipes.length > 0 && (
          <div className="my-10 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`cursor-pointer rounded bg-[#834547] px-4 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out disabled:opacity-50 ${currentPage === 1 ? "pointer-events-none" : ""}`}
            >
              Prev
            </button>

            <span className="text-sm font-medium text-[#834547]">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`cursor-pointer rounded bg-[#834547] px-4 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out disabled:opacity-50 ${currentPage === totalPages ? "pointer-events-none" : ""}`}
            >
              Next
            </button>
          </div>
        )}
        <p className="hidden px-8 text-left text-[12px] sm:block">
          © 2025 Arielito Manorina. All rights reserved.
        </p>
      </div>
    </div>
  );
}
