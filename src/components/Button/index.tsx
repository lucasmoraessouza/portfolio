interface ButtonProps {
  text: string;
}

export function Button({ text = "" }: ButtonProps) {
  return (
    <button className="px-10 py-3 border-[1px] border-[#4fc3f7] rounded-[75px] font-serrat font-medium text-sm text-white tracking-wider">
      {text}
    </button>
  );
}
