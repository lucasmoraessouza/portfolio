import { services } from "../../mocks/services";
import { Card } from "../Card";

export function WhatIDo() {
  return (
    <div className="flex flex-col justify-center items-center text-white py-12">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        Meus serviços
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-lg mt-2">
        O que eu faço?
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 max-w-5xl">
        {services?.map((service, index) => (
          <Card
            key={index}
            icon={service?.icon}
            title={service?.title}
            description={service?.description}
            className={index === services.length - 1 && services.length % 2 !== 0 ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
}