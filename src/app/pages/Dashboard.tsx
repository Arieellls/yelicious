import NavBar from "../components/NavBar";

export default function Dashboard() {
  return (
    <div className="absolute flex min-h-[90%] w-[70%] flex-col items-center rounded-xl bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] p-16 py-10 text-[#222222]">
      <NavBar />
    </div>
  );
}
