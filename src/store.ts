import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customer/customerSlice";
import selectedCustomerReducer from "./features/selectedCustomer/selectedCustomer";
import customerImageReducer from "./features/customerImage/customerImageSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    selectedCustomer: selectedCustomerReducer,
    customerImage: customerImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
