import { useState } from "react";
import HeaderIcon from "../../assets/icons/header-icon";
import { Button } from "../../components/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex flex-row justify-between items-center p-8 py-10">
      <span className="font-oleo antialiased text-2xl font-medium">
        {"< Lucas />"}
      </span>
      <div className="block md:hidden">
        <HeaderIcon
          height={15}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden md:flex gap-20 font-serrat font-medium text-lg text-[#C1C1C1]">
        <a href="#main" className="hover:text-lightPrimary">
          Início
        </a>
        <a href="#about-me" className="hover:text-lightPrimary">
          Sobre
        </a>
        <a href="#what-i-do" className="hover:text-lightPrimary">
          Serviços
        </a>
      </div>
      <div className="hidden md:flex">
        <Button text="Contato" square />
      </div>
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-menu border-[#484E53] border shadow-lg rounded-lg md:hidden">
          <ul className="flex flex-col">
            <li onClick={toggleMenu}>
              <a href="#main" className="block px-4 py-2 hover:bg-[#2A2A2A]">
                Início
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                href="#about-me"
                className="block px-4 py-2 hover:bg-[#2A2A2A]"
              >
                Sobre
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                href="#what-i-do"
                className="block px-4 py-2 hover:bg-[#2A2A2A]"
              >
                Serviços
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a
                href="#get-in-touch"
                className="block px-4 py-2 hover:bg-[#2A2A2A]"
              >
                Entre em contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
