import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">RETFLIX</Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="header-auth">
          <Link to="/" className="header-signIn">Sign In</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;