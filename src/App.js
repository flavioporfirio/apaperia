import "./App.css";
import { About } from "./components/About";
import { AdvantagesList } from "./components/AdvantagesList";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HighlightsList } from "./components/HighlightsList";
import { Institucional } from "./components/Institucional";
import { IntroPlans } from "./components/IntroPlans";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Plans } from "./components/Plans";

export default function App() {
  return (
    <div className="app">
      <div id="header">
        <div className="nav">
          <Logo />
          <Nav />
        </div>
        <IntroPlans />
      </div>
      <HighlightsList />
      <AdvantagesList />
      <About />
      <Plans />
      <Contact />
      <Institucional />
      <Footer />
    </div>
  );
}
