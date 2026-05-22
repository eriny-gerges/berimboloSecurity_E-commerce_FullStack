import{ useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const STATS = [
  { value: "50K+", label: "Clients Protected" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Threat Monitoring" },
  { value: "ISO 27001", label: "Certified" },
];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Advanced Threat Detection",
    desc: "AI-powered real-time monitoring that identifies and neutralizes threats before they breach your perimeter.",
    tag: "AI-Powered",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Zero-Trust Architecture",
    desc: "Every access request verified. No entity trusted by default — inside or outside your network boundaries.",
    tag: "Enterprise",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Encrypted Data Vault",
    desc: "Military-grade AES-256 encryption with quantum-resistant algorithms protecting your most sensitive assets.",
    tag: "Military Grade",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Threat Intelligence",
    desc: "Continuously updated threat intelligence from 190+ countries, feeding your defenses in real time.",
    tag: "Global",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "SOC-as-a-Service",
    desc: "Dedicated security operations center staffed by elite analysts monitoring your infrastructure around the clock.",
    tag: "24/7",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Compliance Automation",
    desc: "Automated compliance reporting for GDPR, HIPAA, PCI-DSS, and SOC 2 — audit-ready at all times.",
    tag: "Compliance",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Berimobo's threat detection caught a sophisticated APT attack that our previous vendor completely missed. The ROI was immediate.",
    author: "Sarah Chen",
    role: "CISO, Nexus Financial Group",
    avatar: "SC",
  },
  {
    quote:
      "Deploying their zero-trust architecture reduced our attack surface by 94%. Implementation was seamless across all 47 offices.",
    author: "Marcus Webb",
    role: "VP Security, GlobalOps Corp",
    avatar: "MW",
  },
  {
    quote:
      "After a ransomware incident crippled our competitor, we moved to Berimobo. Three years in — not a single breach.",
    author: "Aisha Okonkwo",
    role: "CTO, MedCore Systems",
    avatar: "AO",
  },
];

const TICKER_ITEMS = [
  "🛡️ Threat Neutralized: SQL Injection — 00:03 ago",
  "⚡ DDoS Attack Mitigated — 1.2M req/s blocked",
  "🔒 Zero-Day Patch Deployed — CVE-2026-4821",
  "📡 Anomaly Detected & Quarantined — Endpoint #4471",
  "✅ Compliance Audit Passed — SOC 2 Type II",
  "🚨 Ransomware Signature Blocked — AGENT.BTZ variant",
  "🌐 Threat Intel Updated — 47 new IOCs added",
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        dx: (Math.random() - 0.5) * 0.28,
        dy: (Math.random() - 0.5) * 0.28,
        alpha: Math.random() * 0.45 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <canvas className="home-hero__canvas" ref={canvasRef} />
        <div className="home-hero__grid-overlay" />
        <div className="home-hero__radial" />

        <div className="container home-hero__container">
          <div className="home-hero__badge">
            <span className="home-hero__badge-dot" />
            Threat Level: <strong>PROTECTED</strong>
          </div>

          <h1 className="home-hero__title">
            <span className="home-hero__title-line">Cyber Defense</span>
            <span className="home-hero__title-line home-hero__title-accent">
              Redefined.
            </span>
          </h1>

          <p className="home-hero__subtitle">
            Enterprise-grade security infrastructure. Military-class encryption.
            <br className="d-none d-lg-block" />
            Real-time threat intelligence. Built for the threats of tomorrow.
          </p>

          <div className="home-hero__cta-group">
            <Link to="/products" className="btn-cyber btn-cyber--primary">
              <span>Explore Arsenal</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-cyber btn-cyber--ghost">
              <span>Request Demo</span>
            </Link>
          </div>

          <div className="home-hero__stats">
            {STATS.map((s, i) => (
              <div className="home-hero__stat" key={i}>
                <span className="home-hero__stat-value">{s.value}</span>
                <span className="home-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero__scroll-hint">
          <div className="home-hero__scroll-line" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* THREAT TICKER */}
      <div className="home-ticker">
        <div className="home-ticker__label">
          <span className="home-ticker__label-dot" />
          LIVE
        </div>
        <div className="home-ticker__track">
          <div className="home-ticker__content">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="home-ticker__item">
                {item}
                <span className="home-ticker__sep">///</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="home-features section-py">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">CAPABILITIES</span>
            <h2 className="section-title">Your Security, Engineered</h2>
            <p className="section-subtitle">
              Every layer of your infrastructure fortified with precision-built security solutions.
            </p>
          </div>

          <div className="home-features__grid">
            {FEATURES.map((f, i) => (
              <div
                className="home-feature-card"
                key={i}
                style={{ animationDelay: `${i * 0.09}s` }}
              >
                <span className="home-feature-card__tag">{f.tag}</span>
                <div className="home-feature-card__icon">{f.icon}</div>
                <h3 className="home-feature-card__title">{f.title}</h3>
                <p className="home-feature-card__desc">{f.desc}</p>
                <div className="home-feature-card__hover-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="home-cta-banner">
        <div className="home-cta-banner__bg" />
        <div className="container home-cta-banner__inner">
          <div className="home-cta-banner__text-col">
            <h2 className="home-cta-banner__title">
              Your Attack Surface Is Larger Than You Think.
            </h2>
            <p className="home-cta-banner__body">
              The average breach goes undetected for 207 days. Every day without enterprise
              protection is a risk you can't afford.
            </p>
          </div>
          <div className="home-cta-banner__actions">
            <Link to="/products" className="btn-cyber btn-cyber--primary">
              <span>View Products</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/about" className="btn-cyber btn-cyber--ghost">
              <span>Our Mission</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home-testimonials section-py">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">TESTIMONIALS</span>
            <h2 className="section-title">Trusted by Security Leaders</h2>
          </div>

          <div className="home-testimonials__slider">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`home-tcard ${i === activeTestimonial ? "home-tcard--active" : ""}`}
              >
                <div className="home-tcard__quote-mark">"</div>
                <p className="home-tcard__text">{t.quote}</p>
                <div className="home-tcard__author">
                  <div className="home-tcard__avatar">{t.avatar}</div>
                  <div>
                    <div className="home-tcard__name">{t.author}</div>
                    <div className="home-tcard__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="home-testimonials__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`home-testimonials__dot ${
                  i === activeTestimonial ? "home-testimonials__dot--active" : ""
                }`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}