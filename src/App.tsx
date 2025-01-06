import { AboutMe } from "./sections/AboutMe";
import { Footer } from "./sections/Footer";
import { GetInTouch } from "./sections/GetInTouch";
import { Header } from "./sections/Header";
import { Main } from "./sections/Main";
import { MyStacks } from "./sections/MyStacks";
import { WhatIDo } from "./sections/WhatIDo";

export default function App() {
  return (
    <>
      <div >
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
          <section id="my-stacks" className="w-full">
            <MyStacks />
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
