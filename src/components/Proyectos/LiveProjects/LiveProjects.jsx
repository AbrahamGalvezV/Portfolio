import { SectionHeading } from "../../SectionHeading/SectionHeading"
import { DemoMastermind } from "../DemoMastermind/DemoMastermind"
import styles from "./LiveProjects.module.css"

// const LIVE_PROJECTS = [
//     { id: "mastermind", title: "Mastermind", Component: MastermindDemo },
//     // {id: "pokemon", title: "¿Quién es ese Pokémon?", Component: PokemonDemo };
// ]


export const LiveProjects = () => {

    return (
        <section id="liveProjects" className={styles.section}>

            <SectionHeading
              number="03"
              eyebrow="PRUEBA MIS PROYECTOS"
              title="LiveProjects"
              id="live-projects-title"
            />
            <DemoMastermind />

        </section>
    )
}