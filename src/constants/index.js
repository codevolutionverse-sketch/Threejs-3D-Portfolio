import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  helloholo,
  threejs,
  dnata,
  singpass,
  dbs,
  ocbc,
  fronthausEventApp,
  resico,
  yingxiang,
  shelen,
} from "../assets";

export const navLinks = [];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Mobile Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Cloud Computing", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: ``,
    company_name: `Freelance Client Project`,
    icon: creator,
    iconBg: "#383E56",
    date: "Present",
    points: [
      `Strategic thinker with 5+ years in niche market growth`,
      `Proven track record of boosting revenue by 30% through innovative solutions`,
      `Expert at differentiating brands in crowded spaces`,
    ],
  },
];

const testimonials = [
  {
    testimonial: `Excellent work, delivered on time and exceeded expectations.`,
    name: `Happy Client`,
    designation: `Client`,
    company: ``,
    image: yingxiang,
  },
];

const projects = [
  {
    name: ``,
    description: ``,
    tags: [
      { name: `Analytics`, color: "blue-text-gradient" },
      { name: `Growth`, color: "green-text-gradient" },
      { name: `Leadership`, color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: ``,
  },
  {
    name: ``,
    description: ``,
    tags: [
      { name: `Design`, color: "blue-text-gradient" },
      { name: `Optimization`, color: "green-text-gradient" },
      { name: `Strategy`, color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: ``,
  },
];

export { services, technologies, experiences, testimonials, projects };
