import React ,{useEffect}from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchProducts}from './redux/products'
import { fetchCard } from './redux/basketReducer';
import {ProductCard,ProductName,AllProducts,AddButton,Price,Title,Line} from './productListStyle';
import {add}from './redux/basketReducer'
import '../App.css'
import { CircularProgress } from '@mui/material';
 function ProductsList() {
    const products = useSelector((state) => state.products.products);
    const dispatch =useDispatch()
    useEffect(() => {
        setTimeout(() => {
          dispatch(fetchProducts());
         
        }, 2000);
      }, [dispatch]);
      useEffect(() => {
        setTimeout(() => {
          dispatch(fetchCard());
         
        }, 2000);
      }, [dispatch]);
      console.log(products)
    return (
      <div className='mainList'> 
      
   {products.length!==0?<div>
        <AllProducts>
     <p className='az'>میکس فاراپاچینو  <Line/> 
</p>

            { products.filter((pro)=>pro.category==='frappuccino').map((product,index)=> <ProductCard className='parent_class'><img src={product.poster}/><ProductName>{product.title}
            </ProductName><Price><span>تومان</span><span>{product.price}</span></Price>
            <AddButton onClick={() => dispatch(add({ id: product.id }))} >افزودن به سبد</AddButton>{console.log(index)} </ProductCard> 
            )}
        </AllProducts>
        <AllProducts>
        <p className='az'>صبحانه<Line/> </p>
        { products.filter((pro)=>pro.category==='breakfast').map((product)=> <ProductCard className='parent_class'><img src={product.poster}/><ProductName>{product.title}
            </ProductName><Price> <span>تومان</span><span>{product.price}</span></Price>
            <AddButton onClick={() => dispatch(add({ id: product.id }))} >افزودن به سبد</AddButton> </ProductCard> )}
            
        </AllProducts>
        </div>:<CircularProgress/>}  
        </div>
    )
}
export default ProductsList
