import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

 const Data = [
    {
        id: 1,
        subtitle: 'Address',
        info: '12345 Av. Paulista',
        secondInfo: 'Bela Vista, São Paulo'
    },
    {
        id: 2,
        subtitle: 'Contact',
        info: '+987654321',
        secondInfo: 'teaandcoffee@email.com'
    },
    {
        id: 3,
        subtitle: 'Office',
        info: 'Monday - Saturday ',
        secondInfo: '9AM - 20PM'
    }
 ]
const FooterData = () => {
  return (
    <div className='footer__content grid'>
        <div className='footer__data'>
            <p className='footer__description'>Subscribe to our newsletter</p>
            <div className='footer__newsletter'>
                <input type='email' placeholder='Your email address' className='footer__input'></input>
                <button className='footer__button'>
                    <i><AiOutlineArrowRight></AiOutlineArrowRight></i>
                </button>
            </div>
        </div>

        {Data.map(({id, subtitle, info, secondInfo}) => {
            return(
                <div key={id} className='footer__data'>
                    <h2 className='footer__subtitle'>{subtitle}</h2>
                    <p className='footer__information'>
                        {info} <br></br> {secondInfo}
                    </p>
                </div>
            )
        })}
    </div>
  )
}

export default FooterData