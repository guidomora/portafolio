import { configureStore } from "@reduxjs/toolkit";
import { langSlice } from "./language/langSlice";

export const store = configureStore({
  reducer: {
    lang: langSlice.reducer
  },
});