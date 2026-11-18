import { useState } from "react";
import { flushSync } from "react-dom";
import guess_pokemon from "../../assets/img/guess_pokemon.png";
import devJobs from "../../assets/img/DevJobs.png";
import mastermain from "../../assets/img/Mastermain.png";
import skateSchool from "../../assets/img/Scate_School.png";
import tattooStudio from "../../assets/img/Tattoo_Studio.png";
import { Card } from "../Card/Card";
import styles from "./Projects.module.css";
import "./cardTransitions.css";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const projects = [
  {
    id: 1,
    title: "DevJobs",
    image: devJobs,
    description:
      "Buscador de empleo tecnológico con filtros, favoritos y rutas protegidas.",
    longDescription:
      "SPA en React que consume la API de JSCamp para buscar ofertas por tecnología, modalidad y nivel. Incluye detalle de cada puesto, favoritos con Zustand, login y registro simulados, rutas protegidas con React Router y carga diferida de páginas. Nació en el curso de midudev y lo he refactorizado aplicando buenas prácticas.",
    technologies: ["react", "javascript", "vite", "reactRouter", "zustand", "css"],
    features: [
      "Filtros combinados",
      "Paginación",
      "Favoritos",
      "Rutas protegidas",
      "Lazy loading",
      "Estados de carga y error",
    ],
    github: "https://github.com/AbrahamGalvezV/DevJobs",
    demo: "https://abrahamgalvezv.github.io/DevJobs/",
    type: "Frontend",
  },
  {
    id: 2,
    title: "Pokémon Guesser",
    image: guess_pokemon,
    description:
      "Juego de adivinar Pokémon por su silueta con datos en tiempo real de PokéAPI.",
    longDescription:
      "Juego con estética de Pokédex futurista hecho con React 19 y TypeScript. Elige una generación (de Kanto a Paldea), adivina el Pokémon oculto tras su silueta y gestiona tus tres vidas. Toda la lógica de la partida vive en un custom hook tipado y al terminar se muestran las estadísticas de aciertos, fallos y saltos.",
    technologies: ["react", "typescript", "vite", "css"],
    features: [
      "9 generaciones",
      "Sistema de vidas",
      "Estadísticas de partida",
      "Custom hook",
      "PokéAPI",
      "Responsive",
    ],
    github: "https://github.com/AbrahamGalvezV/Pokemon_Guesser",
    demo: "https://abrahamgalvezv.github.io/Pokemon_Guesser/",
    type: "Frontend",
  },
  {
    id: 3,
    title: "Skate School",
    image: skateSchool,
    description:
      "Gestión de citas para una escuela de skate con roles y personalización visual.",
    longDescription:
      "Aplicación Full Stack con frontend en React + Redux y una API REST propia en Node.js, Express, TypeScript y TypeORM sobre MySQL. Cada rol (admin, profesor y cliente) tiene sus propios permisos para gestionar usuarios y citas, y cada usuario puede cambiar el fondo y los colores de la interfaz solo para su cuenta.",
    technologies: [
      "react",
      "redux",
      "javascript",
      "bootstrap",
      "node",
      "express",
      "typescript",
      "typeorm",
      "mysql",
    ],
    features: [
      "Autenticación JWT",
      "Roles y permisos",
      "Validación de citas",
      "Temas por usuario",
      "API REST propia",
    ],
    github: "https://github.com/AbrahamGalvezV/Skate_School_Frontend",
    demo: "https://abrahamgalvezv.github.io/Skate_School_Frontend/",
    type: "Full Stack",
  },
  {
    id: 4,
    title: "Tattoo Studio",
    image: tattooStudio,
    description:
      "Web y API de reservas para un estudio de tatuajes con estética neón.",
    longDescription:
      "Proyecto Full Stack del bootcamp de GeeksHubs Academy. El frontend en React + Redux presenta el estudio y a sus artistas con efectos neón, y se conecta a una API REST en Node.js, Express y TypeORM con MySQL para registrarse, iniciar sesión y gestionar citas de tatuaje, piercing o eliminación según el rol.",
    technologies: [
      "react",
      "redux",
      "javascript",
      "bootstrap",
      "node",
      "express",
      "typescript",
      "typeorm",
      "mysql",
    ],
    features: [
      "Registro y login",
      "Roles: admin, artista y cliente",
      "Gestión de citas",
      "Páginas de artistas",
      "API REST propia",
    ],
    github: "https://github.com/AbrahamGalvezV/Tattoo_Studio_Front",
    demo: "https://abrahamgalvezv.github.io/TATTOO_STUDIO_FRONT/",
    type: "Full Stack",
  },
  {
    id: 5,
    title: "Mastermind",
    image: mastermain,
    description:
      "El clásico juego de lógica para descifrar códigos, en JavaScript puro.",
    longDescription:
      "Aplicación multipágina sin frameworks en la que hay que descubrir una combinación de colores generada aleatoriamente. Tiene registro de jugador, tres niveles de dificultad (4, 5 o 6 casillas), pistas de color y posición en cada intento y pantalla de victoria. Un ejercicio centrado en la lógica y la manipulación del DOM.",
    technologies: ["html", "css", "javascript"],
    features: [
      "Tres niveles",
      "Combinación aleatoria",
      "Pistas por intento",
      "Pantalla de victoria",
      "Multipágina",
    ],
    github: "https://github.com/AbrahamGalvezV/Mastermind",
    demo: "https://abrahamgalvezv.github.io/Mastermind/",
    type: "Frontend",
  },
];

export const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [transitioning, setTransitioning] = useState({
    expanding: null,
    collapsing: null,
  });

  const handleExpanded = (id) => {
    const nextId = expandedId === id ? null : id;
    const update = () => setExpandedId(nextId);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || reducedMotion) {
      update();
      return;
    }

    // Nombres fijos para las tarjetas que cambian de tamaño, así el CSS
    // puede animarlas recortando en lugar de escalando el contenido.
    flushSync(() =>
      setTransitioning({ expanding: nextId, collapsing: expandedId }),
    );

    document.startViewTransition(() => flushSync(update));
  };

  const getTransitionName = (id) => {
    if (id === transitioning.expanding) return "card-expanding";
    if (id === transitioning.collapsing) return "card-collapsing";
    return `card-${id}`;
  };

  return (
    <section id="proyectos" className={styles.section}>
      <SectionHeading
        id="projects-heading"
        number="02"
        eyebrow="Proyectos"
        title="Trabajo seleccionado"
      />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            expandedRow={Math.floor(index / 2) + 1}
            onExpanded={() => handleExpanded(project.id)}
            transitionName={getTransitionName(project.id)}
          />
        ))}
      </div>
    </section>
  );
};
