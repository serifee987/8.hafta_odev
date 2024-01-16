import React from 'react'

function Basket({ basket, cost }) {
    return (
        <>
            <div >
                <div>    <h5>Sepetim</h5>
                    {
                        basket.map(item => (
                            <div key={item.id}>
                                <img width="100" src={item.img} />
                                <p>{item.name}x{item.amount}</p>
                                <p>{item.price * item.amount} TL</p>
                            </div>
                        ))
                    }

                </div>
                
                 <p>Toplam Fiyat: {cost}</p>


            </div>



        </>
    )
}

export default Basket