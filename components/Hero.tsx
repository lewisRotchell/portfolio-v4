import React from "react";
import classes from "./Hero.module.scss";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={`${classes.hero} container`}>
      <h1>My portfoilo</h1>
      <p>Welcome to my portfolio page</p>
    </section>
  );
};
