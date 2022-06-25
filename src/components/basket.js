import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { BuyBasket,BasketCard,IncrementBtn,DecrementBtn } from './basketStyle'
import {add,decrement,remove}from './redux/basketReducer';
import axios from 'axios';
import '../App.css'
 function Basket() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.shopreducer.card);
  localStorage.setItem("cardItems", JSON.stringify(card))
  const itemsprice=card.reduce((a,c)=>a+c.price*c.qty ,0);
const tax=itemsprice*0.09
const totalprice=itemsprice+tax

const handleSend = () => {
  axios.patch(`http://localhost:3000/orders/1`,{
 userId:2,
 productId: 12,
     quantity: 73
  })
    // axios
    //   .patch(`http://localhost:3000/orders/1`, {

      

      
    //     userId: 2,
    //      productId: 12,
    //       quantity: 23
       
           
         
       
       
        

        
        
    //   })
      .catch((err) => alert(err));
      
  
}
let vars=localStorage.getItem('cardItems')
let cardItems=JSON.parse(vars)
  console.log(localStorage.getItem('cardItems'))
    return (
      <div>
        <BuyBasket >
          {cardItems.length!==0?<div>{cardItems.map((item)=><BasketCard>{item.title}<div className='priceBox'><span>تومان{item.price}</span></div><div>
            <div className='quantityBox'>
            <IncrementBtn onClick={() => dispatch(add({ id: item.id }))}>+</IncrementBtn>
          <div> {item.qty===0?dispatch(remove({ id: item.id })):item.qty}</div> 
             <DecrementBtn onClick={() => dispatch(decrement({ id: item.id }))}>-</DecrementBtn>
             </div>
            </div>
          </BasketCard>)}</div>:<h1 className='nullBasket'>سبد  خرید شما خالی است</h1>}
          
           
           <div>
        {cardItems.length!==0&&<BasketCard><p>{itemsprice}:مجموع</p>
<p>{tax}:مالیات</p>
<p>{totalprice}:قابل پرداخت</p><button className='send' onClick={handleSend} >نهایی کردن سفارش </button></BasketCard>}
</div>
        </BuyBasket>
       
        </div>
    )
}
export default Basket
