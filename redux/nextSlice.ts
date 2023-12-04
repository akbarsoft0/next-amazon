"use client";
import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@type";

interface NextState {
  productData: ProductProps[];
  favoriteData: ProductProps[];
  allProducts: ProductProps[];
  userInfo: null | String;
}
const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (p) => p._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (p) => p._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (p) => p._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (p) => p._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (p) => p._id !== action.payload
      );
    },
    deleteFav: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (p) => p._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    resetFav: (state) => {
      state.favoriteData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    allProducts: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  deleteFav,
  resetCart,
  resetFav,
  removeUser,
  addUser,
  allProducts,
} = nextSlice.actions;
export default nextSlice.reducer;
