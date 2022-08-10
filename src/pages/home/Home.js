import React from 'react'
import './Home.css'
import Image from '../../assets/image/home.jpg'
import HomeData from '../../components/HomeData'

const Home = () => {
  return (
    <section className='home grid' id='home'>
        <div className='home__container'>
            <div className='home__content container'>
                <h1 className='home__title'>
                Choose your favorite bread, tea or coffee and enjoy<span>.</span>
                </h1>
                <p className='home__description'>
                Buy the best and delicious breads, teas and coffees.
                </p>
                <HomeData></HomeData>
            </div>
        </div>

        <img src={Image} alt='' className='home__img'></img>

    </section>
  )
}

export default Home