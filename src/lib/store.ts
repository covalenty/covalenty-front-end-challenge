import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/ProductState/ProductSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      selected: ProductSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
