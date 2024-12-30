import { Button } from "../Button";

export function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-poppins antialiased font-extrabold text-2xl tracking-tighter">
        About Me
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-base">
        Get to know me
      </span>
      <div className="w-full max-w-5xl items-center flex flex-col">
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          Hi there! I'm Lucas de Moraes Souza, a full stack developer
          specializing in data analytics, predictive modeling, natural language
          processing, machine learning, and AI chatbots. With a passion for
          unraveling insights from complex datasets, I'm dedicated to helping
          businesses make informed decisions and stay ahead in today's
          data-driven world.
        </span>
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it's
          uncovering hidden patterns, predicting future trends, or automating
          processes with AI, I'm here to help you harness the full potential of
          your data.
        </span>
        <span className="font-poppins antialiased text-md font-medium text-[#E1E1E1] text-center leading-7 mt-9">
          Let's work together to transform your data into actionable insights
          that drive real results. Get in touch, and let's start unlocking the
          power of your data today!
        </span>
      </div>

      <div className="mt-8">
        <Button text="Download Resume" />
      </div>
    </div>
  );
}
