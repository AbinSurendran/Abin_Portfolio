"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Hello! I'm Abin S, a passionate and dedicated MERN stack developer with a strong background in creating dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I have honed my skills to deliver seamless and efficient user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abin Surendran",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7994713815",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dev.abin.28@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Malayalam",
    },
  ],
};

// experience data
const experience = {
  icon: "",
  title: "My experience",
  description:
    "MERN stack developer with a strong background in creating dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I have honed my skills to deliver seamless and efficient user experiences.Developed and deployed multiple web applications using the MERN stack. Created and maintained server-side logic and database schemas.Implemented front-end components and user interfaces with React.js and Tailwind CSS.Integrated third-party APIs and payment gateways (e.g., Stripe).",
  items: [
    {
      company: "Freelancer Start up ",
      position: "Full Stack Developer",
      duration: "2023-Present",
    },
    {
      company: "Freelancer Start up ",
      position: "Front-End Developer Intern",
      duration: "2022-2023",
    },
    // {
    //   company: "E-commerce Startup ",
    //   position: "Freelance Web Developer ",
    //   duration: "2021-2022",
    // },
    // {
    //   company: "Freelancer Start up",
    //   position: "UI/UX Designer ",
    //   duration: "2019-2021",
    // },
    // {
    //   company: "Internship ",
    //   position: "Web Developer Intern ",
    //   duration: "Summer-2019",
    // },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "MERN stack developer with a strong background in creating dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I have honed my skills to deliver seamless and efficient user experiences.",
  items: [
    // {
    //   Institution: "Luminur Technolab ",
    //   degree: "MEA(R)N Stack Web Development",
    //   duration: "2023",
    // },
    {
      Institution: "School of Technology and Applied Sciences (STAS)",
      degree: "BSC Computer Science",
      duration: "2020-2023",
    },
    {
      Institution: "Udemy",
      degree: "Complete Web Development Bootcomp",
      duration: "2022-2023",
    },
    {
      Institution: "Udemy",
      degree: "Server Side Rendering with React and Redux",
      duration: "2020-2022",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "My expertise in Node.js enables me to develop fast, reliable server-side applications. I am well-versed in modern JavaScript (ES6+), HTML5, and CSS3, ensuring clean and maintainable code. With strong skills in state management, asynchronous programming, and performance optimization, I deliver efficient and user-friendly web applications. Additionally, I have experience with version control using Git and deploying applications to cloud platforms like AWS, Heroku, and Vercel.",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py--12 xl:py-0"
    >
      <div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-8 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8 gap-y-6  max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="font-semibold gap-8 ">
                          {item.fieldName}
                        </span>
                        <span className="text-white/80">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
