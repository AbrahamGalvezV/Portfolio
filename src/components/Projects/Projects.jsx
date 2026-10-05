import { useLayoutEffect, useRef, useState } from "react";
import guess_pokemon from "../../assets/img/guess_pokemon.png";
import { Card } from "../Card/Card"
import styles from "./Projects.module.css"

 const projects = [
    {
        id: 1,
        title: "Guess Pokemon",
        image: guess_pokemon,
        description:
          "Juego web desarrollado con React y TypeScript en el que el jugador debe identificar el nombre del Pokémon mostrado en pantalla antes de quedarse sin vidas.",
        stack: "React 19, TypeScript, Vite, HTML y CSS Modules",
        resources: "PokeAPI"
    },
    {
        id: 2,
        title: "Guess Pokemon",
        image: guess_pokemon,
        description:
          "Juego web desarrollado con React y TypeScript en el que el jugador debe identificar el nombre del Pokémon mostrado en pantalla antes de quedarse sin vidas.",
        stack: "React 19, TypeScript, Vite, HTML y CSS Modules",
        resources: "PokeAPI"
    },
    {
        id: 3,
        title: "Guess Pokemon",
        image: guess_pokemon,
        description:
          "Juego web desarrollado con React y TypeScript en el que el jugador debe identificar el nombre del Pokémon mostrado en pantalla antes de quedarse sin vidas.",
        stack: "React 19, TypeScript, Vite, HTML y CSS Modules",
        resources: "PokeAPI"
    },
    {
        id: 4,
        title: "Guess Pokemon",
        image: guess_pokemon,
        description:
          "Juego web desarrollado con React y TypeScript en el que el jugador debe identificar el nombre del Pokémon mostrado en pantalla antes de quedarse sin vidas.",
        stack: "React 19, TypeScript, Vite, HTML y CSS Modules",
        resources: "PokeAPI"
    },
]

export const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const cardRefs = useRef(new Map());
  const previousPositions = useRef(new Map());

  const handleExpanded = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  useLayoutEffect(() => {
    const currentPositions = new Map();

    cardRefs.current.forEach((element, id) => {
      if (element) {
        currentPositions.set(id, element.getBoundingClientRect());
      }
    });

    cardRefs.current.forEach((element, id) => {
      if (!element) return;

      const previous = previousPositions.current.get(id);
      const current = currentPositions.get(id);

      if (!previous || !current) return;

      const deltaX = previous.left - current.left;
      const deltaY = previous.top - current.top;
      const scaleX = previous.width / current.width;
      const scaleY = previous.height / current.height;

      if (
        deltaX !== 0 ||
        deltaY !== 0 ||
        scaleX !== 1 ||
        scaleY !== 1
      ) {
        element.animate(
          [
            {
              transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`
            },
            {
              transform: "translate(0, 0) scale(1, 1)"
            }
          ],
          {
            duration: 550,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)"
          }
        );
      }
    });

    previousPositions.current = currentPositions;
  }, [expandedId]);

  return (
    <section className={styles.grid}>
      {projects.map((project) => (
        <Card
          key={project.id}
          project={project}
          isExpanded={expandedId === project.id}
          onExpanded={() => handleExpanded(project.id)}
          cardRef={(element) => {
            if (element) {
              cardRefs.current.set(project.id, element);
            } else {
              cardRefs.current.delete(project.id);
            }
          }}
        />
      ))}
    </section>
  );
};