import Image from "next/image";
import Input from "./Input";
import { Bookmark, Menu, NotebookPen } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex w-full items-center justify-between gap-3 self-start bg-[#f8f9fa] px-4 text-[#735557] shadow-md">
      <div className="flex items-center justify-center py-3">
        <Image
          alt="Logo"
          src="/cooking.png"
          width={48}
          height={48}
          className="mx-4 h-8 w-8 lg:h-11 lg:w-11"
        />
        <h1 className="font-delius hidden text-xl sm:block lg:text-2xl">
          Yelicious
        </h1>
      </div>
      <Actions />
    </div>
  );
}

function Actions() {
  return (
    <div className="text-md xl:md flex h-[100%] items-center md:text-sm lg:text-sm">
      <div className="hidden md:flex">
        <button className="flex cursor-pointer gap-2 px-3 py-6 uppercase hover:bg-[#f1f3f5]">
          <NotebookPen />
          Add Recipe
        </button>
        <button className="flex cursor-pointer gap-2 px-3 py-6 uppercase hover:bg-[#f1f3f5]">
          <Bookmark />
          Bookmarks
        </button>
      </div>
      <Input
        className="ml-5 h-8 rounded-md sm:rounded-xl md:h-10"
        placeholder="Search for recipes..."
      />
      <Menu className="ml-4 cursor-pointer md:hidden" />
    </div>
  );
}
