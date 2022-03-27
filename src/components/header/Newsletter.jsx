import React from 'react'
import NewsLetterPDF from '../../assets/People Stories.pdf'

const newsletter = () => {
  return (
    <div className='newsletter'>
        <a href={NewsLetterPDF} download className='btn'>News Letter</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default newsletter