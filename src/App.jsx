import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { LiveProjects } from "./components/Proyectos/LiveProjects/LiveProjects";
import { Stack } from "./components/Stack/Stack";

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Stack />
        <Projects />
        <LiveProjects />
      </main>
    </>
  );
}

export default App;
