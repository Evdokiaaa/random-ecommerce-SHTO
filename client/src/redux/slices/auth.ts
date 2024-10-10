import { IAuth } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuth = {
  isAuth: false,
  isLoading: false,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
