import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CustomerImage {
  imageList: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CustomerImage = {
  imageList: [],
  status: "idle",
  error: null,
};

export const fetchCustomerImages: any = createAsyncThunk(
  "customerImage/fetchCustomerImages",

  async (idx: number) => {
    const response = await axios.get(
      `https://randomuser.me/api/?results=9&page=${idx}`
    );

    return response.data.results;
  }
);

const customerImageSlice = createSlice({
  name: "customerImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomerImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.imageList = action.payload;
      })
      .addCase(fetchCustomerImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch images";
      });
  },
});

export default customerImageSlice.reducer;
