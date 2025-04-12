import { Bookmark, CircleMinus, CirclePlus, Clock, Users } from "lucide-react";
import RecipeIngredients from "./RecipeIngredients";
import Directions from "./Directions";

export default function RecipeInfo() {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-around">
      <div className="flex w-full items-center justify-around gap-10">
        <div className="flex gap-10">
          <ImageLabel label="45 Minutes">
            <Clock width={22} height={22} />
          </ImageLabel>
          <ImageLabel label="4 Servings">
            <Users width={22} height={22} />
          </ImageLabel>
          <div className="flex items-center justify-center gap-2">
            <CirclePlus className="cursor-pointer transition-transform duration-200 ease-in hover:scale-108" />
            <CircleMinus className="cursor-pointer transition-transform duration-200 ease-in hover:scale-108" />
          </div>
        </div>
        <div className="flex cursor-pointer justify-between rounded-full border-2 border-[#735557] p-2 transition-transform duration-200 ease-in hover:scale-108">
          <Bookmark className="" />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-7 py-10 uppercase">
        <h1 className="text-xl font-semibold">Nutritional data / serving</h1>
        <div className="flex gap-10">
          {nutrioanlData({ label: "Calories", value: "200" })}
          {nutrioanlData({ label: "Fat", value: "10g" })}
          {nutrioanlData({ label: "Carbs", value: "30g" })}
          {nutrioanlData({ label: "Protein", value: "5g" })}
        </div>
      </div>

      <RecipeIngredients />
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
    <div className="flex items-center justify-center gap-2 text-lg font-semibold uppercase">
      {children} <p>{label}</p>
    </div>
  );
}

function nutrioanlData({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex h-32 w-32 flex-col items-center justify-center rounded-md border-2 border-[#735557] p-5 text-lg font-semibold uppercase">
      <p>{label}</p>
      <p className="font-normal">{value}</p>
    </div>
  );
}
