import React, { useState, useEffect, useContext } from "react";
import { Hamburger } from "../components/Hamburger";
import { ThemeContext } from "../context/ThemeProvider";
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
      <nav className={`${classes.nav} container`}>
        {/* <button onClick={() => setActive(!active)}>menu</button> */}
        <Hamburger active={active} setActive={setActive} />
      </nav>

      <aside className={`${classes.aside} ${active ? classes.active : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
