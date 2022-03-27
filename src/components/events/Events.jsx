import React from 'react'
import './events.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const UpcomingEvents = [
  { name : 'PS Strategy Summit', eventdate : 'March 28, 2022'},
  { name : 'VIVAWomen', eventdate : 'March 29, 2022'},
  { name : 'Celebrating Women’s Day', eventdate : 'March 31, 2022'},
  { name : 'London Turnmill Community', eventdate : 'April 03, 2022 '},
  { name : 'PS Drink thursday', eventdate : 'All Thursdays'},
  { name : 'Hear from new joiners', eventdate : 'April 06, 2022'}
]

const LatestNews = [
  { name : 'Virtual Volunteering', newsdate : 'March 28, 2022'},
  { name : '10k Yorkshire Hikes', newsdate : 'March 28, 2022'},
  { name : 'Volunteer Leaders', newsdate : 'April 11, 2022'},
  { name : 'Publicis Easter Eggs', newsdate : 'April 18, 2022 '},
  { name : 'Matching GiftsSQL', newsdate : 'All Thursdays'}
]
const Events = () => {
  return (
    <section id='events'>
      <h5>connecting people</h5>
      <h2>Events & Latest News</h2>
      
      {/* Listing Events */}
      <div className="container events__container">
        <div className="events__frontend">
          <h3>Upcoming Events</h3>
          {/* <h2>Upcoming Events</h2> */}
          {UpcomingEvents.map( upcomingEvent=> 
              <article className='events__details'>
                <BsPatchCheckFill className='events__details-icon' />
                <div>
                  <h4>{upcomingEvent.name}</h4>
                  <small className='text-light'>{upcomingEvent.eventdate} </small>
                </div>
              </article>
            )}
        </div>

        {/* Listing Latest News */}
        <div className="events__backend">
        <h3>Latest News</h3>
          <div className="events__content">
                {LatestNews.map(news => 
                <article className='events__details'>
                  <BsPatchCheckFill className='events__details-icon' />
                  <div>
                    <h4>{news.name}</h4>
                    <small className='text-light'>{news.newsdate} </small>
                  </div>
                  </article>
                )}
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Events