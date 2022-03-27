import React from 'react'
import './corevalues.css'
import CoreVS_Img from '../../assets/CoreVS_Img.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers,FiUmbrella,FiCoffee,FiBookOpen} from 'react-icons/fi'

const coreValues = [
  {coreValue : 'Engaging with Openness', core_value_desc : 'Share and seek ideas', icon:<FiBookOpen className='corevalues__icon'/>},
  {coreValue : 'Learning Mindset ', core_value_desc : 'Courage to question',icon:<FaAward className='corevalues__icon'/>},
  {coreValue : 'Inclusive Collaboration', core_value_desc : 'Diverse voices',icon:<FiUsers className='corevalues__icon'/>},
  {coreValue : 'Embracing the Future', core_value_desc : 'Spark imagination',icon:<FiUmbrella className='corevalues__icon'/>},
  {coreValue : 'Partnering for Client Impact', core_value_desc : 'Care about our clients', icon:<FiCoffee className='corevalues__icon'/>}
]

const coreMessage = {message : 'For 30 years we’ve helped the world’s most established brands evolve for a more digital future. We combine strategy, experience design, and engineering to build products and innovate game-changing services that allow our clients to thrive. Through it all, one thing has remained constant – the secret to our success is hiring people like you'}

const CoreValues = () => {
  return (
    <section id='CoreValues'>
      <h5>Get To Know</h5>
      <h2>About My Core Values</h2>

      <div className="container corevalues__container">
        <div className="corevalues__me">
          <div className="corevalues__me-image">
            <img src={CoreVS_Img} alt="corevalues__me Image" />
          </div>
        </div>
    
    <div className="corevalues__content">
          <div className="corevalues__cards">
           {coreValues.map(item => 
              <article className='corevalues__card'>
              {item.icon }
              <h5>{item.coreValue}</h5>
              <small>{item.core_value_desc}</small>
              </article>
            )}
          </div>
          <p>{coreMessage.message}</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default CoreValues