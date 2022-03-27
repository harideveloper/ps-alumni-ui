import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Hariprasad Sundaresan',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
  {
    avatar: AVTR2,
    name: 'Puja Madhok',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
  {
    avatar: AVTR3,
    name: 'Sabrina Ruiz',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
  {
    avatar: AVTR4,
    name: 'Emma Healy',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>alumni feedback</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials