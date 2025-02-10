"use client";
import SplitText from "@/src/blocks/TextAnimations/SplitText/SplitText";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { FlipWords } from "./ui/flip-words";

export const Hero = () => {
  const word = ["Hello!", "Hola!", "Ciao!", "Bonjour!", "こんにちは！"];

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(13,14,36)"
      gradientBackgroundEnd="rgb(13,14,36)"
    >
      <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="mx-auto lg:w-2/3 my-auto lg:pl-24 flex flex-col lg:items-start">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:text-left mb-4">
            <FlipWords className="text-white font-thin" words={word} />
          </h1>

          {/* Split Text */}
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-thin text-center lg:text-left">
              My Name is Muhammad Fikri Firdaus
            </h1>
          </div>

          {/* Shiny Text */}
          <ShinyText
            className="mt-6 text-lg sm:text-xl lg:text-2xl tracking-wide lg:text-left"
            speed={5}
            text="I'm a FullStack Developer"
          />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};
