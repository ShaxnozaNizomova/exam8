import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
        toast.success("Добавлено в корзину");
      } else if (state.value[index].quantity === 1) {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
        toast.error("Удалено из корзины");
      } else {
        state.value[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incrementCartQuantity(state, action) {
      let index = state.value?.findIndex((el) => el.id === action.payload);
      state.value = state.value?.map((item, inx) => {
        if (index === inx) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    decrementCartQuantity(state, action) {
      let index = state.value?.findIndex((el) => el.id === action.payload);
      state.value = state.value?.map((item, inx) => {
        if (index === inx) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeItemFromCart(state, action) {
      state.value = state.value?.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeAllItemsFromCart(state) {
      state.value = [];
      localStorage.removeItem("carts");
    },
  },
});

export const {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeAllItemsFromCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
