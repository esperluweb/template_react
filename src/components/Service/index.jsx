import "./index.scss";

import PropTypes from 'prop-types';

export default function Service({serv}) {

    console.log(serv);
    return (
        <article className="service">
            <i className={serv.fa+" icon"}></i>
            <h3>{serv.name}</h3>
            <p>{serv.desc}</p>
            <h4>Quelques outils</h4>
            <div className="tools">
                {
                    serv.tools.map((t,i) => {
                        return <span key={i}>{t}</span>
                    })
                }
            </div>
        </article>
    );
}

Service.propTypes = {
    serv: PropTypes.any,
}