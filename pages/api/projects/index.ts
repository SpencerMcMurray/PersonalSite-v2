import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { Project } from "../../../public/helpers/interfaces";

const endpoints = {
  repos: "https://api.github.com/users/spencermcmurray/repos",
  langs: (name: string) =>
    `https://api.github.com/repos/SpencerMcMurray/${name}/languages`,
};

const get = async (endpoint: string) => {
  return axios
    .get(endpoint, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GH_AUTH}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      //console.log(e);
      return [];
    });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const repos = await get(endpoints.repos);
  const allLangs = new Set();

  const projects: Array<Project> = [];
  for (let i = 0; i < repos.length; i++) {
    projects.push(
      await get(endpoints.langs(repos[i].name)).then((data) => {
        const langs = Object.keys(data);
        langs.forEach((lang: string) => allLangs.add(lang));
        return {
          id: repos[i].id,
          name: repos[i].name,
          desc: repos[i].description || "",
          stars: repos[i].stargazers_count,
          forks: repos[i].forks_count,
          langs,
        };
      })
    );
  }
  res.status(200).json({ projects, langs: Array.from(allLangs) });
};