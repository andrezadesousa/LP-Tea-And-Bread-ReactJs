import React from 'react'
import './Footer.css'
import FooterData from '../../mocks/FooterData'
import FooterLink from '../../components/FooterLink'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Tea and Breads.</h1>
            <FooterData></FooterData>
            <FooterLink></FooterLink>
        </div>
    </footer>
  )
}

export default Footer