type InputProps = {
  className?: string;
  placeholder?: string;
};

export default function Input({ className, placeholder }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={`font-montserrat w-60 bg-[#e4e6ea] p-2 px-4 text-[#222222] focus:ring-2 focus:ring-amber-200 focus:outline-none lg:w-96 ${className}`}
    />
  );
}
