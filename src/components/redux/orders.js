import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const OrdersSlice = createSlice({
    name: "orders",
    initialState: {
      loading: "idle",
      orders: [],
    },
    reducers: {
        ordersLoading(state) {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      },
      ordersReceived(state, action) {
        

        if (state.loading === "pending") {
          state.loading = "idle";
          state.orders = action.payload.slice(0, 200);
        }
      },
    },
  });
  
  export const { ordersLoading, ordersReceived } = OrdersSlice.actions;
  
  export const fetchOrders = () => async (dispatch) => {
    dispatch(ordersLoading(null));
    const response = await axios.get("http://localhost:3000/orders");
    dispatch(ordersReceived(await response.data));
  };
  
  export default OrdersSlice.reducer;