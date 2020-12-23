import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)

  useEffect(() => {
    let isSubscribed = true

    const checkScrollTop = () => {
      if (!activeNav && isSubscribed && window.pageYOffset > 50) {
        setActiveNav(true)
      } else if (activeNav && isSubscribed && window.pageYOffset <= 50) {
        setActiveNav(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)

    return () => {
      window.addEventListener("scroll", checkScrollTop)
      isSubscribed = false
    }
  }, [activeNav])

  return (
    <nav
      className={`navbar ${activeNav ? 'is-active' : ''}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar__menu">
          <div className="navbar__start">
            <Link to="/" className="navbar__item" title="Home">
              andytron.com
            </Link>
          </div>
          <div className="navbar__end">
            <Link to="/work" className="navbar__item">
              Work
            </Link>
            <Link to="/mixes" className="navbar__item">
              Mixes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
