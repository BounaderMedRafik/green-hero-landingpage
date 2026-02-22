import { Banana, Bike, Cake } from "lucide-react";
import React from "react";

const features: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos, nemo consequuntur natus enim eius, quo repellendus quas incidunt ab aliquid soluta vel earum sunt deleniti at voluptatibus pariatur eum iste? Totam reprehenderit quas neque voluptatum voluptates dicta, eveniet commodi, harum ratione voluptate in.",
    icon: <Banana size={24} />,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos, nemo consequuntur natus enim eius, quo repellendus quas incidunt ab aliquid soluta vel earum sunt deleniti at voluptatibus pariatur eum iste? Totam reprehenderit quas neque voluptatum voluptates dicta, eveniet commodi, harum ratione voluptate in.",
    icon: <Bike size={24} />,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos, nemo consequuntur natus enim eius, quo repellendus quas incidunt ab aliquid soluta vel earum sunt deleniti at voluptatibus pariatur eum iste? Totam reprehenderit quas neque voluptatum voluptates dicta, eveniet commodi, harum ratione voluptate in.",
    icon: <Cake size={24} />,
  },
];

const Features = () => {
  return (
    <>
      <div className="max-h-screen px-8 bg-accent overflow-hidden hidden md:block">
        <h2 className="text-5xl font-light text-end max-w-5xl ml-auto pt-6 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          impedit quidem mollitia.
        </h2>

        <div className="grid grid-cols-6 gap-8 ">
          {/* Left column - Phone image */}
          <div className="col-span-3 flex justify-center">
            <img
              className="h-[140vh] max-w-full object-contain drop-shadow-2xl"
              src="/phone/sc-left.png"
              alt="Phone mockup"
            />
          </div>

          {/* Right column - Features grid */}
          <div className="col-span-3 ">
            <p className="text-lg text-justify opacity-75 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quos, nemo consequuntur natus enim eius, quo repellendus quas
              incidunt ab aliquid soluta vel earum sunt deleniti at voluptatibus
              pariatur eum iste? Totam reprehenderit quas neque voluptatum
              voluptates dicta, eveniet commodi, harum ratione voluptate in.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {features.map((item, i) => (
                <div key={i} className="p-3 bg-white/10 rounded-lg">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" block md:hidden">hello</div>
    </>
  );
};

export default Features;
