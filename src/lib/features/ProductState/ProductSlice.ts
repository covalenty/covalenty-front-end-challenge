"use client";

import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState } from "./type";

const initialState: IProductState = {
  selectedProduct: null,
};

export const ProductSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    remove: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { add, remove } = ProductSlice.actions;
export default ProductSlice.reducer;
