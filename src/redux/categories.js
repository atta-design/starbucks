import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CategoriesSlice = createSlice({
  name: "users",
  initialState:[],
   
  

  reducers: {
    usersLoading(state) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    usersReceived(state, action) {
    
        state = action.payload.slice(0, 200);
      
    },
  },
});

export const { usersLoading, usersReceived } = CategoriesSlice.actions;

export const fetchCategories=()=>async(dispatch)=>{
dispatch(usersLoading(null)) 

const response= await axios.get('http://localhost:3000/Categories')
usersReceived()


}
export default CategoriesSlice.reducer;
