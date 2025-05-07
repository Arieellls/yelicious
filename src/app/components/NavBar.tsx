"use client";

import Image from "next/image";
import Input from "./Input";
import { Bookmark, Menu, NotebookPen, Search } from "lucide-react";
import { useState } from "react";
import { getRecipes } from "../actions/recipes";
import { useRecipeStore } from "../store/recipeStore";

export default function NavBar() {
  return (
    <div className="flex w-full items-center justify-between gap-3 self-start bg-[#f8f9fa] px-4 text-[#735557] shadow-md">
      <div className="flex items-center justify-center py-3">
        <Image
          alt="Logo"
          src="/cooking.png"
          width={48}
          height={48}
          className="mx-4 h-8 w-8 lg:h-11 lg:w-11"
        />
        <h1 className="font-delius hidden text-xl sm:block lg:text-2xl">
          Yelicious
        </h1>
      </div>
      <Actions />
    </div>
  );
}
function Actions() {
  const [searchText, setSearchText] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Fetch and display bookmarks
  function onShowBookmarks() {
    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setShowBookmarks(true);
    setRecipes(stored); 
  }

  function onSearch() {
    setShowBookmarks(false); // go back to search mode
    useRecipeStore.getState().setLoading(true);
    getRecipes(searchText)
      .then((data) => {
        setRecipes(data.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      })
      .finally(() => {
        useRecipeStore.getState().setLoading(false);
      });
  }

  return (
    <div className="text-md xl:md flex h-[100%] items-center md:text-sm lg:text-sm">
      <div className="hidden md:flex">
        <button
          className="flex cursor-pointer gap-2 px-3 py-6 uppercase hover:bg-[#f1f3f5]"
          onClick={onShowBookmarks}
        >
          <Bookmark />
          Bookmarks
        </button>
      </div>
      <div className="relative">
        <Input
          className="ml-5 h-8 rounded-md text-sm sm:rounded-xl sm:text-[16px] md:h-10"
          placeholder="Search for recipes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={onSearch}
          className="absolute right-0 h-full w-[30%] cursor-pointer items-center justify-center rounded-md bg-[#6366f1] text-[12px] text-gray-200 hover:bg-[#797abe] sm:text-[16px]"
        >
          <div className="flex items-center justify-center gap-2">
            <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Search
          </div>
        </button>
      </div>
      <Menu className="ml-4 cursor-pointer md:hidden" />
    </div>
  );
}