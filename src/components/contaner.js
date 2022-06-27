import React from 'react'
import '../App.css'
import ProductsList from './productsList'
import Basket from './basket'
import Header from './header'
 function Contaner() {
    return (
        <div className='container'>
            <Header/>
             <div className='main' >
           
             <hr/>
            <Basket/>
            <ProductsList/>
           </div>
            
        </div>
    )
}
export default Contaner