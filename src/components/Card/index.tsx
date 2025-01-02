import classNames from "classnames";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon: Icon, title, description, className }: CardProps) {
  return (
    <div
      className={classNames(
        "w-full p-5 flex flex-col gap-5 border-[1px] border-[#E1E1E1] rounded-[10px] bg-gradient-to-r from-[#2B2B2B] to-[#1C1C1C] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-[#E1E1E1]",
        className
      )}
    >
      <div className="size-11 bg-[#F5F8FF] flex items-center justify-center rounded-[9px]">
        <Icon />
      </div>
      <span className="font-inter font-semibold text-md">{title}</span>
      <span className="font-inter text-sm font-medium text-[#E1E1E1] text-start leading-7 ">
        {description}
      </span>
    </div>
  );
}
