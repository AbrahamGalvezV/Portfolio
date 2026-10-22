import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Stack } from "./components/Stack/Stack";

function App() {

  return (
    <main id="inicio" className="container">
      <Header />
      <Hero/>
      <Stack />
      <Projects />
    </main>
  );
}

export default App;
