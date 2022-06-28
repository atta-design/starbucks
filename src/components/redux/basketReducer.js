import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const BasketReducer = createSlice({
  name: "myreducer",
  initialState: {
    loading: "idle",
    orders: [],
    card: [],
  },
  reducers: {
    ordersLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    // resicve items from json server
    resicve(state, action) {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.orders = action.payload.slice(0, 200);
      }
    },

    add: (state, action) => {
      const item = state.orders.find((pro) => pro.id === action.payload.id);
      const incard = state.card.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        card: incard
          ? state.card.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.card, { ...item, qty: 1 }],
      };
    },

    decrement: (state, action) => {
      const item = state.orders.find((pro) => pro.id === action.payload.id);
      const incard = state.card.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        card: incard
          ? state.card.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
          : [...state.card, { ...item, qty: 1 }],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const { resicve, ordersLoading, add, decrement, remove } =BasketReducer.actions;

export const fetchCard = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/products");
  dispatch(ordersLoading(null));
  dispatch(resicve(await response.data));
};
export default BasketReducer.reducer;
