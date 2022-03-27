import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare,AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='SocialMedia'>
        <a href="https://www.linkedin.com/company/publicissapient" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/PublicisSapient" target="_blank"><AiFillTwitterSquare/></a>
        <a href="https://www.facebook.com/publicissapient/" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/publicissapient/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.youtube.com/publicissapient" target="_blank"><AiFillYoutube/></a>       
    </div>
  )
}

export default SocialMedia