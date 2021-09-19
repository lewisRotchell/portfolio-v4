import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export default function Home() {
  // const styles = getStyles(mode);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const body = document.querySelector("body");
    body!.className = theme;
  });
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
