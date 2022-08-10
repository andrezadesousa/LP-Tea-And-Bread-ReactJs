import React from 'react'

const ProductsFilter = ({item, filterItem, total}) => {
  return (
    <ul className="products__filters" >
    {item.map((Val)=>(
      <li  className="products__item products__line active-product" onClick={() => filterItem(Val)}>
        <h3 class="products__title">{Val.title}</h3>
        <span class="products__stock">
          {total.filter((newVal) => {
              return newVal.group === Val.id;
          }).length} products
        </span>
      </li>
    ))}</ul>
  )
}

export default ProductsFilter