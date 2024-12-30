import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { GetInTouch } from "./components/GetInTouch";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { WhatIDo } from "./components/WhatIDo";

export default function App() {
  return (
    <>
      <div className="p-8">
        <Header />
        <div className="flex flex-col gap-24 items-center">
          <section id="main" className="w-full">
            <Main />
          </section>
          <section id="about-me" className="w-full">
            <AboutMe />
          </section>
          <section id="what-i-do" className="w-full">
            <WhatIDo />
          </section>
          <section id="get-in-touch" className="w-full flex justify-center">
            <GetInTouch />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
