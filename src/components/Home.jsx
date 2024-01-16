import React, { useEffect, useState } from 'react'
import Product from './Product'
import products from '../products.json'
import Basket from './Basket'


function Home() {
  const [basket, setBasket] = useState([]);
  const [cost,setCost]=useState();

  useEffect(()=>{
  const totalPrice=basket.reduce((pre,basket)=> 
  pre+(basket.amount*basket.price),0);
  setCost(totalPrice);
  },[basket])
  return (
    <>
      <div className='container'>
        <div>
          {
            products.map(product =>
              (<Product key={product.id} basket={basket} setBasket={setBasket} product={product} />))
          }
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'cursive' }}> 
        <Basket cost={cost} basket={basket}/> </div>
      </div>
    </>
  )
}

export default Home