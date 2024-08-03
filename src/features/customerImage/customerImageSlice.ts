import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

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
    let skipValue = 0;
    const response = await axios.get(
      // `https://dummyjson.com/recipes?limit=9&skip=${9 * id}`
      // `https://dummyjson.com/recipes?limit=9&skip=${skipValue * idx}`
      `https://api.pexels.com/v1/search?query=nature&per_page=10`
    );

    console.log("slice", response.data.recipes);
    console.log("url", `${idx}`);

    return response.data.recipes;
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

// export const { getId } = customerImageSlice.actions;
export default customerImageSlice.reducer;
