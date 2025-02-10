"use client";

import Image from "next/image";
import AnimatedComponent from "./AnimationComponent";

export const Stack = () => {
  return (
    <>
      <AnimatedComponent>
        <div id="stack" className="mb-28">
          <h1 className="my-20 text-4xl w-56 text-center mx-auto py-1 font-bold">
            Tech Stack
          </h1>

          <div className="w-3/4 mx-auto mb-10">
            <p className="text-2xl font-semibold mb-4">Frontend</p>
            <TitleImage className="grid grid-cols-5 gap-3 " items={frontend} />
          </div>
          <div className="w-3/4 mx-auto mb-10">
            <p className="text-2xl font-semibold mb-4">Backend</p>
            <TitleImage className="grid grid-cols-5 gap-3 " items={backend} />
          </div>
          <div className="w-3/4 mx-auto mb-10">
            <p className="text-2xl font-semibold mb-4">Database</p>
            <TitleImage className="grid grid-cols-5 gap-3 " items={database} />
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export const frontend = [
  {
    title: "React",
    image: "/images/react-logo.png",
  },
  {
    title: "Tailwind CSS",
    image: "/images/tailwind.png",
  },
  {
    title: "JavaScript",
    image: "/images/js-logo.png",
  },
  {
    title: "HTML",
    image: "/images/HTML-logo.png",
  },
  {
    title: "CSS",
    image: "/images/CSS-Logo.png",
  },
  {
    title: "TypeScript",
    image: "/images/typescript.png",
  },
  {
    title: "Next.js",
    image: "/images/next-js.png",
  },
];

export const backend = [
  {
    title: "PHP",
    image: "/images/php-logo.png",
  },
  {
    title: "Laravel",
    image: "/images/laravel-logo.png",
  },
];

export const database = [
  {
    title: "MySQL",
    image: "/images/Mysql-logo.png",
  },
  {
    title: "Sqlite",
    image: "/images/sqlite.png",
  },
];

export const TitleImage = ({
  items,
  className,
}: {
  items: {
    title?: string;
    image?: string;
    className?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={
        className ? `grid gap-6 ${className}` : "grid gap-6 grid-cols-2"
      }
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="w-56 py-4 rounded-lg bg-[rgb(26,26,53)] transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 "
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
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-md" />
          )}
          {item.title && (
            <p className="mt-2 text-center text-sm">{item.title}</p>
          )}
        </div>
      ))}
    </div>
  );
};
