import React from 'react'

function Product({ product, basket, setBasket }) {
    const basketProduct = basket.find(item => item.id === product.id);
    function addBasket() {
        const addFind = basket.find(item => item.id === product.id)
        if (addFind) {
            addFind.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: addFind.amount
            }])
        }
        else {
            setBasket([...basket, {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: 1
            }])
        }
    }
    function removeBasket() {
        const removeFind = basket.find(item => item.id === product.id);
        removeFind.amount -= 1;
        if (removeFind.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])
        }
        else {
            setBasket([...basket.filter(item => item.id !== product.id), {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: removeFind.amount
            }])
        }
    }
    return (
        <div style={{ float: 'left', margin: '30px', border: '3px ridge', borderRadius: '10px' }}>
            <img src={product.img}
                style={{ border: '5px outset ', borderRadius: '10px', width: '225px', height: '200px' }} />
            <p style={{ fontFamily: 'cursive', paddingLeft: '5px', paddingTop: '5px' }}>{product.name}</p>
            <p style={{ fontFamily: 'cursive', paddingLeft: '5px' }}>{product.price} TL</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    disabled={!basketProduct}
                    onClick={removeBasket}
                    style={{ border: 'none', borderRadius: '8px', fontSize: '14px' }}>-</button>
                <b style={{ fontSize: '12px' }}>{basketProduct && basketProduct.amount || 0} </b>
                <button
                    onClick={addBasket}
                    style={{ border: 'none', borderRadius: '8px', fontSize: '13px' }}>+</button>
            </div>
        </div>
    )
}

export default Product