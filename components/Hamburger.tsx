import React from "react";
import classes from "./Hamburger.module.scss";

interface HamburgerProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hamburger: React.FC<HamburgerProps> = ({ setActive, active }) => {
  return (
    <button
      onClick={() => setActive(!active)}
      className={`${classes.hamburger} ${active ? classes.closeMenu : ""}`}
    >
      <div
        className={`${classes.firstLine} ${active ? classes.closeMenu : ""}`}
      ></div>
      <div
        className={`${classes.middleLine} ${active ? classes.closeMenu : ""}`}
      ></div>
      <div
        className={`${classes.lastLine} ${active ? classes.closeMenu : ""}`}
      ></div>
    </button>
  );
};
