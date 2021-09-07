import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (active) {
      main?.classList.add("active");
      main?.addEventListener("click", () => {
        main.classList.remove("active");
        setActive(false);
      });
    } else if (!active && main?.classList.contains("active")) {
      main?.classList.remove("active");
    }
  });

  return (
    <>
      <nav className={classes.nav}>
        <button onClick={() => setActive(!active)}>menu</button>
      </nav>

      <aside className={`${classes.aside} ${active ? classes.active : ""}`}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
