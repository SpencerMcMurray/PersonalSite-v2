import { Link, Experience } from "./interfaces";

export const resumeLink: string = "resume.pdf";

export const links: Array<Link> = [
  {
    id: 1,
    href: "#about",
    title: "about",
  },
  {
    id: 2,
    href: "#experience",
    title: "experience",
  },
  {
    id: 3,
    href: "#projects",
    title: "projects",
  },
  {
    id: 4,
    href: "#contact",
    title: "contact",
  },
  {
    id: 5,
    href: "resume.pdf",
    title: "resume",
  },
];

export const experiences: Array<Experience> = [
  {
    start: "Sept. 2015",
    end: "Jan. 2017",
    title: "Irish Dance Teacher",
    company: {
      name: "Gilchrist-Canavan School of Irish Dance",
      link: "http://gilchrist-canavan.blogspot.com/",
    },
    keyLearnings: ["Teaching Others", "Leadership", "Teamwork"],
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
];
