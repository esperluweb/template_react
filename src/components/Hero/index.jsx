import "./index.scss";

import site from "./../../data/json/site.json";

export default function Hero() {

  return (
    <section className="hero contain">
        <h1>{site.hero.title}</h1>
        <div>
            <p>{site.hero.text}</p>
            <img src={site.hero.image} alt="Image hero" width="250" />
        </div>
    </section>
    );
  }