// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import mcLogo from "./assets/tech_logo/mc.png";

import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import renderLogo from "./assets/tech_logo/render.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import luminariesLogo from "./assets/company_logo/luminaries.png";
import gssocLogo from "./assets/company_logo/gssoc.png";

// Education Section Logo's
import hnbguLogo from "./assets/education_logo/hnbgu.png";
import RBCV from "./assets/education_logo/RBCV.png";

// Project Section Logo's
import blogApp from "./assets/work_logo/blogApp.png";
import uberClone from "./assets/work_logo/uberClone.png";
import jobPortal from "./assets/work_logo/jobPortal.png";
import ecommerceApi from "./assets/work_logo/ecommerceApi.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: luminariesLogo, // (replace with actual logo or placeholder)
    role: "Backend Developer",
    company: "Luminaries",
    date: "March 2025 – May 2025",
    desc: "Built and integrated a backend system for managing student and teacher data, along with a daily fee tracking module. Developed secure admin login, automated fee receipt emails, and managed pending fee logic. Collaborated with a 3-member team, focusing on backend development and seamless API integration with the React frontend.",
    skills: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "JavaScript",
      "React JS",
      "Nodemailer",
      "REST API",
      "Git",
      "GitHub",
      "Postman",
      "Team Collaboration",
    ],
  },
  {
    id: 2,
    img: gssocLogo, // replace with actual GirlScript Summer of Code logo
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "Oct 2024 – Nov 2024",
    desc: "Participated in GirlScript Summer of Code 2024 as a beginner contributor. While I wasn’t able to raise or resolve any issues, I spent time exploring open-source codebases, understanding project structures, and learning how to use tools like GitHub and Postman effectively. This experience helped me build confidence in reading unfamiliar code and understanding how real-world projects are structured and maintained.",
    skills: [
      "GitHub",
      "Open Source Exposure",
      "Postman",
      "Codebase Navigation",
      "Issue Exploration",

      "Git Basics",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: hnbguLogo,
    school: "HNB Garhwal University, Srinagar",
    date: "Nov 2022 - May 2026",
    grade: "7.3 CGPA",
    desc: "I am pursuing my Bachelor's degree (B.Tech) in Information Technology from HNB Garhwal University, Srinagar. During this time at HNB, I gained a strong foundation in programming, software development, and Information technology principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at HNB Garhwal University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech",
  },

  {
    id: 1,
    img: RBCV,
    school: "R.B. Children's Valley School Belthra Road Ballia",
    date: "Apr 2021 - March 2022",
    grade: "85.6%",
    desc: "I completed my class 12 education from R.B. Children's Valley School, Belthra Road Ballia, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Practice.",
    degree: "CBSE(XII) - PCM with Information Technology",
  },
  {
    id: 2,
    img: RBCV,
    school: "R.B. Children's Valley School Belthra Road Ballia",
    date: "Apr 2019 - March 2020",
    grade: "91.8%",
    desc: "I completed my class 10 education from R.B. Children's Valley School, Belthra Road Ballia, under the CBSE board, where I studied Science with Information Technology.",
    degree: "CBSE(X), Science with Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Job Portal",
    description:
      "A dynamic Job Portal application built with React.js and Node.js, enabling job seekers to search and apply for jobs, and employers to post and manage job listings. The application features role-based authentication, real-time job listings, and a responsive UI. It integrates with external APIs and supports resume uploads, providing a seamless experience for both recruiters and applicants.",
    image: jobPortal,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
    ],
    github: "https://github.com/rebel1321/JobPortalFullStack",
    webapp: "https://jobportalfrontend-ivory.vercel.app/",
  },

  {
    id: 1,
    title: "Live Ride Booking App (Uber Clone)",
    description:
      "A full-stack real-time ride-booking platform inspired by Uber, featuring live location tracking using Leaflet and route calculation via Ola Maps API. Users can book rides, track drivers on the map in real-time, and view route details. The system includes separate dashboards for riders and drivers, secure role-based authentication, and an intuitive interface for a smooth ride-booking experience.",
    image: uberClone,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Leaflet",
      "Ola Maps API",
      "Socket.IO",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/rebel1321/Uber",
    webapp: "https://uber-sepia-five.vercel.app/",
  },
  {
    id: 2,
    title: "Full-Stack Blog App (with Appwrite)",
    description:
      "A sleek and modern blog platform built with React.js and Appwrite. It features user authentication, post creation, and secure image upload using Appwrite's storage. Users can sign up, log in, write rich blog posts, and manage their content with a clean dashboard interface. The app also includes protected routes and image previews via Appwrite's file services.",
    image: blogApp,
    tags: [
      "React JS",
      "Appwrite",
      "HTML",
      "CSS",
      "JavaScript",
      "Authentication",
    ],
    github: "https://github.com/rebel1321/BlogSite",
    webapp: "https://blog-site-self-two.vercel.app/",
  },
  {
  id: 4,
  title: "E-Commerce REST API (Spring Boot)",
  description:
    "A secure and scalable E-Commerce backend API built with Spring Boot and Java. It provides RESTful endpoints for product management, user registration/login, cart and order handling, and role-based access control for admins and customers. Integrated with MySQL for data persistence and supports pagination, filtering, and JWT-based authentication for secure access.",
  image: ecommerceApi, // Use a suitable image or placeholder
  tags: [
    "Java",
    "Spring Boot",
    "MySQL",
    "REST API",
    "Spring Security",
    "JWT",
    "Backend"
  ],
  github: "https://github.com/rebel1321/EcommerceAPI-SpringBoot", // <-- your actual repo URL
  webapp: "https://documenter.getpostman.com/view/37609437/2sB34kDyFz#415c7fcf-945d-41f5-8470-e30641602696"
}

];
