import Image from "next/image";

export default function RecipeTile() {
  return (
    <div className="flex items-center justify-start gap-4 px-2 py-3 uppercase transition-transform duration-200 ease-in hover:scale-101 hover:bg-[#e9e3da]">
      <Image
        src="/sample_image.jpg"
        alt="Recipe"
        width={52}
        height={52}
        className="aspect-square rounded-full"
      />
      <div>
        <p className="text-[15px] font-semibold text-[#6366f1]">Carrot Cake</p>
        <p className="text-[12px] text-[#8391d8]">BBC Good Food</p>
      </div>
    </div>
  );
}
