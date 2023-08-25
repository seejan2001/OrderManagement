import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Enums = Object.freeze({
  IDLE: "idle",
  LOADING: "Loading",
  ERROR: "error",
});

const foodslice = createSlice({
  name: "food",
  initialState: {
    data: [],
    status: Enums.IDLE,
    cart_data: [],
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    fetchProduct(state, action) {
      state.data = action.payload;
    },
    addInsideCart(state, action) {
      console.log(action.payload);
      state.cart_data.push(action.payload);
    },
  },
});

export const { setStatus, fetchProduct, addInsideCart } = foodslice.actions;
export default foodslice.reducer;

//Thunk middleWare
export function fetchData() {
  return async function fetchDataFromApi(dispatch, getState) {
    dispatch(setStatus(Enums.LOADING));
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch(fetchProduct(response.data));
      dispatch(setStatus(Enums.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(Enums.ERROR));
    }
  };
}

// export function setToCart(action) {
//   dispatch(addInsideCart(action));
// }
