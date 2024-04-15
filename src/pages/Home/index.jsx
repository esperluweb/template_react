import "./index.scss";

import Hero from "./../../components/Hero";
import About from "./../../components/About";
import Services from "./../../components/Services";

// import site from "./../../data/json/site.json";

export default function Home() {

  return (
        <>
            <Hero/>
            <About/>
            <Services/>
        </>
    );
  }