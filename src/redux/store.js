import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import productReducer from "./Product/productReducer";


const productsPersistConfig = {
  key: "products",
  storage,
};

const persistedReducerProducts = persistReducer(
  productsPersistConfig,
  productReducer
);


export const store = configureStore({
  reducer: {
    products: persistedReducerProducts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
