import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stas from "@/components/Stas";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm
              <br />
              <span className="text-accent">Abin Surendran</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegent digital experiences and I am
              proficient in various programming languages and technologies.
              {/* As a passionate MERN Stack developer, I specialize in building dynamic, user-friendly web applications that deliver seamless digital experiences. With expertise in MongoDB, Express.js, React, and Node.js, I bring a holistic approach to both front-end and back-end development. I am proficient in modern programming languages and technologies, and I thrive on turning complex ideas into clean, efficient, and scalable code. Whether crafting intuitive user interfaces or developing robust server-side solutions, I focus on creating solutions that are not only functional but also elegant and optimized for performance. Let’s collaborate to bring your vision to life with innovative web development! */}
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <FiDownload className="text-xl" />
                <a href="/public/Abin Resume.pdf" download="Abin_Surendran_CV.pdf">
                  <span>Download CV</span>
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> */}
        </div>
      </div>
      <Stas />
    </section>
  );
};

export default Home;
