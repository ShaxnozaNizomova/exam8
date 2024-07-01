import { configureStore, createSlice } from "@reduxjs/toolkit";
import { api } from "./api/index";
import wishlistSlice from './wishlistSlice'
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});