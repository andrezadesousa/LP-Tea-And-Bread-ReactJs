import React, { useState }  from 'react'
import './Products.css'
import Data from '../../mocks/ProductsData'
import Category from '../../mocks/ProductsCategory'
import ProductsFilter from '../../components/ProductsFilter'
import ProductsGrid from '../../components/ProductsGrid'

const Products = () => {

    const [item, setItem] = useState(Data);
    const [category] = useState(Category);

    const menuItems = [...new Set(Data.map((Val) => Val.group))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
          return newVal.group === curcat.id;
        });
        setItem(newItem);
        console.log('HELP', curcat)
    };

  return (
    <section className='products section' id='products'>
        <div className='products__container container'>
            <h2 className='section__title'>Choose our delicious and best products</h2>
            <ProductsFilter filterItem={filterItem} menuItems={menuItems} item={category} total={Data}></ProductsFilter>
            <ProductsGrid item={item}></ProductsGrid>
        </div>
    </section>
  )
}

export default Products