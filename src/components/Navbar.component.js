import React, { useEffect } from "react";
import Searcher from "./cards/Searcher.card";
import styles from "./Navbar.component.module.css";
import useScroll from "../hooks/useScroll";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

const Navbar = () => {
  const { scrollToEvents } = useScroll();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    scrollToEvents();
    // Collapse the navbar after clicking a link
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler) {
      new window.bootstrap.Collapse(navbarToggler).hide();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // find the navbar
      const navbarToggler = document.querySelector(".navbar-collapse");
      // Collapse the navbar after outside click
      if (navbarToggler && !navbarToggler.contains(event.target)) {
        new window.bootstrap.Collapse(navbarToggler).hide();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.stickyNavbar}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img
            src={logo}
            alt="AJF Live-re-Wire Logo"
            style={{ height: "40px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#artistEventsContainer"
                onClick={handleClick}
              >
                Artist Events
              </a>
            </li>
            {/* TODO: being USER REGISTRATION page */}
          </ul>
        </div>
        <li className={`nav-item ${styles.searchContainer}`}>
          <Searcher />
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
