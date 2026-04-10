"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LogoScroller = () => {
  const logos = [
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      width: 46,
      height: 16,
    },
    {
      name: "Y Combinator",
      src: "/images/Y_Combinator_logo.svg.png",
      width: 40,
      height: 16,
    },
    {
      name: "Stripe",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      width: 49,
      height: 16,
    },
    {
      name: "Airbnb",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      width: 49,
      height: 16,
    },
    {
      name: "Brex",
      src: "https://logo.clearbit.com/brex.com",
      width: 39,
      height: 16,
    },
    {
      name: "Ramp",
      src: "https://logo.clearbit.com/ramp.com",
      width: 39,
      height: 16,
    },
    {
      name: "Framer",
      src: "/images/framer.jpeg",
      width: 45,
      height: 16,
    },
    {
      name: "Mercury",
      src: "/images/mercury.png",
      width: 45,
      height: 16,
    },
  ];

  const gapSize = 32;
  const singleSetWidth = logos.reduce(
    (sum, logo) => sum + logo.width + gapSize,
    0
  );

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative z-50 w-full overflow-hidden py-4">
      <motion.div
        className="relative z-50 flex items-center gap-16"
        animate={{
          x: [0, -singleSetWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="relative z-50 flex h-6 flex-shrink-0 items-center justify-center opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="relative z-50 object-contain"
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoScroller;
