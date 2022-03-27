import React from 'react'
import './technolgyNews.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    vox: 'https://vox.publicissapient.com/home/',
    readMore: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const TechnolgyNews = () => {
  return (
    <section id='portfolio'>
      <h5>Get Involved</h5>
      <h2>Technology News</h2>
      <div className="container technolgyNews__container">
        {
          data.map(({id, image, title, vox, demo}) => {
            return (
              <article key={id} className='technolgyNews__item'>
              <div className="technolgyNews__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="technolgyNews__item-cta">
                <a href={vox} className='btn' target='_blank'>Vox</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Read More</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default TechnolgyNews