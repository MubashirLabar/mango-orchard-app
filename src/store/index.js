import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./reducers/authReducer";

const Store = configureStore({
  reducer: {
    authReducer: authReducer,
  },
});

setupListeners(Store.dispatch);

export default Store;
