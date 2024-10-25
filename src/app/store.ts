import { configureStore } from "@reduxjs/toolkit";
import breedListReducer from "../features/breedList/breedSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    breedList: breedListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();
