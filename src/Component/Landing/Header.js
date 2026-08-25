import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, GraduationCap } from 'lucide-react';
import './Header.css';

import logo from '../../assects/image.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header className={`di-header ${scrolled ? 'di-header-scrolled' : ''}`}>
      {/* ============ TOP BAR ============ */}
      <div className="di-topbar">
        <div className="di-topbar-container">
          <div className="di-topbar-left">
            <a href="mailto:infotechdimension@gmail.com" className="di-topbar-item">
              <Mail size={13} />
              <span>infotechdimension@gmail.com</span>
            </a>

            <span className="di-topbar-divider"></span>

            <a href="tel:+916262913378" className="di-topbar-item">
              <Phone size={13} />
              <span>+91-62629 13378</span>
            </a>
          </div>

          <div className="di-topbar-right">
            <span className="di-topbar-tagline">IT | CONSULTING | TRAINING</span>
          </div>
        </div>
      </div>

      {/* ============ NAVBAR ============ */}
      <nav className="di-navbar">
        <div className="di-navbar-container">
          {/* LOGO */}
          <Link
            to="/"
            className="di-logo-wrap"
            onClick={handleNavClick}
            aria-label="Dimension Infotech Home"
          >
            <img
              src={logo}
              alt="Dimension Infotech"
              className="di-logo-img"
              draggable="false"
            />
          </Link>

          {/* NAV LINKS */}
          <ul className={`di-nav-links ${menuOpen ? 'di-nav-active' : ''}`}>
            <li>
              <NavLink
                to="/"
                end
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? 'di-link di-link-active' : 'di-link')}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? 'di-link di-link-active' : 'di-link')}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? 'di-link di-link-active' : 'di-link')}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? 'di-link di-link-active' : 'di-link')}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) => (isActive ? 'di-link di-link-active' : 'di-link')}
              >
                Contact
              </NavLink>
            </li>

            {/* MOBILE CTA */}
            <li className="di-mobile-cta">
              <Link to="/training" onClick={handleNavClick} className="di-nav-btn di-btn-train">
                <GraduationCap size={16} /> <span>Training &amp; Internship</span>
              </Link>
            </li>

            <li className="di-mobile-call">
              <a href="tel:+916262913378" onClick={handleNavClick}>
                <Phone size={15} /> +91-62629 13378
              </a>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <Link
            to="/training"
            onClick={handleNavClick}
            className="di-nav-btn di-btn-train di-desktop-cta"
          >
            <GraduationCap size={16} /> <span>Training &amp; Internship</span>
          </Link>

          {/* MENU TOGGLE */}
          <button
            className="di-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {menuOpen && <div className="di-nav-backdrop" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
