import { Link } from "react-router-dom";

import "./index.scss";

import PropTypes from 'prop-types';

export default function Job({job}) {

    return (
        <article className="job">
            <h3>{job.name}</h3>
            <img src={job.img} alt={"Illustration " + job.name } />
            <Link to={job.url} target="_blank">Voir le site</Link>
        </article>
    );
}

Job.propTypes = {
    job: PropTypes.any,
}