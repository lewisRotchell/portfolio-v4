import React from "react";
import classes from "./About.module.scss";
import { FaMobileAlt } from "react-icons/fa";
import { AboutCard } from "./AboutCard";

const aboutData = [
  {
    image: "/images/mobile-alt.svg",
    alt: "Mobile phone",
    title: "Responsive Design",
    description:
      "I make your websites responsive so that they look just as good on a PC as they do on a mobile phone.",
  },
  {
    image: "/images/bolt.svg",
    alt: "lightening bolt",
    title: "Top Performance",
    description:
      "Nobody likes waiting a long time for a website to load. I'll make sure that your website is up to speed and ready to go.",
  },
  {
    image: "/images/glasses.svg",
    alt: "glasses",
    title: "Accessibility",
    description:
      "I make sure that my websites follow accessibility guidelines so that they are usuable for everyone.",
  },
  {
    image: "/images/pencil.svg",
    alt: "pencil",
    title: "CMS",
    description:
      "I can hook your website to a content management system so you can edit your own content.",
  },
];

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section id="about" className={`${classes.about} container`}>
      <h2>What I do</h2>

      <div className="bottom-line"></div>

      <div className={classes.cards}>
        {aboutData.map((data, index) => (
          <AboutCard
            key={index}
            image={data.image}
            alt={data.alt}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};
