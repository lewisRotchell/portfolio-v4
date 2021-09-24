import React from "react";
import { Button } from "./Button";
import classes from "./ProjectCard.module.scss";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  alt,
  title,
  description,
}) => {
  return (
    <article className={classes.projectCard}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt={alt} />
      </div>
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.text}>{description}</p>
        <div className={classes.buttons}>
          <Button style={classes.buttonA}>View Project</Button>
          <Button>View Code</Button>
        </div>
      </div>
    </article>
  );
};
