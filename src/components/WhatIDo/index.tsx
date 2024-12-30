import { Card } from "../Card";

export function WhatIDo() {
  return (
    <div className="flex flex-col justify-center items-center text-white py-12">
      <span className="font-poppins antialiased font-extrabold text-4xl tracking-tighter">
        What I Do
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#FFFFFF] antialiased font-poppins font-semibold text-lg mt-2">
        My Services
      </span>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 max-w-5xl">
        <Card
          title="Data Analytics & Visualization"
          description="From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward."
        />
        <Card
          title="Predictive Analytics and Forecasting"
          description="From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success."
        />
        <Card
          title="Natural Language Processing"
          description="From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age."
        />
        <Card
          title="Machine Learning"
          description="From concept to automation, I craft Machine Learning solutions that decode patterns and optimize performance, driving your business into the era of intelligent automation."
        />
        <Card
          title="AI Chatbots"
          description="From design to deployment, I build AI Chatbots that enhance customer interactions, streamline processes, and elevate your brand’s engagement, bringing innovative solutions to your audience’s fingertips."
        />
      </div>
    </div>
  );
}
