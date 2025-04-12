import { ArrowRight } from "lucide-react";

export default function Directions() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-100 p-4 px-25 py-10 text-center">
      <h1 className="mb-5 text-center text-xl font-semibold uppercase">
        How to cook it
      </h1>
      <p>
        This recipe was carefully designed and tested by{" "}
        <span className="font-semibold">My Baking Addiction</span>. Please check
        out directions at their website.
      </p>

      <button className="mt-10 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#6366f1] px-5 py-2 text-lg text-gray-200 uppercase hover:bg-[#797abe]">
        Directions
        <ArrowRight width={18} height={18} />
      </button>
    </div>
  );
}
