import classNames from "classnames";

interface ButtonProps {
  text: string;
  square?: boolean;
}

export function Button({ text = "", square = false }: ButtonProps) {
  return (
    <button
      className={classNames(
        "px-10 py-3 border-[1px] border-[#4fc3f7] font-serrat font-medium text-sm text-white tracking-wider transition-colors duration-500 hover:bg-[#4fc3f7] hover:text-black",
        {
          "rounded-[10px]": square,
          "rounded-[75px]": !square,
        }
      )}
    >
      {text}
    </button>
  );
}