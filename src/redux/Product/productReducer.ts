import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./productOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

interface State {
  products: Product[] | [];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllProducts.pending, pending)
      .addCase(getAllProducts.rejected, rejected)
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.products = payload.products;
      }),
});

export default productsSlice.reducer;
