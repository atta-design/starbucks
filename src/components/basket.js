import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BasketContainer,
  BasketCard,
  IncrementBtnAndDecrementBtn,
  Bill,
  SendButton,
  NullBasket,
  BasketLogoContainer,
  PriceBox,
  QuantityBox,
} from "./basketStyle";
import { Line } from "./productListStyle";
import { add, decrement, remove } from "../redux/basketReducer";
import axios from "axios";
import "../App.css";
import BasketLogo from "../images/Vector (5).svg";
import BasketLogo2 from "../images/Vector (6).svg";
import IncrementIcon from "../images/+.svg";
import DecremrntIcon from "../images/- (1).svg";
function Basket() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.shopReducer.card);
  const itemsPrice = card.reduce((a, c) => a + c.price * c.qty, 0);
  const tax = itemsPrice * 0.09;
  const totalPrice = itemsPrice + tax;
  // const card2 = useSelector((state) => state.shopReducer);
// console.log(card2)
  // post bought items to json-server

  const handleSend = () => {
    card.map(
      (item) =>
        axios
          .post(`http://localhost:3000/orders`, {
            quantity: item.qty,
            productId: item.id,
            userId: localStorage.getItem("login"),
          })
          .catch((err) => alert(err)) && dispatch(remove({ id: item.id }))
    );
  };
  return (
    <div>
      <BasketContainer>
        {card.length !== 0 ? (
          <div>
            {card.map((item) => (
              <BasketCard key={item.id}>
                {item.title}
                <PriceBox>
                  <span>تومان</span>
                  <span>{item.price}</span>
                </PriceBox>
                <div>
                  <QuantityBox>
                    <IncrementBtnAndDecrementBtn
                      onClick={() => dispatch(add({ id: item.id }))}
                    >
                      <img
                        src={IncrementIcon}
                        alt="IncrementIcon"
                        className="quantityIcons"
                      />
                    </IncrementBtnAndDecrementBtn>
                    <div>
                      {" "}
                      &nbsp;&nbsp;
                      {item.qty === 0
                        ? dispatch(remove({ id: item.id }))
                        : item.qty}
                      &nbsp;&nbsp;
                    </div>
                    <IncrementBtnAndDecrementBtn
                      onClick={() => dispatch(decrement({ id: item.id }))}
                    >
                      <img
                        src={DecremrntIcon}
                        alt="IncrementIcon"
                        className="quantityIcons"
                      />
                    </IncrementBtnAndDecrementBtn>
                  </QuantityBox>
                </div>
              </BasketCard>
            ))}
          </div>
        ) : (
          <div>
            <BasketLogoContainer>
              <img src={BasketLogo} alt="BasketLogo" className="basketLogo" />
              <img
                src={BasketLogo2}
                alt="BasketLogo2"
                className="basketLogo2"
              />
            </BasketLogoContainer>
            <NullBasket>سبد خرید شما خالی است</NullBasket>
          </div>
        )}

        <div>
          {card.length !== 0 && (
            <BasketCard>
              <div>
                <Bill>
                  <span>تومان</span>
                  {itemsPrice}
                </Bill>
                :مجموع
              </div>
              <div>
                <Bill>
                  <span>تومان</span>
                  {tax}
                </Bill>
                :مالیات
              </div>
              <Line
                sx={{
                  backgroundColor: "gray",
                  height: "1px",
                  width: "100%",
                  marginBlock: "7px",
                }}
              />

              <div>
                <Bill>
                  <span>تومان</span>
                  {totalPrice}
                </Bill>
                : قابل پرداخت
              </div>
              <SendButton onClick={handleSend}>نهایی کردن سفارش </SendButton>
            </BasketCard>
          )}
        </div>
      </BasketContainer>
    </div>
  );
}
export default Basket;
