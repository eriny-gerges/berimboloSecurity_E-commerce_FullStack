import { Link } from "react-router-dom";
import "./Footer.css";

const FOOTER_LINKS = {
  company: [
    { label: "About Us",       path: "/about" },
    { label: "Services",       path: "/services" },
    { label: "Products",       path: "/products" },
    { label: "Contact",        path: "/contact" },
  ],
  solutions: [
    { label: "Network Security",  path: "/products" },
    { label: "Surveillance Cams", path: "/products" },
    { label: "Access Control",    path: "/products" },
    { label: "Alarm Systems",     path: "/products" },
  ],
  support: [
    { label: "Documentation", path: "/contact" },
    { label: "Help Center",   path: "/contact" },
    { label: "Privacy Policy",path: "/contact" },
    { label: "Terms of Service", path: "/contact" },
  ],
};

const SOCIAL_LINKS = [
  {
    href: "#", label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "#", label: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    href: "#", label: "GitHub",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cyber-footer">
      {/* Top border glow */}
      <div className="cyber-footer__topline" />

      <div className="container-custom">
        {/* ── Main grid ── */}
        <div className="cyber-footer__grid">

          {/* Brand column */}
          <div className="cyber-footer__brand-col">
            <Link to="/" className="cyber-footer__brand">
              <span className="cyber-footer__brand-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L4 7V14c0 5.25 4.25 10.15 10 11.35C19.75 24.15 24 19.25 24 14V7L14 2Z"
                        fill="none" stroke="var(--clr-accent)" strokeWidth="1.8"/>
                  <path d="M9.5 14l3 3 6-6" stroke="var(--clr-accent)" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="cyber-footer__brand-name">BerimBolo Security</div>
                <div className="cyber-footer__brand-sub">Advanced Protection Systems</div>
              </div>
            </Link>

            <p className="cyber-footer__desc">
              Enterprise-grade security solutions for homes and businesses.
              Protecting what matters most with cutting-edge technology.
            </p>

            {/* Social links */}
            <div className="cyber-footer__social">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a key={label} href={href} className="cyber-footer__social-btn"
                   aria-label={label} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="cyber-footer__links-col">
            <h4 className="cyber-footer__col-title">Company</h4>
            <ul>{FOOTER_LINKS.company.map(({ label, path }) => (
              <li key={label}>
                <Link to={path} className="cyber-footer__link">{label}</Link>
              </li>
            ))}</ul>
          </div>

          <div className="cyber-footer__links-col">
            <h4 className="cyber-footer__col-title">Solutions</h4>
            <ul>{FOOTER_LINKS.solutions.map(({ label, path }) => (
              <li key={label}>
                <Link to={path} className="cyber-footer__link">{label}</Link>
              </li>
            ))}</ul>
          </div>

          <div className="cyber-footer__links-col">
            <h4 className="cyber-footer__col-title">Support</h4>
            <ul>{FOOTER_LINKS.support.map(({ label, path }) => (
              <li key={label}>
                <Link to={path} className="cyber-footer__link">{label}</Link>
              </li>
            ))}</ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="cyber-footer__bottom">
          <p className="cyber-footer__copy">
            © {year} BerimBolo Security. All rights reserved.
          </p>
          <div className="cyber-footer__badges">
            <span className="badge-cyber badge-cyber-accent">
              <span className="cyber-footer__status-dot" />
              Systems Online
            </span>
            <span className="badge-cyber badge-cyber-success">
              🔒 SSL Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}