"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import dokumICP from "@/public/images/dokumICP.jpg";
import dokumICP2 from "@/public/images/dokumICP2.jpg";
import { motion } from "framer-motion";
import AnimatedComponent from "./AnimationComponent";

export const Experience = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="grid grid-rows gap-6">
            {/* card */}
            <div className=" p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                February 2024 - February 2025
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                I-RICH CHAIR-MAN
              </h2>
              <p className="text-sm">
                I am the head of I-RICH, an organization within the Department
                of Informatics at Diponegoro University. We focus on sharing
                knowledge and enhancing student skills through activities like
                knowledge-sharing sessions, technical workshops, and discussions
                on popular frameworks for web and mobile app development. Our
                goal is to create a collaborative learning environment that
                helps students stay updated with the latest technologies and
                prepare for academic and professional success.
              </p>
            </div>

            <div className=" p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                January - Maret 2025
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                FULL STACK DEVELOPER INTERN - PT. Sidorejo Makmur Sejahtera
              </h2>
              <p className="text-sm">
                I developed a web-based attendance system that leverages
                location tracking and facial recognition. The system allows
                companies to manage employee working hours, handle leave
                requests, and generate detailed attendance reports for each
                employee, including monthly summaries. This solution streamlines
                attendance management, ensuring accurate and efficient
                record-keeping.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="grid grid-rows gap-6">
            <div className="p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                September 2024 - Desember 2024
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                OPERATING SYSTEM LABORATORY ASSISTANT
              </h2>
              <p className="text-sm">
                I am an Assistant Lab Instructor for the Operating Systems
                Practicum, where I guide and support students in understanding
                key concepts such as process management, memory allocation, file
                systems, and synchronization. My role involves assisting with
                lab sessions, providing technical explanations, troubleshooting,
                and ensuring that students gain hands-on experience in operating
                system operations and commands.
              </p>
            </div>
            <div className="p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                September 2024
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                WORKSHOP HTML CSS Speakers
              </h2>
              <p className="text-sm">
                I developed a web-based attendance system that leverages
                location tracking and facial recognition. The system allows
                companies to manage employee working hours, handle leave
                requests, and generate detailed attendance reports for each
                employee, including monthly summaries. This solution streamlines
                attendance management, ensuring accurate and efficient
                record-keeping.
              </p>
            </div>

            <div className="p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                April 2024
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                WORKSHOP INDONESIA ON-CHAIN WEB3 with ICP
              </h2>
              <p className="text-sm">
                I was the organizer and lead for a workshop on Internet Computer
                Protocol (ICP), where participants explored the fundamentals of
                Web3 and its applications. The session covered key concepts of
                blockchain and smart contracts, followed by hands-on training to
                build and deploy smart contracts using Rust, providing attendees
                with practical experience in decentralized application
                development.
              </p>
            </div>

            <div className="flex">
              <Image
                src={dokumICP}
                alt="hero template"
                width={500}
                height={200}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-64 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src={dokumICP2}
                alt="hero template"
                width={500}
                height={200}
                className="rounded-lg ml-3 object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>

            <div className="p-5 rounded-xl shadow-lg shadow-blue-500/50 lg:w-full  md:w-96 sm:w-80 mx-auto">
              <h1 className="text-center font-bold text-blue-500">
                February 2024 - Juni 2024
              </h1>
              <h2 className="my-3 font-bold text-amber-600">
                COMPUTER NETWORKS LABORATORY ASSISTANT
              </h2>
              <p className="text-sm">
                I am an Assistant Lab Instructor for the Computer Networks
                Practicum, where I assist students in learning key concepts such
                as network protocols, IP addressing, subnetting, and network
                configuration. My role includes guiding lab sessions,
                troubleshooting network setups, and providing hands-on
                experience with tools and technologies like routers, switches,
                and network monitoring to help students develop practical
                networking skills.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <AnimatedComponent>
      <div id="experience" className="w-full ">
        <h1 className="pt-2 /20  mx-auto text-center  text-4xl font-bold tracking-wide w-72 h-16 backdrop-blur-3xl rounded-3xl">
          Experience
        </h1>
        <Timeline data={data} />
      </div>
    </AnimatedComponent>
  );
};
