/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiOutlineArrowRight, AiFillHeart, AiOutlineComment, AiOutlineEye} from 'react-icons/ai'

const Data = [
    {
        id: 1,
        image: require('../assets/image/about-1.png'),
        icon: <AiOutlineArrowRight></AiOutlineArrowRight>,
        title: 'Tea & Breads is more than a passion',
        desc: 'A &#169; Tea & Breads was born from the passion for artisan breads accompanied by delicious teas and coffees...',
        heart: <AiFillHeart></AiFillHeart>,
        spanH: '4k',
        comment: <AiOutlineComment></AiOutlineComment>,
        spanC: '1k',
        show: <AiOutlineEye></AiOutlineEye>,
        spanS: '6k'
    },
    {
        id: 2,
        image: require('../assets/image/about-2.jpg'),
        icon: <AiOutlineArrowRight></AiOutlineArrowRight>,
        title: 'Learn how to make delicious bread',
        desc: 'The recipe is very simple and everyone can make it at home! You will need ...',
        heart: <AiFillHeart></AiFillHeart>,
        spanH: '9k',
        comment: <AiOutlineComment></AiOutlineComment>,
        spanC: '6k',
        show: <AiOutlineEye></AiOutlineEye>,
        spanS: '15k'
    }
]

const AboutData = () => {
  return (
    <div className='about__content grid'>
        {Data.map(({id, image, icon, title, desc, heart, spanH, comment, spanC, show, spanS}) => {
            return(
                <article key={id} className='about__card'>
                    <div className='about__image'>
                        <img src={image} alt='' className='about__img'></img>
                        <a href='#' className='about__button'>
                            <i>{icon}</i>
                        </a>
                    </div>

                    <div className='about__data'>
                        <h2 className='about__title'>{title}</h2>
                        <p className='about__description'>{desc}</p>
                        <div className='about__footer'>
                            <div className='about__reaction'>
                                <i>{heart}</i>
                                <span>{spanH}</span>
                            </div>
                            <div className='about__reaction'>
                                <i>{comment}</i>
                                <span>{spanC}</span>
                            </div>
                            <div className='about__reaction'>
                                <i>{show}</i>
                                <span>{spanS}</span>
                            </div>
                        </div>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default AboutData