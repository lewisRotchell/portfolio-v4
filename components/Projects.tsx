import React from "react";
import { ProjectCard } from "./ProjectCard";
import classes from "./Projects.module.scss";

interface ProjectsProps {}

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

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section id="projects" className={`${classes.projects} container`}>
      <h2>Projects</h2>
      <div className="bottom-line"></div>
      {dummyData.map((data, index) => (
        <ProjectCard
          key={index}
          image={data.image}
          alt={data.alt}
          title={data.title}
          description={data.description}
        />
      ))}
    </section>
  );
};
