import { Link } from "react-router-dom";
import "./index.scss";

import Social from "../../components/Social";

export default function Footer() {
  return (
      <footer>
        <Social/>
        <p>Développé par <Link to="https://esperluweb.com">EsperluWeb</Link></p>
      </footer>
    );
  }