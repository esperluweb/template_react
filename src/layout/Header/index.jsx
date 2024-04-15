import { Link } from "react-router-dom";
import "./index.scss"
import site from "./../../data/json/site.json";

export default function Header() {

  return (
    <header>
      <Link to="/"><img className="logo" src={site.general.logo} alt="Logo" /></Link>
      <ul className="menu">
        {
          site.general.menu.map(
            (m, i) => 
            <li key={i}><Link to={m.link}>{m.text}</Link></li>
          )
        }
      </ul>
    </header>
    );
  }