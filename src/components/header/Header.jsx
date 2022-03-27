import React from 'react'
import './header.css'
import Newsletter from './Newsletter'
import HomeBG from '../../assets/g18.png'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome Mona</h5>
        <h1>Publicis Sapient</h1>
        <h5 className="text-light"> I'm your old friend </h5>
        <Newsletter />
        <SocialMedia />
        <div className="me">
          <img src={HomeBG} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
