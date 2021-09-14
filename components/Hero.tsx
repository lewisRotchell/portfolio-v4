import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import classes from "./Hero.module.scss";
import { Button } from "./Button";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <section className={`${classes.hero} container`}>
      <img
        className={classes.heroImg}
        src="/images/hero-img.svg"
        alt="man waving"
      />
      <div className={classes.heroDetails}>
        <h1 className={classes.title}>Hi, I'm Lewis</h1>
        <p className={classes.lead}>
          I'm a Sheffield (UK) based{" "}
          <span className={classes.leadEmphasis}>web developer </span>
          specialising in building{" "}
          <span className={classes.leadEmphasis}>fast</span>,{" "}
          <span className={classes.leadEmphasis}>secure</span> and
          <span className={classes.leadEmphasis}> responsive</span> websites.
        </p>
        <Button style={classes.buttonA}>View Projects</Button>
        <Button>Contact Me</Button>
      </div>
    </section>
  );
};
