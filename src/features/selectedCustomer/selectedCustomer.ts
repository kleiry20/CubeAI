import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../utils/Customer";
import { initialData } from "../../data/initialData";

export interface selectedCustomerSlice {
  selectedCustomer: Customer;
}

const initialState: selectedCustomerSlice = {
  selectedCustomer: initialData[0],
};

const selectedCustomerSlice = createSlice({
  name: "selectedCustomer",
  initialState,
  reducers: {
    updateCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
  },
});

export const { updateCustomer } = selectedCustomerSlice.actions;
export default selectedCustomerSlice.reducer;
