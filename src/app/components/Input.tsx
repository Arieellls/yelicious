type InputProps = {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  className,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={`font-montserrat w-60 bg-[#e4e6ea] p-2 px-4 text-[#222222] focus:ring-2 focus:ring-[#a5b4fc] focus:outline-none lg:w-96 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}
