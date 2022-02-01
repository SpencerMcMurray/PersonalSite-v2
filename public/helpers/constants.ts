import { Link, Experience } from "./interfaces";

export const resumeLink: string = "resume.pdf";

export const links: Array<Link> = [
  {
    id: "link1",
    href: "#about",
    title: "about",
  },
  {
    id: "link2",
    href: "#experience",
    title: "experience",
  },
  {
    id: "link3",
    href: "#projects",
    title: "projects",
  },
  {
    id: "link4",
    href: "#contact",
    title: "contact",
  },
  {
    id: "link5",
    href: "resume.pdf",
    title: "resume",
  },
];

export const experiences: Array<Experience> = [
  {
    start: "Sept. 2020",
    end: "Mar. 2021",
    title: "Software Developer",
    company: {
      name: "TD via UofT",
      link: "https://www.td.com",
    },
    keyLearnings: ["Product Development", "TypeScript", "Team Building"],
  },
  {
    start: "Sept. 2020",
    end: "Dec. 2020",
    title: "Software Developer Intern",
    company: {
      name: "Ceridian - Dayforce",
      link: "https://www.ceridian.com/ca/products/dayforce",
    },
    keyLearnings: ["C#", "JavaScript", "Agile", "Unit Testing"],
  },
  {
    start: "Sept. 2019",
    end: "Dec. 2019",
    title: "Software Developer Intern",
    company: {
      name: "Ceridian - Dayforce",
      link: "https://www.ceridian.com/ca/products/dayforce",
    },
    keyLearnings: ["C#", "JavaScript", "Agile", "Unit Testing"],
  },
  {
    start: "Sept. 2015",
    end: "Jan. 2017",
    title: "Irish Dance Instructor",
    company: {
      name: "Gilchrist-Canavan School of Irish Dance",
      link: "http://gilchrist-canavan.blogspot.com/",
    },
    keyLearnings: ["Teaching Others", "Leadership", "Teamwork"],
  },
];

export const contacts: Array<Link> = [
  {
    id: "contact1",
    href: "https://github.com/SpencerMcMurray",
    title: "fab fa-github",
  },
  {
    id: "contact2",
    href: "https://www.linkedin.com/in/spencer-mcmurray/",
    title: "fab fa-linkedin",
  },
  {
    id: "contact3",
    href: "mailto:spencermcmurray@hotmail.com",
    title: "fas fa-envelope",
  },
  {
    id: "contact4",
    href: "https://www.instagram.com/spencermcmurray/",
    title: "fab fa-instagram",
  },
];
