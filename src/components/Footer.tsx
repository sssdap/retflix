const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/plans">Plans</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Cookie Preferences</a></li>
              <li><a href="/">Corporate Information</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: info@retflix.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Stream St, Digital City</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Retflix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer