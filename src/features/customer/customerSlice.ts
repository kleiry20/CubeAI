import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../utils/Customer";
import { initialData } from "../../data/initialData";

export interface CustomerSlice {
  data: Customer[];
}

const initialState: CustomerSlice = {
  data: initialData,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
});

// export const { increment } = customerSlice.actions;
export default customerSlice.reducer;
