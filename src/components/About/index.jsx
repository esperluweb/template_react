import "./index.scss";

import site from "./../../data/json/site.json";

import Social from "../Social";

export default function About() {

  return (
    <section className="about">
        <h2>À propos</h2>
        <p>{site.about.text}</p>
        <Social/>
    </section>
    );
  }