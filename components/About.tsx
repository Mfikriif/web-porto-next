"use client";
import Image from "next/image";
import AnimatedComponent from "./AnimationComponent";
import fikri from "@/public/images/fikri.jpg";

export const About = () => {
  return (
    <AnimatedComponent>
      <div
        id="about"
        className="mb-32 grid w-3/4 mx-auto my-28 md:grid-cols-2 sm:grid-cols-1 gap-4"
      >
        {/* Foto */}
        <div className="h-72 w-72 rounded-full overflow-hidden mx-auto">
          <Image src={fikri} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="">
          <h1 className="pt-1 mb-3 text-4xl font-bold tracking-wide w-72 h-16 backdrop-blur-3xl rounded-3xl">
            About Me
          </h1>
          {/* Deskripsi */}
          <p className="text-justify">
            I am a third-year Informatics undergraduate student at Diponegoro
            University with a strong passion for web and mobile development. I
            enjoy building dynamic, user-friendly applications and solving
            real-world problems through technology. Currently, I am deepening my
            knowledge in software engineering, focusing on both front-end and
            back-end development to create scalable and high-performing
            solutions. With continuous learning and a problem-solving mindset, I
            aim to become a skilled software engineer capable of contributing to
            impactful projects.
          </p>
        </div>
      </div>
    </AnimatedComponent>
  );
};
