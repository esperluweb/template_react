import "./index.scss";

import site from "./../../data/json/site.json";

import { Link } from "react-router-dom";

export default function Social() {

  return (
      <ul className="social">
        <li><Link to={site.social.facebook}><i className="fa-brands fa-facebook-f"></i></Link></li>
        <li><Link to={site.social.instagram}><i className="fa-brands fa-instagram"></i></Link></li>
        <li><Link to={site.social.linkedin}><i className="fa-brands fa-linkedin"></i></Link></li>
      </ul>
    );
  }