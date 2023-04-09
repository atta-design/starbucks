import React from "react";
import "../../App.css";
import ProductsList from "../productList/productsList";
import Basket from "../basket/basket";
import Header from "../header/header";
import { MainContainer,BasketAndProductListContainer } from './containerStyle'
import { Routes,Route } from "react-router-dom";
function Contaner() {
  return (
    <MainContainer>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Mainpage</h1>}/>
        <Route path="/productList" element={  <BasketAndProductListContainer>
        <Basket />
        <ProductsList />
      </BasketAndProductListContainer>} />
      <Route path="/" element={<h1>coapration</h1>}/>
    
      </Routes>
    </MainContainer>
  );
}
export default Contaner;
