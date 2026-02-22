import { Facebook, Github, Globe, Linkedin } from "lucide-react";
import React from "react";
const team: {
  name: string;
  role: string;
  pfp: string;
  socials: {
    portfolio?: string;
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}[] = [
  {
    name: "Bounader Med Rafik",
    role: "Web Developer",
    socials: {
      portfolio: "https://www.bmedrafik.me/",
      linkedin: "https://www.linkedin.com/in/bounadermedrafik/",
      github: "https://github.com/BounaderMedRafik",
    },
    pfp: "https://www.edengarden.software/team/cropped/bmed.jpeg",
  },
  {
    name: "Haraoui Kouceila",
    role: "Ai Developer",
    socials: {
      linkedin: "https://www.linkedin.com/in/haraoui-kouceila-3598962b5/",
      facebook: "https://www.facebook.com/haraoui.kouceila",
    },
    pfp: "https://www.edengarden.software/team/cropped/kouceila.jpeg",
  },
  {
    name: "Hessaine Islem",
    role: "Backend Developer",
    socials: {
      facebook: "https://www.facebook.com/isslam.xr",
    },
    pfp: "https://www.edengarden.software/team/cropped/islem.jpeg",
  },
];
const About = () => {
  return (
    <div className="px-4">
      <h1 className="md:text-5xl text-xl font-light md:max-w-7xl text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet
        illo rem deleniti doloribus fuga, totam, quaerat, similique commodi
        sequi nihil iste omnis tempora!
      </h1>

      <div className=" block md:grid grid-cols-6 w-full mt-14">
        <div className=" col-span-2 justify-end items-end flex p-4">
          <div>
            <p className="  text-2xl text-justify opacity-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              sequi quidem veniam ab provident explicabo fuga, aliquam illum
              ipsum iure eaque, debitis commodi earum rerum. Fugit porro quod
              atque similique nisi blanditiis eligendi quibusdam.
            </p>

            <div className=" grid grid-cols-3 gap-2  mt-8">
              {team.map((item, i) => (
                <div key={i}>
                  <img
                    src={item.pfp}
                    alt={item.name}
                    className=" w-full aspect-square object-cover object-center"
                  />
                  <h2 className="  font-medium mt-4">{item.name}</h2>
                  <p className="  opacity-75 text-sm">{item.role}</p>

                  <div className=" flex items-center gap-1">
                    {item.socials.portfolio && (
                      <a
                        target="_blank"
                        href={item.socials.portfolio}
                        className=" text-primary hover:underline"
                      >
                        <Globe className=" inline-block " size={16} />
                      </a>
                    )}
                    {item.socials.linkedin && (
                      <a
                        target="_blank"
                        href={item.socials.linkedin}
                        className=" text-primary hover:underline"
                      >
                        <Linkedin className=" inline-block " size={16} />
                      </a>
                    )}
                    {item.socials.github && (
                      <a
                        target="_blank"
                        href={item.socials.github}
                        className=" text-primary hover:underline"
                      >
                        <Github className=" inline-block " size={16} />
                      </a>
                    )}
                    {item.socials.facebook && (
                      <a
                        target="_blank"
                        href={item.socials.facebook}
                        className=" text-primary hover:underline"
                      >
                        <Facebook className=" inline-block " size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" col-span-4 bg-red-300">
          <img className=" " src="/bmed-islem.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
