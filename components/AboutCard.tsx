import React from "react";
import classes from "./AboutCard.module.scss";

interface AboutCardProps {
  image: any;
  title: string;
  description: string;
  alt: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  image,
  title,
  description,
  alt,
}) => {
  return (
    <article className={classes.card}>
      <img className={classes.image} src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
