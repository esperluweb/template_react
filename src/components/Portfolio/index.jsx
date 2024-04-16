import "./index.scss";

import site from "./../../data/json/site.json";

import Job from "../Job";

export default function Portfolio() {

    return (
        <section id="portfolio" className="portfolio">
            <h2>Mon portfolio</h2>
            <p>{site.portfolio.text}</p>
            <div className="myjobs contain">
                {
                    site.portfolio.all.map((j,i) =>
                        <Job key={i} job={j}/>
                    )
                }
            </div>
        </section>
    );
}