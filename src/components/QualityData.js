/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const QualityData = () => {
  return (
    <div className='quality__data'>
        <h1 className='quality__title'>Premium Products</h1>
        <h2 className='quality__price'>$39.99</h2>
        <span className='quality__special'>Special Price</span>
        <p className='quality__description'>
            We are delighted with our products. That's why you get the best premium breads, teas and coffees at a special price. 
        </p>
        <div className='quality__buttons'>
            <button className='button'>Buy Now</button>
            <a href='#' className='quality__button'>
                See more
                <i><AiOutlineArrowRight></AiOutlineArrowRight></i>
            </a>
        </div>
    </div>
  )
}

export default QualityData