// import { Smile } from "lucide-react";

import RecipeTile from "../components/RecipeTile";

export default function RecipeResults() {
  return (
    <div className="flex w-full flex-col justify-between bg-[#F1EFEC] p-4 pt-8 pb-8 shadow-md md:w-[30%]">
      {/* <p className="mt-32 flex items-center justify-center gap-3 p-5 font-semibold">
        <Smile className="h-12 w-12" color="#834547" />
        Start by searching for a recipe or an ingredient. Have fun!
      </p> */}
      <div className="flex flex-col overflow-scroll sm:h-[73%]">
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
      </div>
      <div>
        <p className="hidden px-8 text-left text-[12px] sm:block">
          © Version modified and improved by Arielito Manorina Check the
          original app to see the difference: forkify@1.0.0
        </p>
      </div>
    </div>
  );
}
