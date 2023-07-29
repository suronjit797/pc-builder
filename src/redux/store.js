import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import categoryReducer from "./features/category/category";

export const store = configureStore({
  reducer: {
    category: categoryReducer,

    // [api.reducerPath]: api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
  
});
