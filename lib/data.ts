import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated ThanhDo University",
    location: "Kim Chung, Hoai Duc, Ha Noi",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Duy Tan, Cau Giay, Ha Noi",
    description:
      "I'm now a frontend developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Playciti.io",
    description:
      "I worked as a frontend developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript", "Redux"],
    imageUrl: '/prj1.png',
    link: 'https://app.saworld.io/vi'
  },
  {
    title: "Sasa AirDrop",
    description:
      "A project used to airdrop tokens on the blockchain",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: '/prj2.png',
    link: 'https://play.saworld.io/harvest-heist'
  },
  {
    title: "Kiến trúc song anh",
    description:
      "A freelance project I worked on for 1 month, including the backend. Use strapi to save data",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Strapi"],
    imageUrl: '/prj3.png',
    link: 'https://kientrucsonganh.vn/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Swiper",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "SCSS",
  "Vercel",
  "Strapi",
  "Java",
  "Express",
  "Framer Motion",
] as const;
