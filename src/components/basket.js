import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { BuyBasket,BasketCard,IncrementBtn,DecrementBtn } from './basketStyle'
import {add,decrement,remove}from './redux/basketReducer';
import axios from 'axios';
import '../App.css'
import BuyLogo from './images/Vector (5).svg';
import BuyLogo1 from './images/Vector (6).svg';
 function Basket() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.shopreducer.card);
  sessionStorage.setItem("cardItems", JSON.stringify(card))
  const itemsprice=card.reduce((a,c)=>a+c.price*c.qty ,0);
const tax=itemsprice*0.09
const totalprice=itemsprice+tax

const handleSend = () => {
  axios.patch(`http://localhost:3000/orders/1`,{
 userId:2,
 
  })
    axios
      .post(`http://localhost:3000/orders`, {

      
         productId: 12,
          quantity: 23
       
       
        
      })
      .catch((err) => alert(err));
      
  
}

  console.log(sessionStorage.getItem('cardItems'))
    return (
      <div>
        <BuyBasket >
          {card.length!==0?<div>{card.map((item)=><BasketCard>{item.title}<div className='priceBox'><span>تومان{item.price}</span></div><div>
            <div className='quantityBox'>
            <IncrementBtn onClick={() => dispatch(add({ id: item.id }))}>+</IncrementBtn>
          <div> &nbsp;&nbsp;{item.qty===0?dispatch(remove({ id: item.id })):item.qty}&nbsp;&nbsp;</div> 
             <DecrementBtn onClick={() => dispatch(decrement({ id: item.id }))}>-</DecrementBtn>
             </div>
            </div>
          </BasketCard>)}</div>:<div><div className='BasketLogoContainer'><img src={BuyLogo} className='basketLogo'/><img className='basketLogo2' src={BuyLogo1}/></div><h1 className='nullBasket'>سبد  خرید شما خالی است</h1></div>}
          
           
           <div>
        {card.length!==0&&<BasketCard><div><span className='bill'><span>تومان</span>{itemsprice}</span>:مجموع</div>
<div><span className='bill'><span>تومان</span>{tax}</span>:مالیات</div>
<div><span className='bill'><span>تومان</span>{totalprice}</span>: قابل پرداخت</div><button className='send' onClick={handleSend} >نهایی کردن سفارش </button></BasketCard>}
</div>
        </BuyBasket>
       
        </div>
    )
}
export default Basket
