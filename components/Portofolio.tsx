"use client";
import AnimatedComponent from "./AnimationComponent";
import { HoverEffect } from "./ui/card-hover-effect";

export const Portofolio = () => {
  return (
    <AnimatedComponent>
      <div
        id="portofolio"
        className=" w-3/4 mt-20 mx-auto mb-10 sm:px-2 md:px-8"
      >
        <h1 className="pt-2 /20 mx-auto text-center text-4xl font-bold tracking-wide w-72 h-16 backdrop-blur-3xl rounded-3xl">
          Projects
        </h1>
        <HoverEffect items={projects} />
      </div>
    </AnimatedComponent>
  );
};
export const projects = [
  {
    title: "Tuturu App",
    description:
      "Tuturu App is applicaton which was develop to help people who have disabilities such as speech impairment.",
    image: "/images/tuturuApp-project.png",
    tech: ["Flutter", "Dart", "Python", "Firebase"],
    link: "",
  },
  {
    title: "SI-AKAM",
    description:
      "SIAKAM is an academic website designed for students, lecturers, and academic staff to manage various academic activities.",
    image: "/images/siakam.png",
    tech: ["Laravel 11", "Laravel Breeze", "MySQL"],
    link: "https://github.com/Mfikriif/SiAKAM",
  },
  {
    title: "CARICA",
    description:
      "Carica is a web-based monitoring system designed to track real-time sea and weather conditions.",
    image: "/images/pkm.png",
    tech: ["Laravel 11"],
    link: "",
  },
  {
    title: "ALGOMARINE",
    description:
      "Algomarine website is company profile for algomarine organization.",
    image: "/images/algomarine.png",
    tech: ["Laravel 11", "Filament", "MySQL"],
    link: "https://github.com/Mfikriif/algoMarineWeb",
  },
  {
    title: "E-PRESENSI",
    description:
      "E-PRESENSI is a website designed for attendance management, utilizing facial recognition, location tracking, and allowing users to submit permission requests in case of illness or other activities.",
    image: "/images/e-presensi.png",
    tech: ["Laravel 11", "Laravel Breeze", "InertiaJS", "ReactJS", "MySQL"],
    link: "https://github.com/Mfikriif/presensisms",
  },
];
