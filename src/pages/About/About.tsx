const About = () => {
  return (
    <div className="about-page">
      <section className="section">
        <h2>About Retflix</h2>
        <div className="about-content">
          <p>
            Retflix is a leading streaming entertainment service with millions of subscribers in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages.
          </p>
          <p>
            Founded in 2023, Retflix has continually evolved to bring innovative entertainment to our users. Our mission is to entertain the world by providing the best streaming experience possible.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>Jane Smith</h4>
              <p>Content Director</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h4>Mike Johnson</h4>
              <p>Technology Lead</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-method">
            <h4>Email</h4>
            <p>support@retflix.com</p>
          </div>
          <div className="contact-method">
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-method">
            <h4>Address</h4>
            <p>123 Stream Street, Digital City, DC 12345</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About