import React from 'react'
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const FooterLink = () => {
  return (
    <div className='footer__group'>
        <ul className='footer__social'>
            <a href='https://www.facebook.com/' target='' className='footer__social-link'>
                <i><AiOutlineFacebook></AiOutlineFacebook></i>
            </a>
            <a href='https://www.instagram.com/' target='' className='footer__social-link'>
                <i><AiOutlineInstagram></AiOutlineInstagram></i>
            </a>
            <a href='"https://www.twitter.com/' target='' className='footer__social-link'>
                <i><AiOutlineTwitter></AiOutlineTwitter></i>
            </a>
        </ul>
    </div>
  )
}

export default FooterLink