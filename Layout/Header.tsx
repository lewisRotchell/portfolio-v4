import React, { useState, useEffect, useContext } from "react";
import { Hamburger } from "../components/Hamburger";
import classes from "./Header.module.scss";
import FocusTrap from "focus-trap-react";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeProvider";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [active, setActive] = useState(false);

  const { toggleTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    const main = document.querySelector("main");
    const body = document.querySelector("body");
    if (active) {
      main?.classList.add("active");
      body?.classList.add("stop-scroll");

      main?.addEventListener("click", () => {
        main.classList.remove("active");
        body?.classList.remove("stop-scroll");
        setActive(false);
      });
    } else if (!active && main?.classList.contains("active")) {
      main?.classList.remove("active");
      body?.classList.remove("stop-scroll");
    }
  });

  return (
    <FocusTrap active={active} focusTrapOptions={{ allowOutsideClick: true }}>
      <div>
        <nav className={`${classes.nav} container`}>
          <button
            onClick={() => toggleTheme()}
            className={`${classes.moon} ${
              theme === "light" ? classes.appear : ""
            }`}
          >
            <BsMoon />
          </button>
          <button
            onClick={() => toggleTheme()}
            className={`${classes.sun} ${
              theme === "dark" ? classes.appear : ""
            }`}
          >
            <BsSun />
          </button>
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
      </div>
    </FocusTrap>
  );
};
