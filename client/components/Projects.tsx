import React from "react";
import { ProjectCard } from "./ProjectCard";
import { IProject } from "../types/index";

import classes from "./Projects.module.scss";

interface ProjectsProps {
  projects: IProject[];
}

const dummyData = [
  {
    title: "p1",
    alt: "dsdsdd",
    image: "https://via.placeholder.com/150",
    description: "lorem dkfdf dfjdfjdf dljfdfjkdf djkfkdjf djfdkjf dkjfkd",
  },
  {
    title: "p2",
    alt: "dsdsdd",
    image: "https://via.placeholder.com/150",
    description: "lorem dkfdf dfjdfjdf dljfdfjkdf djkfkdjf djfdkjf dkjfkd",
  },
  {
    title: "p3",
    alt: "dsdsdd",
    image: "https://via.placeholder.com/150",
    description: "lorem dkfdf dfjdfjdf dljfdfjkdf djkfkdjf djfdkjf dkjfkd",
  },
];

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  console.log(projects);
  return (
    <section id="projects" className={`${classes.projects} container`}>
      <h2>Projects</h2>
      <div className="bottom-line"></div>
      {projects.map((data) => (
        <ProjectCard
          key={data.id}
          image={data.image.url}
          alt={data.title}
          title={data.title}
          description={data.description}
        />
      ))}
    </section>
  );
};
