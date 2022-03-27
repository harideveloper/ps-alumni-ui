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
    name: 'Jorge Lorenzo',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
  {
    avatar: AVTR2,
    name: 'Suzanne Taylor',
    review: 'I re-joined Sapient after my maternity leave in September 2020 and received great support from my People Manager. Some of the things that I really appreciated was the check-in before my return to work to make sure that I was on an account that was steady and could be a good way to transition back to work, the regular check-ins to ensure that the workload was manageable and recommending resources for parents. All these things helped me to feel really good about my return to work.'
  },
  {
    avatar: AVTR3,
    name: 'Helen Doherty',
    review: 'My time with Sapient has been a crucial stepping stone in my career. The company culture was inviting and encouraging of fine tuning my skillset and continuous learning. Since the start of my employment I have grown as a Product Manager and worked with cutting edge clients looking to push and challenge the status quo. I look forward to coming to work to continue the brave pursuit of next!'
  },
  {
    avatar: AVTR4,
    name: 'Angela Stuart',
    review: 'I entered Publicis Sapient’s Early Careers program as my first job out of college.  Publicis Sapient invested so much in my development not only as a designer, but also as a person.  I had great mentors on my team to learn from, and a community in Early Careers that made it fun to go to the office.  Best of all, the work I did at Publicis Sapient made a tangible difference in people’s lives.  For all these reasons, I am grateful that my career started at Publicis Sapient.'
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