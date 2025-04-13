import Image from "next/image";
import { Recipe, useRecipeStore } from "../store/recipeStore";
import { useRouter } from "next/navigation";
import { getRecipe } from "../actions/recipes";

export default function RecipeTile({ recipe }: { recipe: Recipe }) {
  const router = useRouter();
  const setSelectedRecipe = useRecipeStore((state) => state.setSelectedRecipe);

  const handleClick = async () => {
    useRecipeStore.getState().setLoadingSelectedRecipe(true);
    const selectedRecipe = await getRecipe(recipe?.id);
    setSelectedRecipe(selectedRecipe.data.recipe);
    router.push(`/?id=${recipe.id}`, { scroll: false });
    useRecipeStore.getState().setLoadingSelectedRecipe(false);
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center justify-start gap-4 px-5 py-3 uppercase transition-transform duration-200 ease-in hover:scale-101 hover:bg-[#e9e3da]"
    >
      <Image
        src={recipe.image_url}
        alt="Recipe"
        width={52}
        height={52}
        className="aspect-square rounded-full"
      />
      <div>
        <p className="text-[15px] font-semibold text-[#6366f1]">
          {recipe.title}
        </p>
        <p className="text-[12px] text-[#8391d8]">{recipe.publisher}</p>
      </div>
    </div>
  );
}
