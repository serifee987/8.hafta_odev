import React, { useEffect, useState } from 'react'
import Product from './Product';


function Categories({basket,setBasket,product}) {




    return (
        <>
        <div style={{textAlign:'center',fontFamily:'cursive'}}>
            <h5>KATEGORİLER</h5>
            <button  type="button" className="btn btn-light">Kazaziye</button>
            <button  type="button" className="btn btn-light">Mengene Örgüsü</button>
            <button  type="button" className="btn btn-light">Nakış Takı</button>

        </div>
        <div>
      
      </div>

        </>

    )
}

export default Categories