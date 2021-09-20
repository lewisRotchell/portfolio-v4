import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { IProject } from "../types";
import { Contact } from "../components/Contact";

interface HomeProps {
  projects: IProject[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector("body");
    body!.className = theme;
  });
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/projects`);
  const projects = await res.json();

  return {
    props: { projects },
  };
}

export default Home;
