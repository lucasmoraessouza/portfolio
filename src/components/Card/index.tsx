import SunIcon from "../../assets/icons/sun-icon copy";
interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="w-full p-5 flex flex-col gap-5 border-[1px] border-[#E1E1E1] rounded-[10px] bg-gradient-to-r from-[#2B2B2B] to-[#1C1C1C] ">
      <div className="size-11 bg-[#F5F8FF] flex items-center justify-center rounded-[9px]">
        <SunIcon />
      </div>
      <span className="font-inter font-semibold text-md">{title}</span>
      <span className="font-inter text-sm font-medium text-[#E1E1E1] text-start leading-7 ">
        {description}
      </span>
    </div>
  );
}
