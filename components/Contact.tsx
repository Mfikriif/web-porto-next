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
        <div id="contact">
          <div className="mb-32">
            <h1 className="w-60 text-center mx-auto text-4xl font-bold mb-10">
              Lets Connect
            </h1>
            <div className="flex w-3/5 justify-between mx-auto">
              <Link
                className="flex justify-center bg-[#731414] hover:bg-[#932a2a] w-56 h-14 font-semibold transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://www.instagram.com/mfikriif_/"}
              >
                <Image
                  className="filter invert w-5 h-5 my-auto"
                  src={instagram}
                  alt=""
                />
                <p className="my-auto ml-3">Instagram</p>
              </Link>
              <Link
                className="flex bg-[#172554] hover:bg-[#2c4598] justify-center w-56 h-14 font-semibold transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://www.instagram.com/mfikriif_/"}
              >
                <Image
                  className="filter invert w-8 h-8 my-auto"
                  src={linkedin}
                  alt=""
                />
                <p className="my-auto ml-3">LinkedIn</p>
              </Link>
              <Link
                className="flex bg-blue-800 hover:bg-blue-700 justify-center w-56 h-14 font-semibold transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://www.instagram.com/mfikriif_/"}
              >
                <Image
                  className="filter invert w-5 h-5 my-auto"
                  src={twitter}
                  alt=""
                />
                <p className="my-auto ml-3">Twitter</p>
              </Link>
              <Link
                className="flex bg-[#270767] hover:bg-[#311d59fc] justify-center w-56 h-14 font-semibold transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-110 rounded-lg"
                target="_blank"
                href={"https://github.com/Mfikriif"}
              >
                <Image
                  className="filter invert w-7 h-7 my-auto"
                  src={github}
                  alt=""
                />
                <p className="my-auto ml-3">Github</p>
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="w-60 text-center mx-auto text-4xl font-bold mb-10">
              Contact
            </h1>
            <div className="flex w-2/5 justify-between mx-auto">
              <Link
                href={"mailto:fikrifirdaus2112@gmail.com"}
                target="_blank"
                className="w-80 h-24 bg-[#932a2a] hover:bg-[#9f2e2e] py-5 pl-3 rounded-lg transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-105 "
              >
                <div className="flex ">
                  <Image
                    className="filter invert"
                    src={mail}
                    alt=""
                    width={27}
                  />
                  <p className="ml-2 pt-1">Email</p>
                </div>
                <p className="font-extralight tracking-wide text-sm mt-3">
                  fikrifirdaus2112@gmail.com
                </p>
              </Link>
              <Link
                href={"https://wa.me/62087870805235"}
                target="_blank"
                className="w-80 h-24 bg-[#185426] hover:bg-[#1e6b30] py-5 pl-3 rounded-lg transisition delay-150 duration-200 end-auto hover:-translate-y-1 hover:scale-105 "
              >
                <div className="flex ">
                  <Image className="filter invert" src={wa} alt="" width={27} />
                  <p className="ml-2 pt-1">Whatsapp</p>
                </div>
                <p className="font-extralight tracking-wide pl-1 text-sm mt-3">
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
