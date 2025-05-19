import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Watch from './pages/Watch/Watch'
import Plans from './pages/Plans/Plans'
import FAQ from './pages/FAQ/FAQ'
import About from './pages/About/About'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App