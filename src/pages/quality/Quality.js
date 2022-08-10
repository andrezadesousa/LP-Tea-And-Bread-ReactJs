import React from 'react'
import './Quality.css'
import Big from '../../assets/image/quality-1.png'
import Small from '../../assets/image/quality-2.png'
import QualityData from '../../components/QualityData'

const Quality = () => {
  return (
    <section className='quality section' id='premium'>
        <div className='quality__container container'>
            <h2 className='section__title'>We offer a premium and better quality preparation just for you!</h2>
            <div className='quality__content grid'>
              <div className='quality__images'>
                <img src={Big} alt='' className='quality__img-big'></img>
                <img src={Small} alt='' className='quality__img-small'></img>
              </div>
                <QualityData></QualityData>
            </div>
        </div>
    </section>
  )
}

export default Quality