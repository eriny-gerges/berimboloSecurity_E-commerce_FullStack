import "./contact.css";

const CONTACT_INFO = [
  {
    id: 1,
    title: "Headquarters",
    value: "Cairo, Egypt",
  },
  {
    id: 2,
    title: "Emergency Support",
    value: "+20 101 234 5678",
  },
  {
    id: 3,
    title: "Email Address",
    value: "security@berimobo.com",
  },
];

function Contact() {
  return (
    <section className="contact-page">

      
      <div className="contact-hero">

        <div className="contact-hero__badge">
          <span className="contact-hero__badge-dot" />
          Secure Communication Channel
        </div>

        <h1 className="contact-hero__title">
          Contact <span>Berimobo</span>
        </h1>

        <p className="contact-hero__subtitle">
          Reach out to our cybersecurity specialists for enterprise protection,
          smart security infrastructure, and advanced monitoring solutions.
        </p>

      </div>

      
      <div className="contact-container container">

        <div className="contact-card">

          
          <div className="contact-card__glow" />

          
          <span className="contact-card__corner contact-card__corner--top" />
          <span className="contact-card__corner contact-card__corner--bottom" />

          
          <div className="contact-info">

            <div className="contact-info__tag">
              Enterprise Security Support
            </div>

            <h2 className="contact-info__title">
              Let&apos;s Secure
              <br />
              Your Infrastructure
            </h2>

            <p className="contact-info__desc">
              Whether you need surveillance systems, access control,
              alarm integration, or enterprise cybersecurity solutions —
              our specialists are ready to help.
            </p>

            
            <div className="contact-info__stats">

              <div className="contact-info__stat">
                <span className="contact-info__stat-value">
                  24/7
                </span>

                <span className="contact-info__stat-label">
                  Threat Monitoring
                </span>
              </div>

              <div className="contact-info__stat">
                <span className="contact-info__stat-value">
                  99.9%
                </span>

                <span className="contact-info__stat-label">
                  System Reliability
                </span>
              </div>

            </div>

            
            <div className="contact-info__list">

              {CONTACT_INFO.map((item) => (
                <div
                  key={item.id}
                  className="contact-info__item"
                >

                  <span className="contact-info__item-title">
                    {item.title}
                  </span>

                  <span className="contact-info__item-value">
                    {item.value}
                  </span>

                </div>
              ))}

            </div>

          </div>

          
          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="contact-form__grid">

                <div className="contact-form__group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="John Carter"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="john@email.com"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="+20 101 234 5678"
                    required
                  />
                </div>

                <div className="contact-form__group">
                  <label>Company</label>

                  <input
                    type="text"
                    placeholder="Berimobo Inc."
                  />
                </div>

              </div>

              <div className="contact-form__group">
                <label>Security Requirements</label>

                <textarea
                  rows="7"
                  placeholder="Tell us about your security infrastructure and project requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-form__button"
              >

                Send Secure Message

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;