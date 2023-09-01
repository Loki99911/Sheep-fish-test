import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProductsAPI,
} from "../../service/API/productsApi";
// import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllProductsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);