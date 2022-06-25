import React from 'react'
import '../App.css'
import ProductsList from './productsList'
import Basket from './basket'
import Header from './header'
import Title from './title'
 function Contaner() {
    return (
        <div className='container'>
            <Header/>
             <div className='main' >
             <Title/>
            <Basket/>
            <ProductsList/>
           </div>
            
        </div>
    )
}
export default Contaner