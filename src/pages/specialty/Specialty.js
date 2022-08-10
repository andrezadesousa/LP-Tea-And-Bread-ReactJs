/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Specialty.css'
import SpecialtyData from '../../mocks/SpecialtyData'

const Specialty = () => {
  return (
    <div className='specialty section container' id='specialty'>
        <div className='specialty__container'>
            <div className='specialty__box'>
                <h2 className='section__title'>Breads, teas and special coffees that make you happy and cheer you up!</h2>
                <div>
                    <a href='#' className='button specialty__button'>See More</a>
                </div>
            </div>
            <SpecialtyData></SpecialtyData>
        </div>
    </div>
  )
}

export default Specialty