"use client";

import Image from "next/image";
import Link from "next/link";
import instagram from "@/public/images/instagram.png";
import linkedin from "@/public/images/linkedin.png";
import twitter from "@/public/images/twitter.png";
import github from "@/public/images/github.png";
import mail from "@/public/images/mail.png";
import wa from "@/public/images/whatsapp.png";
import AnimatedComponent from "./AnimationComponent";

export const Contact = () => {
  return (
    <>
      <AnimatedComponent>
        <div id="contact" className="px-4">
          {/* Section: Let's Connect */}
          <div className="mb-16 md:mb-24">
            <h1 className="w-full text-3xl sm:text-4xl font-bold text-center mb-10">
              Let&apos;s Connect
            </h1>

            {/* Link Social Media */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mx-auto max-w-4xl">
              <Link
                className="flex items-center justify-center bg-[#731414] hover:bg-[#932a2a] w-full h-14 font-semibold transition delay-150 duration-200 hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://www.instagram.com/mfikriif_/"}
              >
                <Image
                  className="filter invert w-5 h-5"
                  src={instagram}
                  alt=""
                />
                <p className="ml-3">Instagram</p>
              </Link>

              <Link
                className="flex items-center justify-center bg-[#172554] hover:bg-[#2c4598] w-full h-14 font-semibold transition delay-150 duration-200 hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://www.linkedin.com/in/mfikriif"}
              >
                <Image
                  className="filter invert w-7 h-7"
                  src={linkedin}
                  alt=""
                />
                <p className="ml-3">LinkedIn</p>
              </Link>

              <Link
                className="flex items-center justify-center bg-blue-800 hover:bg-blue-700 w-full h-14 font-semibold transition delay-150 duration-200 hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://twitter.com/mfikriif"}
              >
                <Image className="filter invert w-5 h-5" src={twitter} alt="" />
                <p className="ml-3">Twitter</p>
              </Link>

              <Link
                className="flex items-center justify-center bg-[#270767] hover:bg-[#311d59fc] w-full h-14 font-semibold transition delay-150 duration-200 hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://github.com/Mfikriif"}
              >
                <Image className="filter invert w-7 h-7" src={github} alt="" />
                <p className="ml-3">Github</p>
              </Link>
            </div>
          </div>

          {/* Section: Contact Info */}
          <div className="mb-16">
            <h1 className="w-full text-3xl sm:text-4xl font-bold text-center mb-10">
              Contact
            </h1>
            <div className="flex flex-col gap-5 sm:flex-row justify-center items-center mx-auto max-w-3xl">
              <Link
                href={"mailto:fikrifirdaus2112@gmail.com"}
                target="_blank"
                className="flex flex-col justify-between w-full sm:w-72 h-28 bg-[#932a2a] hover:bg-[#9f2e2e] py-5 px-4 rounded-lg transition delay-150 duration-200 hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center">
                  <Image
                    className="filter invert"
                    src={mail}
                    alt=""
                    width={27}
                  />
                  <p className="ml-2 font-medium">Email</p>
                </div>
                <p className="font-extralight tracking-wide text-sm mt-2">
                  fikrifirdaus2112@gmail.com
                </p>
              </Link>

              <Link
                href={"https://wa.me/62087870805235"}
                target="_blank"
                className="flex flex-col justify-between w-full sm:w-72 h-28 bg-[#185426] hover:bg-[#1e6b30] py-5 px-4 rounded-lg transition delay-150 duration-200 hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center">
                  <Image className="filter invert" src={wa} alt="" width={27} />
                  <p className="ml-2 font-medium">Whatsapp</p>
                </div>
                <p className="font-extralight tracking-wide text-sm mt-2">
                  +6287870805235
                </p>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};
