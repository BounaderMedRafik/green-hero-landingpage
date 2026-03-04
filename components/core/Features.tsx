import { CircleDollarSign } from "lucide-react";
import React from "react";

const feats: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores atque vero nulla inventore maxime!",
    icon: <CircleDollarSign className=" text-primary" size={32} />,
  },
  {
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores atque vero nulla inventore maxime!",
    icon: <CircleDollarSign className=" text-primary" size={32} />,
  },
  {
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores atque vero nulla inventore maxime!",
    icon: <CircleDollarSign className=" text-primary" size={32} />,
  },
  {
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores atque vero nulla inventore maxime!",
    icon: <CircleDollarSign className=" text-primary" size={32} />,
  },
];
const Features = () => {
  return (
    <div>
      <div className="  p-10 bg-accent">
        <h2 className=" opacity-75 font-light">use cases</h2>
        <div className="flex items-center justify-between mt-2">
          <h1 className="md:text-5xl text-xl font-light md:max-w-3xl text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className=" text-lg font-light opacity-75 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            maiores atque vero nulla inventore maxime!
          </p>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {feats.map((feat, i) => (
            <div
              key={i}
              className="p-6 border border-foreground/10  flex flex-col items-start gap-4"
            >
              {feat.icon}
              <h1 className=" mt-4 font-bold text-xl font-serif">
                {feat.title}
              </h1>
              <p className="  opacity-50 max-w-md ">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
