import EmailIcon from "../../assets/icons/email-icon";
import InstagramIcon from "../../assets/icons/instagram-icon";
import LinkedinIcon from "../../assets/icons/linkedin-icon";

export function Footer() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full p-8">
        <span className="font-inter font-medium text-[#DEDEDE] md:text-[43px] text-lg ">
          Let's work together
        </span>
        <button className="border-[#484E53] text-[#C9C9C9] border-[2px] rounded-[10px] h-[55px] px-4 bg-transparent flex items-center gap-2 text-xs">
          <EmailIcon className="hidden md:block" />
          lucas.msouza@hotmail.com
        </button>
      </div>
      <div className="h-[1px] w-full bg-[#484E53]" />
      <div className="w-full flex flex-col justify-center items-center gap-4 p-8 md:flex-row-reverse md:justify-between">
        <div className="flex flex-row gap-5 items-center">
          <a href="https://www.instagram.com/moraesluc4s" target="_blank">
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasdemoraessouza/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </div>
        <span className="text-[#C9C9C9] text-xs ">
          Lucas de Moraes © 2024 All rights reserved.
        </span>
      </div>
    </>
  );
}
