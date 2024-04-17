import "./index.scss";

import site from "./../../data/json/site.json";

export default function Hero() {

  return (
    <section className="hero contain">
      <div className="twocol">
        <div className="col">
          <h1>{site.hero.title}</h1>
          <h2>{site.hero.subtitle}</h2>
        </div>
        <div className="col">
            <img src={site.hero.image} alt="Image hero" width="250" />
        </div>
      </div>
    </section>
    );
  }