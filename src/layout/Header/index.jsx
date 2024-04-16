import { Link } from "react-router-dom";
import "./index.scss"
import site from "./../../data/json/site.json";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  function handleToggleMenu() {
    setActive(!active);
    console.log(active)
  }

  function handleCloseMenu() {
    setActive(false);
  } 

  return (
    <header className={active ? "active" : ""}>
      <Link to="/"><img className="logo" src={site.general.logo} alt="Logo" /></Link>
      <ul className="menu">
        {
          site.general.menu.map(
            (m, i) => 
            <li onClick={handleCloseMenu} key={i}><Link reloadDocument to={m.link}>{m.text}</Link></li>
          )
        }
      </ul>
      <div onClick={handleToggleMenu} id="icons"></div>
    </header>
    );
  }