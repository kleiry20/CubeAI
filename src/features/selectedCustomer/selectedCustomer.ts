import { CustomerSlice } from "./../customer/customerSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../../utils/Customer";
import { initialData } from "../../data/initialData";

export interface selectedCustomerSlice {
  selectedCustomer: Customer;
}

const initialState: selectedCustomerSlice = {
  // selectedCustomer: {
  //   id: 1,
  //   name: "Lorem",
  //   title:
  //     "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus",
  //   address: "Hi",
  //   picsArr: [{ url: "nahi pata" }],
  // },
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
