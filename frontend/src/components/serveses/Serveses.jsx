import "./serveses.css";
import { Link } from "react-router-dom";

import im1 from "../../images/security-cameras-banner.webp";
import im2 from "../../images/door-access-control.jpg";
import im3 from "../../images/alarm.jpeg";
import im4 from "../../images/bell.jpeg";

const services = [
  {
    id: 1,
    title: "Security Cameras",
    subtitle: "Sell, Install & Support",
    image: im1,
    reverse: false,
    desc:
      "Discover premium CCTV and surveillance camera systems in Egypt. We provide complete installation, configuration, maintenance, and enterprise-grade monitoring solutions for businesses and homes.",
    features: [
      "HD & 4K Cameras",
      "Night Vision",
      "Remote Monitoring",
      "Installation Included",
    ],
  },

  {
    id: 2,
    title: "Door Access Control",
    subtitle: "Smart Entry Protection",
    image: im2,
    reverse: true,
    desc:
      "Enhance your security with advanced access control systems. From biometric authentication to smart card access and remote management, we secure your facilities with modern technologies.",
    features: [
      "Biometric Access",
      "RFID Systems",
      "Smart Locks",
      "Enterprise Security",
    ],
  },

  {
    id: 3,
    title: "Alarm Systems",
    subtitle: "24/7 Threat Detection",
    image: im3,
    reverse: false,
    desc:
      "Protect your property with intelligent burglar alarm systems designed for residential and commercial security. Fast alerts, real-time monitoring, and reliable protection.",
    features: [
      "Motion Detection",
      "Emergency Alerts",
      "Wireless Sensors",
      "Real-time Monitoring",
    ],
  },

  {
    id: 4,
    title: "Smart Bell Systems",
    subtitle: "Modern Smart Communication",
    image: im4,
    reverse: true,
    desc:
      "Upgrade your entrances with smart bell and intercom systems featuring mobile connectivity, HD video streaming, and secure visitor communication.",
    features: [
      "Video Doorbells",
      "Mobile Integration",
      "HD Streaming",
      "Cloud Storage",
    ],
  },
];

function Serveses() {
  return (
    <section className="services-page">

      
      <div className="services-hero">

        <div className="services-hero__badge">
          <span className="services-hero__badge-dot" />
          Enterprise Security Solutions
        </div>

        <h1 className="services-hero__title">
          Advanced <span>Security Services</span>
        </h1>

        <p className="services-hero__sub">
          Military-grade protection systems engineered for enterprises,
          businesses, and smart homes. Combining AI-powered surveillance,
          intelligent monitoring, and next-generation cyber-physical security.
        </p>

      </div>

      
      <div className="container services-container">

        {services.map((service, idx) => (
          <div
            key={service.id}
            className={`service-card ${
              service.reverse ? "service-card--reverse" : ""
            }`}
            style={{
              animationDelay: `${idx * 0.12}s`,
            }}
          >

            
            <div className="service-card__glow" />

            
            <span className="service-card__corner service-card__corner--tl" />
            <span className="service-card__corner service-card__corner--br" />

            
            <div className="service-card__media">

              <div className="service-card__scanline" />

              <img
                src={service.image}
                alt={service.title}
                className="service-card__img"
              />

              <div className="service-card__overlay">
                <div className="service-card__overlay-text">
                  Secure Infrastructure
                </div>
              </div>

            </div>

            
            <div className="service-card__content">

              <div className="service-card__tag">
                <span className="service-card__tag-dot" />
                Security Solution
              </div>

              <h2 className="service-card__title">
                {service.title}
              </h2>

              <h3 className="service-card__subtitle">
                {service.subtitle}
              </h3>

              <p className="service-card__desc">
                {service.desc}
              </p>

              
              <div className="service-card__features">

                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="service-card__feature"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    {feature}
                  </div>
                ))}

              </div>

              
              <div className="service-card__actions">

                <Link
                  to="/products"
                  className="service-card__btn service-card__btn--primary"
                >
                  Explore Products

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="service-card__btn service-card__btn--ghost"
                >
                  Contact Us
                </Link>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Serveses;