import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Hero } from "../components/Hero";

export default function Home() {
  // const styles = getStyles(mode);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const body = document.querySelector("body");
    console.log(theme);
    body!.className = theme;
  });
  return (
    <main>
      <Hero />
    </main>
  );
}
