import EmailIcon from "../../assets/icons/email-icon";
import InstagramIcon from "../../assets/icons/instagram-icon";
import LinkedinIcon from "../../assets/icons/linkedin-icon";

export function Footer() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center w-full p-8 gap-2">
        <span className="font-inter font-medium text-[#DEDEDE] md:text-[43px] text-lg ">
          Let's work together
        </span>
        <iframe
          className="bg-primary h-[90px] w-full md:w-[22%] brightness-90 saturate-0 border-[#484E53] border-2 rounded "
          src="https://open.spotify.com/embed/track/3GZD6HmiNUhxXYf8Gch723?utm_source=generator&theme=0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
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

        <div className="flex flex-col gap-4">
          <span className="text-[#C9C9C9] text-xs">
            Lucas de Moraes © 2025 All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}
