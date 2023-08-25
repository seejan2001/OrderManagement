import { createSlice } from "@reduxjs/toolkit";

const footerslice = createSlice({
  name: "footer",
  initialState: {
    info: 1,
  },
  reducers: {
    setFooterInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setFooterInfo } = footerslice.actions;
export default footerslice.reducer;
