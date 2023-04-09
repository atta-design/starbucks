import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/products";
import { fetchCard } from "../../redux/basketReducer";
import {
  ProductCard,
  ProductName,
  ProductCardsContainer,
  AddButton,
  Price,
  Title,
  Line,
  ProgressSpinnerContainer,
} from "./productListStyle";
import { add } from "../../redux/basketReducer";
import "../../App.css";
import { CircularProgress } from "@mui/material";
function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
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
    <>
      {products.length !== 0 ? (
        <div>
          <ProductCardsContainer>
            <Title>
              میکس فاراپاچینو <Line />
            </Title>

            {products
              .filter((pro) => pro.category === "frappuccino")
              .map((product) => (
                <ProductCard key={product.id} className="parent_class">
                  <img src={product.poster} alt="product poster" />
                  <ProductName>{product.title}</ProductName>
                  <Price>
                    <span>تومان</span>
                    <span>{product.price}</span>
                  </Price>
                  <AddButton onClick={() => dispatch(add({ id: product.id }))}>
                    افزودن به سبد
                  </AddButton>{" "}
                </ProductCard>
              ))}
          </ProductCardsContainer>
          <ProductCardsContainer>
            <Title>
              میکس صبحانه
              <Line />
            </Title>
            {products
              .filter((product) => product.category === "breakfast")
              .map((product) => (
                <ProductCard key={product.id} className="parent_class">
                  <img src={product.poster} alt="product poster" />
                  <ProductName>{product.title}</ProductName>
                  <Price>
                    {" "}
                    <span>تومان</span>
                    <span>{product.price}</span>
                  </Price>
                  <AddButton onClick={() => dispatch(add({ id: product.id }))}>
                    افزودن به سبد
                  </AddButton>{" "}
                </ProductCard>
              ))}
          </ProductCardsContainer>
        </div>
      ) : (
        <div>
          <ProgressSpinnerContainer>
            <CircularProgress size="10rem" />
          </ProgressSpinnerContainer>
        </div>
      )}
    </>
  );
}
export default ProductsList;
