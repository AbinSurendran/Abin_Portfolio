"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "MERN Stack Web Developer skilled in MongoDB, Express.js, React, and Node.js to build dynamic, scalable web applications. You will collaborate with our design and backend teams to deliver seamless user experiences. Strong problem-solving skills and attention to detail are essential. Join our innovative team and contribute to exciting, cutting-edge projects.",
    href: "/web-development",
  },
  
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "UI/UX Designer to craft intuitive and visually appealing user interfaces. You will collaborate with our development team to transform user needs into elegant and functional designs. Strong skills in design tools (Figma, Adobe XD) and a keen eye for detail are essential. Join us to create engaging user experiences for our innovative projects.",
    href: "/ui-ux-design",
  },
  {
    num: "03",
    title: "App Development",
    description:
      "App Developer proficient in building robust, high-performance mobile applications for iOS and Android platforms. You will collaborate with our design and backend teams to create seamless, user-friendly experiences. Strong expertise in programming languages like Swift, Kotlin, or React Native is essential. Join our innovative team and contribute to exciting mobile projects.",
    href: "/app-development",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "SEO Specialist to enhance our online visibility and drive organic traffic. You will conduct keyword research, optimize website content, and implement SEO best practices. Strong analytical skills and familiarity with SEO tools (Google Analytics, SEMrush) are essential. Join our dynamic team and help us achieve top search rankings.",
    href: "/seo",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover text-outline-hover transition-all duration-500">
                  {service.num}
                  </div>
                {service.href && (
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                    
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    
                  </Link>
                )}
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



