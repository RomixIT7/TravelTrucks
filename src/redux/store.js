import { configureStore } from "@reduxjs/toolkit";

import { globalReducer } from "./global/slice.js";
import { campersReducer } from "./campers/slice.js";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    campers: campersReducer,
  },
});
