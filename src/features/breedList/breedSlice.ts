import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as dogService from "../../services/apiService";

export const fetchBreedList = createAsyncThunk("breedList", async () => {
  const breedList = await dogService.fetchBreedList();
  return breedList.message;
});

export type BreedList = {
  breeds: string | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
};

const initialState: BreedList = {
  breeds: null,
  status: "idle",
  error: undefined,
};

export const breedSlice = createSlice({
  name: "breedList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBreedList.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchBreedList.fulfilled, (state, action) => {
      state.breeds = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchBreedList.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export const selectAllBreeds = (state: RootState) => state.breedList.breeds;
export const selectBreedStatus = (state: RootState) => state.breedList.status;
export default breedSlice.reducer;
