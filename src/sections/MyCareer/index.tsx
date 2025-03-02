import { career } from "../../mocks/career";

export function MyCareer() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        Minha carreira
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Experiências
      </span>
      <div className="flex flex-col gap-8 mt-9">
        {career.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 w-full max-w-5xl">
            <div className="flex flex-row items-center gap-4">
              <item.icon />
              <div className="flex flex-col">
                <span className="font-poppins antialiased text-xl font-extrabold text-white leading-7">
                  {item.title}
                </span>
                <div className="flex flex-row gap-2 mt-2">
                  <div className="flex rounded-full items-center justify-center bg-[#222222] px-4 w-fit text-sm">
                    {item.period}
                  </div>
                  |
                  <span className="font-poppins antialiased text-base font-medium text-[#E1E1E1] leading-7 ">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {item.feat.map((feat, featIndex) => (
                <li
                  key={featIndex}
                  className="font-poppins antialiased text-md font-medium text-[#E1E1E1] leading-7"
                >
                  {feat}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
