import { Link } from "react-router-dom";
import "./index.scss"
import footer from "./../../data/json/footer.json";

export default function Footer() {
  return (
      <footer>
        <ul className="footer-menu">
          <li><Link to={footer.facebook}><i className="fa-brands fa-facebook-f"></i></Link></li>
          <li><Link to={footer.instagram}><i className="fa-brands fa-instagram"></i></Link></li>
          <li><Link to={footer.linkedin}><i className="fa-brands fa-linkedin"></i></Link></li>
        </ul>
        <p>Développé par <Link to="https://esperluweb.com">EsperluWeb</Link></p>
      </footer>
    );
  }