import { Link } from "react-router-dom";
import "./index.scss"
import header from "./../../data/json/header.json";

export default function Header() {

  return (
    <header>
      <Link to="/"><img className="logo" src={header.logo} alt="Logo" /></Link>
      <ul className="menu">
        {
          header.menu.map(
            (m, i) => 
            <li key={i}><Link to={m.link}>{m.text}</Link></li>
          )
        }
      </ul>
    </header>
    );
  }