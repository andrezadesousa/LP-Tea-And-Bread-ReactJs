import React from 'react'
import {TbPaperBag} from 'react-icons/tb'

const ProductsGrid = ({ item }) => {
  return (
    <div className="products__content grid">
        {item.map((Val)=>(
        <article key={Val.id} className="products__card">
            <div className="products__shape">
                <img src={Val.img} alt="" className="products__img"/>
            </div>

            <div className="products__data">
                <h2 className="products__price">{Val.price}</h2>
                <h3 className="products__name">{Val.name}</h3>

                <button className="button products__button">
                    <i><TbPaperBag></TbPaperBag></i>
                </button>
            </div>
        </article>
        ))}
    </div>
  )
}

export default ProductsGrid