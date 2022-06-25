import React ,{useEffect}from 'react'
import { useSelector, useDispatch } from "react-redux";
import {fetchProducts}from './redux/products'
import { fetchCard } from './redux/basketReducer';
import {ProductCard,ProductName,AllProducts,AddButton,Price,Title} from './productListStyle';
import {add}from './redux/basketReducer'

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
    return (
      <div className='mainList'>
        <AllProducts>
        
            { products.filter((pro)=>pro.category==='frappuccino').map((product)=> <ProductCard><img src={product.poster}/><ProductName>{product.title}
            </ProductName><Price>{product.price}تومان</Price>
            <AddButton onClick={() => dispatch(add({ id: product.id }))} >افزودن به سبد</AddButton> </ProductCard> )}
         
        </AllProducts>
        <AllProducts>
        { products.filter((pro)=>pro.category==='breakfast').map((product)=> <ProductCard><img src={product.poster}/><ProductName>{product.title}
            </ProductName><Price>{product.price}تومان</Price>
            <AddButton onClick={() => dispatch(add({ id: product.id }))} >افزودن به سبد</AddButton> </ProductCard> )}
        </AllProducts>
        
        </div>
    )
}
export default ProductsList
