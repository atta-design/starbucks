import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./categories";
import OrdersSlice from "./orders";
import usersSlice from "./userInformation";
import ProductsSlice from "./products";
import BasketReducer from "./basketReducer"


export const store = configureStore({
    reducer: {
    users:usersSlice,
    orders:OrdersSlice,
    categories:CategoriesSlice,
    products:ProductsSlice,
    shopReducer:BasketReducer

    },
  });
