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
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt={alt} />
      </div>

      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.text}>{description}</p>
      </div>
    </article>
  );
};
