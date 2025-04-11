import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex w-full items-center justify-between gap-3 self-start rounded-lg bg-[#f8f9fa] p-4 shadow-md">
      <div className="flex items-center justify-center gap-3">
        <Image alt="Logo" src="/cooking.png" width={64} height={64} />
        <h1 className="font-delius text-3xl">Yelicious</h1>
      </div>
      <input
        placeholder="Search..."
        className="w-96 rounded-lg border-2 border-[#cac7c7] p-2 text-[#222222] focus:ring-2 focus:ring-amber-200 focus:outline-none"
      />
    </div>
  );
}
