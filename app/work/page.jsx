"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns"; 

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Learnify – LMS Platform",
    description:
      "I have developed Learnify, a Learning Management System (LMS) platform using React, JavaScript, JSON Server, Bootstrap, and Axios. The platform provides a responsive and user-friendly interface that allows users to browse, enroll in, and manage courses efficiently. The backend, powered by JSON Server and Axios, handles CRUD operations for courses, ensuring seamless data management and interaction. Reusable React components and state management with Hooks enable smooth navigation and dynamic updates across the application. Key features include course listing, course details, and search/filter functionality, creating an intuitive learning experience for users. This project demonstrates a full-stack development approach emphasizing scalability, maintainability, and a modern web interface.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Json Server" },
      { name: "React JS" },
     
    ],
    image: "/assets/work/ecom.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Mock.ai",
    description:
      "I have developed Mock.ai, an AI-powered mock interview platform using the MERN stack (MongoDB, Express.js, React, Node.js) and Gemini AI. The platform provides users with AI-driven mock interviews that offer real-time feedback, simulating a professional interview environment. Secure authentication is implemented using Clerk, ensuring safe user access, while Razorpay integration enables smooth and reliable payment processing for premium features. The backend handles interview sessions, user data, and results storage, while the responsive React frontend ensures a seamless and engaging user experience. This project demonstrates a comprehensive full-stack development approach integrating AI, security, and payment functionalities for a real-world application.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS 3" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://abin-portfolio.vercel.app/",
    github: "https://github.com/AbinSurendran/Abin_Portfolio",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "AI Trip Planner",
    description:
      "I have developed an AI Trip Planner using the MERN stack (MongoDB, Express.js, React, Node.js) that generates personalized travel itineraries based on user preferences. The backend provides RESTful APIs for managing trips, destinations, and user data, while MongoDB securely stores travel plans and user information. The responsive React frontend delivers a seamless user experience with dynamic itinerary generation and easy navigation. This project showcases a full-stack development approach integrating AI-driven recommendations, efficient data handling, and a modern web interface.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
    ],
    image: "/assets/work/lms.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack ",
    title: "Imagify – AI Image Generator",
    description:
      "I have developed Imagify, an AI-powered image generation platform using the MERN stack (MongoDB, Express.js, React, Node.js), enabling users to create images from text prompts. The backend handles user requests, image generation, and data storage, while MongoDB stores user prompts and generated images securely. The platform integrates Razorpay for smooth payment processing, and the responsive React frontend ensures a seamless and intuitive user experience. This project demonstrates a comprehensive full-stack development approach combining AI functionality, payment integration, and modern frontend design.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
      
    ],
    image: "/assets/work/animated-portfolio.png",
    live: "https://portfolio-abin.vercel.app/",
    github: "https://github.com/AbinSurendran/portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[468px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[468px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute inset-0 top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-2 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
