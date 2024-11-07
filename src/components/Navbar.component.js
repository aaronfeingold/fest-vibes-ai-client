import React, { useEffect, useRef } from "react";
import Searcher from "./cards/Searcher.card";
import styles from "./Navbar.component.module.css";
import useScroll from "../hooks/useScroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { scrollToEvents, scrollToHome } = useScroll();
  const navbarRef = useRef(null);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const logoLink = e.currentTarget;
    logoLink.classList.add('active');
    logoLink.classList.add('hover');
    scrollToHome();
    setTimeout(() => {
      logoLink.classList.remove('active');
      logoLink.classList.remove('hover');
    }, 100); // Match the scroll duration
  };

  const handleNavItemClick = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    scrollToEvents();
    // Collapse the navbar after clicking a link
    const navbarToggler = document.querySelector('.navbar-collapse');
    if (navbarToggler) {
      new window.bootstrap.Collapse(navbarToggler).hide();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // find the navbar and only handle clicks outside of it
      if (!navbarRef.current?.contains(e.target)) {
        const navbarToggler = document.querySelector('.navbar-collapse');
        // Collapse the navbar after outside click
        if (navbarToggler && navbarToggler.classList.contains('show')) {
          new window.bootstrap.Collapse(navbarToggler).hide();
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.stickyNavbar}`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#homeContainer"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="AJF Live-re-Wire Logo"
            style={{ height: '40px' }}
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
                onClick={handleNavItemClick}
              >
                Artist Events
              </a>
            </li>
            {/* TODO: USER REGISTRATION page */}
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
