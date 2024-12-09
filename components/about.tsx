"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a{" "}
        <i>
          <b>Frontend Developer</b> with experience
        </i>{" "}
        in designing and building user-friendly, responsive web applications.
        Proficient in modern JavaScript frameworks like{" "}
        <i> React.js and Nextjs</i>. I specialize in crafting intuitive
        interfaces that <i> enhance user engagement.</i> I have a strong eye for
        design, a solid understanding of <i> web performance optimization</i>,
        and a passion for creating seamless digital experiences.
      </p>
      <p></p>
      <p>
        I thrive in collaborative environments, working closely with
        cross-functional teams to deliver high-quality products. Constantly
        seeking to improve my skills, I stay updated on the latest industry
        trends and best practices in frontend development. My goal is to
        contribute to innovative projects that make a meaningful impact.
      </p>
    </motion.section>
  );
}
