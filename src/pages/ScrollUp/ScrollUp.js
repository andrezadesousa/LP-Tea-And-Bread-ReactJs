import React from 'react'
import './ScrollUp.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollUp = () => {

    const Animation = () => {
        function scrollUp(){
            const scrollUp = document.getElementById('scroll-up');
            // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollUp)
    }

  return (
    <>
    <a onClick={Animation} href='#header' className='scrollup' id='scroll-up'>
        <i><AiOutlineArrowUp></AiOutlineArrowUp></i>
    </a>
    </>
  )
}

export default ScrollUp