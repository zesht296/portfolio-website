import React from "react";
import LatestProjects from "./components/LatestProjects";
import Pricing from "./components/Pricing";
import Header from "./components/Header";
import Services from "./components/Services";
import Testmonials from "./components/Testmonials";
import ProjectsStatus from "./components/ProjectsStatus";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Services />
      <LatestProjects />
      <Pricing />
      <Testmonials />
      <ProjectsStatus />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
