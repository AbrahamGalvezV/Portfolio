import { SectionHeading } from "../../SectionHeading/SectionHeading";
import { DemoDevJobs } from "../DevJobs/DemoDevJobs";
import { DemoMastermind } from "../Mastermind/DemoMastermind";
import { DemoPokemon } from "../Pokemon/DemoPokemon";
import styles from "./LiveProjects.module.css";

const LIVE_PROJECTS = [
  { id: "mastermind", title: "Mastermind", Component: DemoMastermind },
  { id: "pokemon", title: "¿Cuál es este Pokémon?", Component: DemoPokemon },
  { id: "devjobs", title: "DevJobs", Component: DemoDevJobs, wide: true },

];

export const LiveProjects = () => {
  return (
    <section id="liveProjects" className={styles.section}>
      <SectionHeading
        number="03"
        eyebrow="PRUEBA MIS PROYECTOS"
        title="LiveProjects"
        id="live-projects-title"
      />

      <ul className={styles.grid}>
        {LIVE_PROJECTS.map((project) => (
          <li key={project.id} className={`${styles.item} ${project.wide ? styles.wide : ""}`}>
            <project.Component />
          </li>
        ))}
      </ul>
    </section>
  );
};
