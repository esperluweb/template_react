import "./index.scss";

export default function Service({serv}) {

    console.log(serv);
    return (
        <article className="service">
            <i className={serv.fa}></i>
            <h3>{serv.name}</h3>
            <p>{serv.desc}</p>
            <h4>Quelques outils</h4>
            {
                serv.tools.map((t,i) => {
                    return <span key={i}>{t}</span>
                })
            }
        </article>
    );
}