import "./index.scss";

import site from "./../../data/json/site.json";

import Service from "../Service";

export default function Services() {

    return (
        <section id="services" className="services">
            <h2>Mes services</h2>
            <p>{site.about.text}</p>
            <div className="myservices contain">
                {
                    site.services.all.map((s,i) =>
                        <Service key={i} serv={s}/>
                    )
                }
            </div>
        </section>
    );
}