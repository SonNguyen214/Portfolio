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
    date: "2021 - 12/2024",
  },
  {
    title: "Frontend Developer",
    location: "Le Duc Tho, Cau Giay, Ha Noi",
    description:
      "I'm now a frontend developer. My stack includes Vuejs, Nuxt.js, TypeScript, Tailwindcss, Scss. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "12/2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Playciti.io",
    description:
      "I worked as a frontend developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Next.js", "Tailwindcss", "Framer-motion", "SCSS", "TypeScript", "Redux", "Axios"],
    imageUrl: '/prj1.png',
    link: 'https://app.saworld.io/vi'
  },
  {
    title: "Sasa AirDrop",
    description:
      "A project used to airdrop tokens on the blockchain",
    tags: ["TypeScript", "Next.js", "Tailwindcss", "Redux", "Charka-UI", "SCSS", "Axios"],
    imageUrl: '/prj2.png',
    link: 'https://play.saworld.io/harvest-heist'
  },
  {
    title: "Kiến trúc song anh",
    description:
      "A freelance project I worked on for 1 month, including the backend. Using Strapi to save data",
    tags: ["Next.js", "Tailwind", "Framer-motion", "SCSS",  "Strapi", "Axios"],
    imageUrl: '/prj3.png',
    link: 'https://kientrucsonganh.vn/'
  },
  {
    title: "Lux car",
    description:
      "A freelancer project I worked on for 1 month, I made this project with Nextjs and tailwindcss, includes api with Nodejs",
    tags: ["Next.js", "Tailwindcss", "Axios"],
    imageUrl: '/prj4.jpg',
    link: 'https://lux-car.vercel.app/home'
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
  "dayjs",
  "lodash",
  "Redux",
  "SCSS",
  "Vercel",
  "Strapi",
  "Java",
  "Express",
  "Framer Motion",
] as const;
