import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <NavLink to="/" className="nav__brand">Anand V</NavLink>
      <nav className="nav__links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
          Home
        </NavLink>
        <NavLink to="/works" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
          Works
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
