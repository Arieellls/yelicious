import RecipeResults from "../pages/RecipeResults";
import RecipeContents from "./RecipeContents";

export default function Content() {
  return (
    <div className="flex w-full items-start justify-start bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] shadow-md">
      <div className="flex w-full flex-col md:flex-row">
        <RecipeResults />
        <RecipeContents />
      </div>
    </div>
  );
}
