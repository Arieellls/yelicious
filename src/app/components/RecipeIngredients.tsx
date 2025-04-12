import { Plus } from "lucide-react";

export default function RecipeIngredients() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-200 p-4 py-10">
      <h1 className="mb-5 text-center text-xl font-semibold uppercase">
        Recipe ingredients
      </h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-8 py-2">
        <Ingredient label="1 tbsp. canola or olive oil" />
        <Ingredient label="3 cups diced fresh red yellow and green bell peppers" />
        <Ingredient label="1/2 cup salsa" />
        <Ingredient label="Chopped cilantro or dried oregano" />
        <Ingredient label="1/2 cup chopped sweet onion" />
        <Ingredient label="1 tube refrigerated pizza dough" />
        <Ingredient label="2cups sargento chefstyle shredded pepper jack cheese" />
      </div>
    </div>
  );
}

function Ingredient({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <Plus width={22} height={22} />
      </div>
      <p className="leading-tight">{label}</p>
    </div>
  );
}
