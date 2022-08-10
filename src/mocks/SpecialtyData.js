import React from 'react'

const Data = [
    {
        id: 1,
        image: require('../assets/image/specialty-1.png'),
        title: 'Selected Coffee',
        description: 'We select the best premium coffee, for a true taste.'
    },
    {
        id: 2,
        image: require('../assets/image/specialty-2.png'),
        title: 'Delicious Bread',
        description: 'Enjoy your tea with some hot breads.'
    },
    {
        id: 3,
        image: require('../assets/image/specialty-3.png'),
        title: 'Selected Tea',
        description: 'We select the best premium tea, for a true taste.'
    }, 
    {
        id: 4,
        image: require('../assets/image/specialty-4.png'),
        title: 'Delicious Cookies',
        description: 'Enjoy your coffee with some hot cookies.'
    }
]

const SpecialtyData = () => {
  return (
    <div className='specialty__category'>
        {Data.map(({id, image, title, description}) => {
            return(
                <div key={id} className='specialty__group specialty__line'>
                    <img src={image} alt='' className='specialty__img'></img>
                    <h3 className='specialty__title'>{title}</h3>
                    <p className='specialty__description'>{description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SpecialtyData