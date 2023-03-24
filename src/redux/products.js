import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
      loading: "idle",
      products: [],
    },
    reducers: {
      
        productsLoading(state) {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      },
      productsReceived(state, action) {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.products = action.payload.slice(0, 200);
        }
      },
    },
  });
  
  export const { productsLoading, productsReceived } = ProductsSlice.actions;
  
  export const fetchProducts = () => async (dispatch) => {
    dispatch(productsLoading(null));
    const response = await axios.get("http://localhost:3000/products");
    dispatch(productsReceived(await response.data));
  };
  
  export default ProductsSlice.reducer;