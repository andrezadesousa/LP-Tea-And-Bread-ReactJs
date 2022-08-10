import React from 'react'
import './About.css'
import AboutCard from '../../mocks/AboutData'

const About = () => {
  return (
    <section className='about section' id='about'>
        <div className='about__container container'>
            <h2 className='section__title'>How about meeting &#169; Tea and Breads or reading a hot article?</h2>
            <AboutCard></AboutCard>
        </div>
    </section>
  )
}

export default About