import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { path: "/",         label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/services", label: "Services" },
  { path: "/about",    label: "About" },
  { path: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
 
  // eslint-disable-next-line no-unused-vars
  const [cartCount,    setCartCount]    = useState(0);
  const location = useLocation();
  const menuRef = useRef(null);

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => { setMenuOpen(false); }, [location]);

  
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`cyber-navbar ${scrolled ? "cyber-navbar--scrolled" : ""}`}>
      <nav className="cyber-navbar__inner container-custom" ref={menuRef}>

        
        <Link to="/" className="cyber-navbar__brand">
          <span className="cyber-navbar__brand-icon" aria-hidden="true">
  <img
    src="/src/images/logo.png"
    alt="Berimbolo Logo"
    className="cyber-navbar__logo"
  />
</span>
          <div className="cyber-navbar__brand-text">
            <span className="cyber-navbar__brand-name">BerimBolo</span>
            <span className="cyber-navbar__brand-sub">Security</span>
          </div>
        </Link>

        
        <ul className="cyber-navbar__links">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `cyber-navbar__link ${isActive ? "cyber-navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <div className="cyber-navbar__actions">
          <Link to="/cart" className="cyber-navbar__cart" aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="cyber-navbar__cart-badge">{cartCount}</span>
            )}
          </Link>
          <Link to="/login" className="btn-cyber btn-cyber-outline cyber-navbar__login-btn">
            Sign In
          </Link>
          <Link to="/register" className="btn-cyber btn-cyber-primary cyber-navbar__register-btn">
            Get Started
          </Link>
        </div>

        
        <button
          className={`cyber-navbar__hamburger ${menuOpen ? "cyber-navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      
      <div className={`cyber-mobile-menu ${menuOpen ? "cyber-mobile-menu--open" : ""}`}
           aria-hidden={!menuOpen}>
        <ul className="cyber-mobile-menu__links">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `cyber-mobile-menu__link ${isActive ? "cyber-mobile-menu__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="cyber-mobile-menu__actions">
          <Link to="/login" className="btn-cyber btn-cyber-outline w-100">Sign In</Link>
          <Link to="/register" className="btn-cyber btn-cyber-primary w-100">Get Started</Link>
        </div>
      </div>

      
      {menuOpen && (
        <div className="cyber-mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}