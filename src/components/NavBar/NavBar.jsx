import { Logo, Pages } from "./index";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  // const {containerNavBar} = Css
  
  const [active, setActive] = useState(window.location.pathname);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark ${styles.fondoBordo}`}
    >
      <div className="container-fluid">
        <Logo />
        <Link
          className={`navbar-brand text-white ${styles.cursiva}`}
          to="/"
          key={"marca"}
        >
          Charly
          
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center fondoBordo"
          id="navbarNavDropdown"
        >
          <i className="fa-regular fa-cart-shopping text-white m-2"></i>
          <Pages />
        </div>
        <div>
          <button className="btn btn-light">Login</button>
        </div>
      </div>
    </nav>
  );
};
