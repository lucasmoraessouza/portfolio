import Avatar from "../../assets/images/myselfy-image.png";
import { Button } from "../Button";

export function Main() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-grid-mobile sm:bg-grid-desk bg-no-repeat bg-center">
      <img src={Avatar} className="pt-10 pb-5 max-w-[250px]" />
      <span className="font-poppins antialiased font-extrabold text-[42px] tracking-tighter text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4FC3F7] hover:to-[#FFFFFF] duration-300">
        Lucas de Moraes Souza
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-lg">
        {"< Fullstack Developer />"}
      </span>
      <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-2 max-w-3xl ">
        As a passionate data scientist, with expertise in machine learning, AI,
        and data analytics, I thrive on the challenges of exploring complex data
        landscapes and uncovering meaningful patterns that drive innovation
      </span>
      <div className="mt-8">
        <a href="#get-in-touch">
          <Button text="Contact me" />
        </a>
      </div>
    </div>
  );
}
