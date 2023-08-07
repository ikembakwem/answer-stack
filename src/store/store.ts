import questionsReducer from "./questionSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
