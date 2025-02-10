"use client";

import Image from "next/image";
import AnimatedComponent from "./AnimationComponent";

export const Stack = () => {
  return (
    <>
      <AnimatedComponent>
        <div id="stack" className="mb-28 px-4">
          <h1 className="my-20 text-3xl sm:text-4xl w-56 text-center mx-auto py-1 font-bold">
            Tech Stack
          </h1>

          {/* Frontend Stack */}
          <div className="w-full md:w-3/4 mx-auto mb-12">
            <p className="text-xl sm:text-2xl font-semibold mb-6">Frontend</p>
            <TitleImage
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              items={frontend}
            />
          </div>

          {/* Backend Stack */}
          <div className="w-full md:w-3/4 mx-auto mb-12">
            <p className="text-xl sm:text-2xl font-semibold mb-6">Backend</p>
            <TitleImage
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              items={backend}
            />
          </div>

          {/* Database Stack */}
          <div className="w-full md:w-3/4 mx-auto mb-12">
            <p className="text-xl sm:text-2xl font-semibold mb-6">Database</p>
            <TitleImage
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
              items={database}
            />
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export const frontend = [
  { title: "React", image: "/images/react-logo.png" },
  { title: "Tailwind CSS", image: "/images/tailwind.png" },
  { title: "JavaScript", image: "/images/js-logo.png" },
  { title: "HTML", image: "/images/HTML-logo.png" },
  { title: "CSS", image: "/images/CSS-Logo.png" },
  { title: "TypeScript", image: "/images/typescript.png" },
  { title: "Next.js", image: "/images/next-js.png" },
];

export const backend = [
  { title: "PHP", image: "/images/php-logo.png" },
  { title: "Laravel", image: "/images/laravel-logo.png" },
];

export const database = [
  { title: "MySQL", image: "/images/Mysql-logo.png" },
  { title: "Sqlite", image: "/images/sqlite.png" },
];

export const TitleImage = ({
  items,
  className,
}: {
  items: { title?: string; image?: string }[];
  className?: string;
}) => {
  return (
    <div className={className || "grid gap-6 grid-cols-2"}>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-48 py-6 rounded-lg bg-[rgb(26,26,53)] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg"
        >
          {item.image ? (
            <Image
              className="mx-auto"
              src={item.image}
              height={70}
              width={70}
              alt={item.title || "Image"}
            />
          ) : (
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-md mx-auto" />
          )}
          {item.title && (
            <p className="mt-4 text-center text-sm font-medium text-white">
              {item.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
