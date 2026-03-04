"use client";
import { Download, InfoIcon } from "lucide-react";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images: string[] = [
  "https://images.pexels.com/photos/4042772/pexels-photo-4042772.jpeg",
  "https://images.pexels.com/photos/12492301/pexels-photo-12492301.jpeg",
  "https://images.pexels.com/photos/6995380/pexels-photo-6995380.jpeg",
  "https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg",
  "https://images.pexels.com/photos/7512763/pexels-photo-7512763.jpeg",
  "https://images.pexels.com/photos/4167565/pexels-photo-4167565.jpeg",
  "https://images.pexels.com/photos/14430162/pexels-photo-14430162.png",
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -200]);

  return (
    <div className="min-h-screen relative bg-background flex items-center justify-center flex-col">
      <motion.div
        ref={ref}
        style={{
          marginTop: y,
        }}
        className="absolute z-0 pointer-events-none inset-0 overflow-hidden "
      >
        {images.slice(0, 7).map((img, index) => {
          const layout = [
            {
              pos: "top-6 left-6 md:top-8 md:left-24",
              size: "w-24 h-36 md:w-32 md:h-44",
            },
            {
              pos: "top-20 left-10 md:top-14 md:left-1/4",
              size: "w-32 h-48 md:w-96 md:h-56",
            },
            {
              pos: "top-40 right-6 md:top-20 md:right-1/4",
              size: "w-28 h-40 md:w-34 md:h-48",
            },
            {
              pos: "top-8 right-6 md:top-8 md:right-10",
              size: "w-28 h-44 md:w-36 md:h-52",
            },
            {
              pos: "bottom-32 left-6 md:top-1/2 md:left-10",
              size: "w-32 h-32 md:w-96 md:h-96",
            },
            {
              pos: "bottom-20 right-6 md:top-1/2 md:right-12",
              size: "w-30 h-44 md:w-38 md:h-54",
            },
            {
              pos: "bottom-8 right-10 opacity-40 md:bottom-16 md:right-96 md:opacity-50",
              size: "w-36 h-52 md:w-44 md:h-60",
            },
          ];

          return (
            <img
              key={img}
              src={img}
              alt={`Hero image ${index + 1}`}
              className={`
          absolute
          object-cover
          shadow-sm
          opacity-50
          ${layout[index].pos}
          ${layout[index].size}
        `}
            />
          );
        })}
      </motion.div>

      <div className=" absolute top-0 left-0 w-full h-1/2 pointer-events-none bg-linear-to-b from-background to-transparent"></div>

      <p className=" text-xs px-3 py-1.5 leading-none mb-3  relative z-20 bg-primary text-background rounded-full shadow">
        Beta Version 1.1
      </p>
      <h1 className=" text-4xl md:text-7xl font-serif max-w-sm md:max-w-5xl md:mb-5 text-center leading-[0.8] relative z-20">
        Your next level to your waste management & recycling.
      </h1>
      <p className=" text-sm opacity-75 max-w-md text-center mt-4 relative z-20">
        GreenHero is not just about throwing things away correctly. It is about
        building sustainable habits, quantifying ecological contribution, and
        turning waste into opportunity.
      </p>

      <div className=" mt-7 flex items-center gap-1 relative z-20">
        <a
          href="https://drive.google.com/file/d/1nOO8EIZF3WumYjzMhkhl_-iWr6IkDM3J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size={"lg"}>
            Download <Download className="ml-2 size-4" />
          </Button>
        </a>
        <a href="/#about-us">
          <Button variant={"outline"} size={"lg"}>
            Learn More <InfoIcon className="ml-2 size-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
