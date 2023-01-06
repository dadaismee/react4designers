import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo-designcode.svg'
import './header.css'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== hasScrolled) setHasScrolled(!hasScrolled);
    };
  
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [hasScrolled])
  
  return (
    <div className={hasScrolled ? 'header header-scrolled' : 'header'}>
    <div className="header__group">
      <Link to='/'><img src={logo} width='30'/></Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/downloads'>Downloads</Link>
      <Link to='/Workshops'>Workshops</Link>
      <Link to='/buy'><button>Buy</button></Link>
    </div>
  </div>
  )
}

export default Header