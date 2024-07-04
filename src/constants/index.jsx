import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  Farmermotion,
  Gsap1,
  Websocket,
  api,
  Molog,
  nwg,
  freelancer,
  womendashboard,
  royalproperty,
  Bankless1
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Design",
    icon: figma,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "API's",
    icon: api,
  },
  // {
  //   name: "WebSocket",
  //   icon: Websocket,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "FamerMotion",
  //   icon: Farmermotion,
  // },
  {
    name: "Gsap",
    icon: Gsap1,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Molog",
    icon: Molog,
    iconBg: "#E6DEDf",
    date: "May 2023 ‑ May 2024 · 1 Year | In‑office",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrated third-party APIs and WebSocket to enhance the app's functionality and user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Mentored junior developers and conducted regular code review sessions.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "NextWebGuru",
    icon: nwg,
    iconBg: "#E6DEDD",
    date: "April 2023 | 45-days Internship",
    points: [
      "Completed a 45-day internship at NWG, developing a robust e-commerce website",
      "Leveraged Next.js for efficient server-side rendering and dynamic routing.",
      "Designed a responsive interface with Bootstrap, ensuring seamless cross-device compatibility.",
      "Acquired practical experience in contemporary web development techniques and tools",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Shopify",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jan 2023 ",
    points: [
      "Developed websites using React JS, Tailwind CSS, HTML, CSS, JavaScript, WordPress, Firebase, and MySQL.",
      "Created dynamic and interactive web applications with React JS.",
      "Styled applications efficiently using Tailwind CSS for responsive design.",
      "Built and managed content-driven websites with WordPress.",
      "Integrated Firebase for backend services like authentication and real-time databases, Managed and queried databases using MySQL.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Women Safety System",
    description:
      "Developed an automated web and mobile app that detects potential danger and sends an SOS signal to the nearest police station dashboard. Data includes live location, front and back camera images, 30‑second audio recording, device speed, battery status, and date/time of activation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
    ],
    image: womendashboard,
    source_code_link: "https://github.com/Arshadansa/KAVACH-FINAL",
  },
  {
    name: "Royal Properties",
    description:
      "To facilitate users in finding properties for buying, renting, PG/coliving accommodations, commercial purposes, and plots/land based on location searches. Providing a dashboard for logged-in users to manage their saved searches, send enquiry, call etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
    ],
    image: royalproperty,
    source_code_link: "https://github.com/Arshadansa/Royal_Properties",
  },
  {
    name: "Bankless",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Bankless1,
    source_code_link: "https://github.com/Arshadansa/Claimable.git",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  Farmermotion,
};
