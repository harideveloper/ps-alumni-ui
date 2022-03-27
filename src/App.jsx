import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import CoreValues from './components/corevalues/CoreValues'
import Events from './components/events/Events'
import Services from './components/services/Services'
import TechnolgyNews from './components/TechnolgyNews/TechnolgyNews'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav /> 
        <Events />
        <Services />
        <CoreValues />
        <TechnolgyNews />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App