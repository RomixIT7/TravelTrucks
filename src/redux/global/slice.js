import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  error: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const globalReducer = globalSlice.reducer;
