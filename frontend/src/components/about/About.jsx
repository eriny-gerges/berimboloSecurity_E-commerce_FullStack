import "./about.css";
import { HiMiniUserCircle } from "react-icons/hi2";

const owners = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Cybersecurity Specialist",
    desc:
      "Expert in enterprise surveillance systems, AI-powered monitoring, and smart infrastructure protection for modern businesses.",
  },

  {
    id: 2,
    name: "Omar Khaled",
    role: "Security Systems Engineer",
    desc:
      "Specialized in access control systems, alarm integration, and advanced network security architecture for enterprises.",
  },

  {
    id: 3,
    name: "Mohamed Adel",
    role: "Infrastructure Consultant",
    desc:
      "Focused on smart security solutions, cloud monitoring platforms, and cyber-physical protection technologies.",
  },
];

function About() {
  return (
    <section className="about-page">

      
      <div className="about-hero">

        <div className="about-hero__badge">
          <span className="about-hero__badge-dot" />
          Enterprise Security Company
        </div>

        <h1 className="about-hero__title">
          About <span>Berimbolo</span>
        </h1>

        <p className="about-hero__sub">
          Berimbolo Security delivers next-generation cybersecurity,
          smart surveillance, and enterprise protection systems designed
          for modern infrastructures and digital environments.
        </p>

      </div>

      
      <div className="container about-team">

        {owners.map((owner) => (
          <div
            key={owner.id}
            className="about-card"
          >

            
            <div className="about-card__glow" />

            
            <span className="about-card__corner about-card__corner--tl" />
            <span className="about-card__corner about-card__corner--br" />

            
            <div className="about-card__icon">

              <HiMiniUserCircle className="about-card__icon-svg" />

            </div>

            
            <div className="about-card__content">

              <span className="about-card__role">
                {owner.role}
              </span>

              <h3 className="about-card__name">
                {owner.name}
              </h3>

              <p className="about-card__desc">
                {owner.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

      
      <div className="container about-story">

        <div className="about-story__card">

          
          <div className="about-story__glow" />

          <div className="about-story__left">

            <div className="about-story__tag">
              Company History
            </div>

            <h2 className="about-story__title">
              Building Secure
              <br />
              Digital Futures
            </h2>

            <p className="about-story__desc">
              Berimbolo Security was established with a mission to provide
              reliable, intelligent, and enterprise-grade security systems.
              Our company combines cybersecurity expertise with physical
              infrastructure protection to deliver complete solutions for
              businesses, smart homes, and industrial environments.
            </p>

            <div className="about-story__stats">

              <div className="about-story__stat">
                <span className="about-story__stat-value">
                  +15
                </span>

                <span className="about-story__stat-label">
                  Years Experience
                </span>
              </div>

              <div className="about-story__stat">
                <span className="about-story__stat-value">
                  +500
                </span>

                <span className="about-story__stat-label">
                  Protected Facilities
                </span>
              </div>

            </div>

          </div>

          <div className="about-story__right">

            <div className="about-story__panel">

              <h3 className="about-story__panel-title">
                Mission & Vision
              </h3>

              <p className="about-story__panel-text">
                We aim to redefine digital and physical security through
                intelligent monitoring, AI-driven surveillance, and
                scalable enterprise protection systems.
              </p>

              <p className="about-story__panel-text">
                Our commitment is to create safer infrastructures with
                innovative technologies that ensure reliability,
                real-time protection, and operational excellence.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;