"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users } from "lucide-react";
import Image from "next/image";

const DualPathCTA = () => {
  return (
    <section className="relative min-h-[400px] w-full overflow-hidden bg-gray-900 lg:min-h-[500px]">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
        className="absolute inset-0 flex h-full w-[200%]"
      >
        {[1, 2].map((index) => (
          <div
            key={index}
            className="relative h-full w-1/2 flex-shrink-0 opacity-25 transition-opacity duration-300"
          >
            <Image
              src="/images/tech companies.avif"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 1}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="Tech companies illustration"
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gray-900/60" />

      <div className="relative flex min-h-[400px] items-center lg:min-h-[500px]">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-0 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 rounded-lg bg-white/10 p-5 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-6"
            >
              <Users className="mx-auto h-8 w-8 text-purple-400 lg:h-10 lg:w-10" />
              <div className="space-y-2">
                <h2 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                  Looking for New Opportunities?
                </h2>
                <p className="text-sm text-white/80 sm:text-base">
                  Speak with an expert recruiter about your career
                </p>
              </div>
              <a
                href="https://cal.com/andrew-schuessler-xrp0oa/20-minute-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <span className="inline-flex w-full items-center justify-center group">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/40">
                    Schedule Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
              <p className="text-xs font-medium text-white/60">
                20-minute consultation · No obligation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 rounded-lg bg-white/10 p-5 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:p-6"
            >
              <Building2 className="mx-auto h-8 w-8 text-purple-400 lg:h-10 lg:w-10" />
              <div className="space-y-2">
                <h2 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                  Hiring Software Engineering Talent?
                </h2>
                <p className="text-sm text-white/80 sm:text-base">
                  Learn about our contingent search solutions
                </p>
              </div>
              <a
                href="https://cal.com/andrew-schuessler-xrp0oa/discuss-hiring-needs-coder-collective"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <span className="inline-flex w-full items-center justify-center group">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/40">
                    Let&apos;s Talk
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
              <p className="text-xs font-medium text-white/60">
                30-minute consultation · Tailored solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPathCTA;
