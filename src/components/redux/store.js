import { configureStore,combineReducers } from "@reduxjs/toolkit";
import CategoriesSlice from "./categories";
import OrdersSlice from "./orders";
import usersSlice from "./userInformation";
import ProductsSlice from "./products";
import Mreducer from "./basketReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";



// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: {
    users:usersSlice,
    orders:OrdersSlice,
    categories:CategoriesSlice,
    products:ProductsSlice,
    shopreducer:Mreducer

    },
  });
  console.log()