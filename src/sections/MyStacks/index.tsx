import { CardStacks } from "../../components/CardStacks";
import { techStack } from "../../mocks/stacks";

export function MyStacks() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#222222] p-8">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        Tecnologias
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Meus conhecimentos
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 my-12 w-full max-w-5xl">
        {techStack.map((tech, index) => (
          <CardStacks
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}
