import React from "react";
import "../App.css";
import ProductsList from "./productsList";
import Basket from "./basket";
import Header from "./header";
import { MainContainer,BasketAndProductListContainer } from './containerStyle'
function Contaner() {
  return (
    <MainContainer>
      <Header />
      <BasketAndProductListContainer>
        <Basket />
        <ProductsList />
      </BasketAndProductListContainer>
    </MainContainer>
  );
}
export default Contaner;
