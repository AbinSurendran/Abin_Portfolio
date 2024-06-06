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
import WorkSliderBtns from "@/components/WorkSliderBtns"; // Ensure this is the correct path

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "E-commerce",
    description:
      "I have developed a comprehensive e-commerce website using the MERN stack (MongoDB, Express.js, React, and Node.js) that offers a seamless shopping experience for users. The platform features a dynamic and responsive user interface built with React, enabling efficient browsing, searching, and filtering of products. The backend, powered by Node.js and Express.js, ensures robust data management and server-side operations, while MongoDB handles the storage of user data and product information. To facilitate secure and reliable payment transactions, the website integrates Stripe, providing users with a smooth checkout process and various payment options. This project showcases a full-stack development approach, emphasizing security, scalability, and user-friendly design.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Node JS" },
      { name: "React JS" },
      { name: "Stripe" },
    ],
    image: "/assets/work/E-commerce.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio website",
    description:
      "I have created a modern and visually appealing portfolio website using Next.js, Tailwind CSS, Framer Motion, and TypeScript. This project demonstrates my ability to build performant and aesthetically pleasing web applications with cutting-edge technologies. Next.js provides server-side rendering and static site generation, ensuring fast load times and SEO optimization. Tailwind CSS is utilized for its utility-first approach, enabling rapid and responsive UI development. Framer Motion adds smooth and interactive animations, enhancing the user experience with dynamic visual effects. TypeScript ensures type safety and maintainable code, contributing to a robust and scalable codebase. This portfolio website highlights my skills in front-end development and design, offering an engaging and professional showcase of my projects and capabilities.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS 3" },
      { name: "TypeScript" },
      { name: "Next JS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/portfolio.png",
    live: "https://portfolio-abin.vercel.app/",
    github: "https://github.com/AbinSurendran/portfolio",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "MERN_BLOG",
    description:
      "I have developed a dynamic blog website using the MERN stack (MongoDB, Express.js, React, and Node.js) with integrated payment functionality via Stripe. This platform allows users to read, create, and manage blog posts effortlessly through a user-friendly interface powered by React. The backend, implemented with Node.js and Express.js, ensures efficient server-side operations and secure data handling, while MongoDB stores user data and blog content. To monetize the blog, I have integrated Stripe, enabling secure and smooth payment transactions for premium content and subscriptions. This project highlights my expertise in full-stack development, delivering a seamless and engaging blogging experience combined with reliable payment processing.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
    ],
    image: "/assets/work/MERN-Blog.jpg",
    live: "",
    github: "",
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



