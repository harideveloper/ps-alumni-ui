import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const clubsAndGroups = [
  {name : 'PS Alumni - Group 2017'},
  {name : 'PS Alumni - Yorkshire Hikers Group'},
  {name : 'PS Alumni - Cloud Engineers'},
  {name : 'PS Alumni - Chicago Experience Designers'},
  {name : 'PS Alumni - Nandos Chicken Meetup'},
  {name : 'PS Alumni - Web Developers'},
  {name : 'PS Alumni - Toronto Data Engineers'}
]


const Recommended_Alumni = [
  {name : 'George Clooney', role:'Senior Director, Apple'},
  {name : 'Emma Healy', role:'Sr. Designer, Publicis Sapient'},
  {name : 'Puja Madhok', role:'Publicis Sapient'},
  {name : 'Hari Sundaresan', role:'Publicis Sapient'},
  {name : 'Sabrina Ruiz', role:'Publicis Sapient'},
  {name : 'Brad Pitt', role:'Senior Analyst, Google '},
  {name : 'Kelly Xie', role:'Publicis Sapient'},

]

const Recommended_Jobs = [
  { role:'Software Engineer', location : 'Leeds'},
  { role:'Software Analyst', location : 'Manchester'},
  { role:'Web Engineer', location : 'Leeds'},
  { role:'FullStack Developer', location : 'Leeds'},
  { role:'Backend Developer', location : 'Leeds'},
]


const Services = () => {
  return (
    <section id='services'>
      <h5>connecting alumni</h5>
      <h2>Alumni Services</h2>

      {/* Alumni clubs & groups */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Clubs & Groups</h3>
          </div>
            <ul className='service__list'>
              {clubsAndGroups.map(club => 
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{club.name}</p>
                </li>
                )}
            </ul>
        </article>

        {/* Alumni Recommendation */}
        <article className="service">
          <div className="service__head">
            <h3>Alumni Recommendations</h3>
          </div>
          <ul className='service__list'>
          {Recommended_Alumni.map(Alumni =>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{Alumni.name}</p>
              <small className='text-light'>{Alumni.role}</small>
          </li>
            )}
          </ul>
        </article>

        {/* Job Recommendations */}
        <article className="service">
          <div className="service__head">
            <h3>Job Recommendations for you</h3>
          </div>
          <ul className='service__list'>
            {Recommended_Jobs.map(job => 
              <li>
              <BiCheck className='service__list-icon' />
              <p>{job.role}</p>
              <small className='text-light'>{job.location}</small>
              </li>
            )}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services