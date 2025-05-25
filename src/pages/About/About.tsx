import { FaPlay, FaUsers, FaGlobe, FaHeart, FaAward } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in digital entertainment',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Content Director',
      bio: 'Creative mind behind our award-winning content strategy',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Technology Lead',
      bio: 'Ensuring seamless streaming experience for millions',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Production',
      bio: 'Bringing compelling stories to life',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Active Subscribers' },
    { number: '50+', label: 'Countries' },
    { number: '10K+', label: 'Movies & Shows' },
    { number: '24/7', label: 'Support' }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Entertainment',
      description: 'We live and breathe great content'
    },
    {
      icon: <FaUsers />,
      title: 'User First',
      description: 'Your experience is our priority'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Perspective',
      description: 'Celebrating diversity in storytelling'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Setting industry standards'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Storytelling Reimagined</h1>
            <p>Where innovation meets entertainment</p>
            <button className="btn btn-primary">
              <FaPlay /> Watch Our Story
            </button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p className="lead">
              Founded in 2023, Retflix began with a simple idea: to revolutionize how the world experiences entertainment.
              Today, we're proud to be a leading streaming platform, bringing joy to millions worldwide.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our <span>Leadership</span></h2>
          <p className="section-subtitle">The passionate team behind your favorite streaming experience</p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="social-links">
                    <a href="#" aria-label={`Connect with ${member.name} on LinkedIn`}><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label={`Follow ${member.name} on Twitter`}><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to join the streaming revolution?</h2>
            <p>Start your free trial today and experience entertainment like never before.</p>
            <button className="btn btn-primary btn-large">Start Free Trial</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About