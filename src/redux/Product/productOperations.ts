import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsAPI } from "../../service/API/productsApi";
// import { toast } from "react-toastify";

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

interface Payload {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ErrorResponse {
  message: string;
}

export const getAllProducts = createAsyncThunk<
  Payload,
  void,
  { rejectValue: ErrorResponse }
>("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const data = await getAllProductsAPI();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ message: error.message });
    }
  }
});
