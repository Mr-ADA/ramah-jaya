import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo Ramah Jaya.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom-bg navbar-dark">
      <div className="container-fluid px-8">
        <Link to="/" className="navbar-brand">
          <img className="img-icon" src={Logo} alt="Logo Ramah Jaya" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/catalog" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lokasi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
