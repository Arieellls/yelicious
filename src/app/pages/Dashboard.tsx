import Content from "../components/Content";
import NavBar from "../components/NavBar";

export default function Dashboard() {
  return (
    <div className="font-montserrat flex h-full w-full flex-col items-center overflow-hidden rounded-xl bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] text-[#735557] lg:w-[90%] xl:w-[80%]">
      <NavBar />
      <Content />
    </div>
  );
}
