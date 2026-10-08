import { useLayoutEffect, useRef, useState } from "react";
import guess_pokemon from "../../assets/img/guess_pokemon.png";
import devJobs from "../../assets/img/DevJobs.png";
import mastermain from "../../assets/img/Mastermain.png";
import skateSchool from "../../assets/img/Scate_School.png";
import tattooStudio from "../../assets/img/Tattoo_Studio.png";
import { Card } from "../Card/Card";
import styles from "./Projects.module.css";

const projects = [
    {
        id: 1,
        title: "DevJobs",
        image: devJobs,
        description:
            "Aplicación web para buscar y gestionar ofertas de empleo tecnológico.",
        longDescription:
            "Proyecto desarrollado durante mi formación como Full Stack Developer y posteriormente revisado y mejorado con los conocimientos adquiridos. Permite buscar ofertas, aplicar filtros, consultar detalles y gestionar favoritos desde una interfaz responsive.",
        stack:
            "React, JavaScript, Vite, CSS Modules, React Router, Zustand",
        features: [
            "Búsqueda y filtrado de ofertas",
            "Paginación",
            "Ofertas favoritas",
            "Autenticación simulada",
            "Rutas protegidas",
            "Carga diferida de páginas",
            "Diseño responsive"
        ],
        resources: "JSCamp API",
        type: "Frontend"
    },
    {
        id: 2,
        title: "Pokémon Guesser",
        image: guess_pokemon,
        description:
            "Juego interactivo para poner a prueba cuánto sabes sobre Pokémon.",
        longDescription:
            "Proyecto creado para poner en práctica lo aprendido durante mi evolución como desarrollador frontend. El jugador debe identificar Pokémon a partir de sus siluetas mientras gestiona sus vidas y puede avanzar o saltar preguntas.",
        stack:
            "React 19, TypeScript, Vite, CSS Modules",
        features: [
            "Selección por generación",
            "Sistema de vidas",
            "Siluetas de Pokémon",
            "Sistema de puntuación",
            "Pantalla de Game Over",
            "Diseño responsive",
            "Gestión del juego mediante Custom Hook"
        ],
        resources: "PokeAPI",
        type: "Frontend"
    },
    {
        id: 3,
        title: "Skate School",
        image: skateSchool,
        description:
            "Aplicación web para la gestión de una escuela de skate.",
        longDescription:
            "Proyecto Full Stack desarrollado para trabajar con una aplicación real conectada a una API REST. El frontend permite autenticarse, gestionar el perfil, consultar usuarios y trabajar con diferentes roles dentro de la aplicación.",
        stack:
            "React, JavaScript, CSS, REST API, Node.js, Express, TypeScript, MySQL",
        features: [
            "Registro e inicio de sesión",
            "Gestión de perfiles",
            "Sistema de roles",
            "Gestión de citas",
            "Edición de usuarios",
            "Personalización visual por usuario",
            "Comunicación con API REST"
        ],
        resources: "API REST propia",
        type: "Full Stack"
    },
    {
        id: 4,
        title: "Tattoo Studio",
        image: tattooStudio,
        description:
            "Sitio web para un estudio de tatuajes centrado en una experiencia visual.",
        longDescription:
            "Proyecto orientado a la creación de una interfaz visual para un estudio de tatuajes, trabajando la presentación del contenido, la composición visual y la adaptación de la interfaz a diferentes tamaños de pantalla.",
        stack:
            "HTML, CSS, JavaScript",
        features: [
            "Diseño visual",
            "Presentación de trabajos",
            "Estructura responsive",
            "Interfaz orientada al usuario"
        ],
        resources: "Recursos propios",
        type: "Frontend"
    },
    {
        id: 5,
        title: "Mastermind",
        image: mastermain,
        description:
            "Juego web basado en el clásico Mastermind.",
        longDescription:
            "Proyecto desarrollado para trabajar la lógica de programación mediante un juego interactivo. El jugador debe descubrir una combinación de colores generada aleatoriamente utilizando diferentes niveles de dificultad.",
        stack:
            "HTML, CSS, JavaScript",
        features: [
            "Combinaciones aleatorias",
            "Tres niveles de dificultad",
            "Sistema de comprobación",
            "Seis colores disponibles",
            "Pantalla de victoria",
            "Sistema de login",
            "Múltiples páginas"
        ],
        resources: "JavaScript",
        type: "Frontend"
    }
];

export const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);
    const cardRefs = useRef(new Map());
    const previousPositions = useRef(new Map());

    const handleExpanded = (id) => {
        setExpandedId((current) =>
            current === id ? null : id
        );
    };

    useLayoutEffect(() => {
        const currentPositions = new Map();

        cardRefs.current.forEach((element, id) => {
            if (element) {
                currentPositions.set(
                    id,
                    element.getBoundingClientRect()
                );
            }
        });

        cardRefs.current.forEach((element, id) => {
            if (!element) return;

            const previous = previousPositions.current.get(id);
            const current = currentPositions.get(id);

            if (!previous || !current) return;

            const deltaX =
                previous.left - current.left;

            const deltaY =
                previous.top - current.top;

            const scaleX =
                previous.width / current.width;

            const scaleY =
                previous.height / current.height;

            const hasChanged =
                deltaX !== 0 ||
                deltaY !== 0 ||
                scaleX !== 1 ||
                scaleY !== 1;

            if (!hasChanged) return;

            element
                .getAnimations()
                .forEach((animation) => animation.cancel());

            element.animate(
                [
                    {
                        transform:
                            `translate(${deltaX}px, ${deltaY}px) ` +
                            `scale(${scaleX}, ${scaleY})`
                    },
                    {
                        transform:
                            "translate(0, 0) scale(1, 1)"
                    }
                ],
                {
                    duration: 650,
                    easing:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    fill: "both"
                }
            );
        });

        previousPositions.current = currentPositions;
    }, [expandedId]);

    return (
        <section className={styles.grid}>
            {projects.map((project, index) => (
                <Card
                    key={project.id}
                    project={project}
                    isExpanded={
                        expandedId === project.id
                    }
                    expandedRow={
                        Math.floor(index / 2) + 1
                    }
                    onExpanded={() =>
                        handleExpanded(project.id)
                    }
                    cardRef={(element) => {
                        if (element) {
                            cardRefs.current.set(
                                project.id,
                                element
                            );
                        } else {
                            cardRefs.current.delete(
                                project.id
                            );
                        }
                    }}
                />
            ))}
        </section>
    );
};