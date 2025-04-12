import Image from "next/image";
import RecipeInfo from "./RecipeInfo";

export default function RecipeContents() {
  return (
    <div className="flex flex-col items-start justify-start sm:flex-1">
      <div className="hidden">
        <h1 className="text-2xl font-semibold">Welcome to Yelicious!</h1>
        <p className="text-md mt-4">
          Your one-stop solution for delicious recipes.
        </p>
      </div>
      <div className="relative top-0 aspect-video h-[400px] w-full overflow-hidden">
        <p className="font-great-vibes absolute top-10 z-30 w-68 px-5 text-2xl leading-6 font-normal text-[#BBD8A3]">
          Spicy Chicken and Pepper Jack Pizza
        </p>
        <Image
          src="/ribbon.png"
          alt="Ribbon"
          width={300}
          height={300}
          className="absolute top-5 left-0 z-20 opacity-100"
        />
        <Image
          src="/sample_image.jpg"
          alt="Recipe"
          width={200}
          height={200}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_#6366f1,_#a5b4fc,_#e0e7ff)] opacity-75"></div>
      </div>
      <RecipeInfo />
    </div>
  );
}
