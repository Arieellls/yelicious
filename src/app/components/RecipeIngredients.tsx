import { Plus } from "lucide-react";
import { Recipe } from "../store/recipeStore";
import { Fraction } from "fractional";

/**
 * Converts a decimal number or string to its fractional representation.
 * @param quantity The decimal number or string to convert.
 * @returns The fractional representation as a string or an empty string if invalid.
 */
function convertDecimalToFraction(quantity: number | string | null): string {
  if (quantity === null || quantity === undefined || isNaN(Number(quantity))) {
    return "";
  }

  const numberValue =
    typeof quantity === "string" ? parseFloat(quantity) : quantity;

  const fraction = new Fraction(numberValue);
  return fraction.toString();
}

export default function RecipeIngredients({ recipe }: { recipe?: Recipe }) {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-200 p-4 py-15">
      <h1 className="mb-5 text-center text-xl font-semibold uppercase">
        Recipe ingredients
      </h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-8 py-2">
        {recipe?.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            description={ingredient.description}
            quantity={convertDecimalToFraction(ingredient.quantity)}
            unit={ingredient.unit}
          />
        ))}
      </div>
    </div>
  );
}

function Ingredient({
  description,
  quantity,
  unit,
}: {
  description?: string;
  quantity?: string;
  unit?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <Plus width={22} height={22} />
      </div>
      <p className="leading-tight">
        {quantity} {unit} {description}
      </p>
    </div>
  );
}
