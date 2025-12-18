import { shn, PMS, COS } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack  Developer",
    company_name: "Property Management Squad",
    icon: PMS,
    iconBg: "#accbe1",
    date: "November 2018 - January 2022",
    points: [
      " Built a secure document and payment management dashboard using Express.js and MongoDB, cutting payment processing errors by 25% and improving financial workflow efficiency.",
      " Engineered a blockchain-based cryptocurrency payment platform leveraging Ethereum smart contracts (Solidity), MetaMask, and Vite, enabling secure transactions and increasing client acquisition by 10%.",
      " Delivered scalable, accessible front-end interfaces using React, Angular, and Tailwind CSS, reducing UI development cycles by 30% while maintaining WCAG compliance.",
      " Implemented Git-based CI/CD workflows in Agile hybrid teams, achieving 98% successful integrations and enhancing cross-team collaboration.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Corsameccanica Inc",
    icon: COS,
    iconBg: "#fbc3bc",
    date: "June 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a mobile-first routing platform using Google Maps API and Dijkstra’s Algorithm, improving navigation accuracy by 25% and scaling to 10,000+ riders.",
      "Refactored and optimized a legacy e-commerce platform, integrating Stripe API updates to cut checkout time by 20% and increase successful payments by 15%.",
      "Modernized the frontend architecture with Styled Components and React improvements, reducing UI bugs by 30% and accelerating feature delivery cycles.",
      "Collaborated cross-functionally with product and engineering teams in Agile Scrum, maintaining 95% sprint completion and enhancing release efficiency by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Scarborough Health Network",
    icon: shn,
    iconBg: "#b7e4c7",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Engineered reusable React.js and Material-UI component libraries, standardizing front-end architecture and accelerating multi-team development velocity by 35%.",
      "Architected and deployed an internal messaging platform leveraging Node.js microservices and NodeMailer, improving real-time communication performance by 40% across 4,000+ employees.",
      "Optimized SQL query performance and CRUD operations through advanced indexing and query refactoring, achieving 50% faster response times in enterprise-scale applications.",
      "Integrated secure data import pipelines with third-party APIs and external systems, improving accuracy, compliance, and reducing manual errors by 30%.",
      " Partnered with cross-functional teams—product managers, UX designers, and QA engineers—in an Agile Scrum environment, delivering 95% of sprint goals on schedule and ensuring alignment with strategic business objectives.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Vybe",
    description:
      "Vybe is a full-stack e-commerce app built on the MERN stack. It supports product browsing with search and pagination, cart/checkout, order placement with PayPal-style payments, user auth with role-based admin features, and admin dashboards for products/orders/users. The backend serves a REST API with JWT-secured routes, file uploads, and MongoDB persistence; the frontend is a React SPA using Redux Toolkit Query for data fetching and caching..",
    link: "https://vybe-e34x.onrender.com",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Finsage",
    description:
      "insage is a Next.js app that helps retail investors research, track, and optimize their portfolios. It combines a clean UI, real‑time market data, daily news summaries, proactive price alerts, and quantitative portfolio tools (Markowitz MVO, Sharpe, CAPM, and a simplified Black–Litterman model). Note most features that use cron jobs via inngest daily news and or alert ai agent have been disabled as it is free tier and has limits as to how much it can be used.. App will allow user acount creation logout add stocks from trading view portfoilio analysis is disabled. This is an example not a fully fucntional app as the costs do add up.",
    link: "https://github.com/AlexanderMedici/Zentra",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "CoinScape",
    description:
      "Quick overview: CoinScope is a lightweight crypto dashboard built with React 19 + Vite. It pulls data from the CoinGecko API and uses React Router for navigation. The app lists top coins with search, sorting, and page-size controls, and each coin has a detail page with image, description, market stats, official links, and a 7‑day price chart powered by Chart.js + date-fns. Loading states and basic error handling are included, with Vite’s dev proxy handling CoinGecko CORS in local development.",
    link: "https://github.com/AlexanderMedici/coinscope",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Quickoin",
    description:
      "A full-fledged application which allows users to send transactions anywhere in the world, through the blockchain. Each transaction is paired with a GIF & stored forever on the digital ledger.Users can login with their metamask ethereum wallet to Quickkoin. They will then be prompted to fill out a secure form detailing to whom they wish to send crypto to, and the amount they wish to send. The transaction will then be sent over the blockchain. A GIF will be attached to the transaction so that it can be tracked by the sender. Currently the only crypto that can currently be sent is Ethereum. However the receiver can choose if they wish to convert it into their preferred crypto. In which case whatever the exchange value of Ethereum is into the crypto chosen, will be the amount the receiver ends up with.",
    link: "https://github.com/AlexanderMedici/Quickoin",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Mario",
    description:
      "This computer game is a nostalgic throwback of the 1980's classic Mario. The static website integrates server-side rendering to serve pre-built HTML, CSS, and JavaScript files. Mario takes advantage of Kabbomjs built-in library functions which simplify game development for 2D or even 3D game assets. Camera positioning, collisions, movement, and in-game power-ups are all made available in this game and integrate smoothly.",
    link: "https://github.com/AlexanderMedici/Mario.js",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "ProvenPatch",
    description:
      "This is a path finder project which makes use of Dijkstra's algorithm. The project displays a graphed board where predetermined starting (top left box) and ending (bottom right box) nodes are provided. One can use their mouse anywhere on the grid, to block the route between the two nodes. Space which is blocked out on the grid are displayed as buildings. Once the user is satisfied with the areas blocked on the grid, the run algorithm button can be clicked. The pathfinder will then deploy Dijkstra's algorithm. This will quickly find the shortest path between the two given nodes.",
    link: "https://github.com/AlexanderMedici/provenpath",
  },
];
