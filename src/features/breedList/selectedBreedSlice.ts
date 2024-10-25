import { createSlice } from "@reduxjs/toolkit";

type SelectedBreed = {
  selectedBreed: string;
};

const initialState: SelectedBreed = {
  selectedBreed: "african",
};

const selectedBreedSlice = createSlice({
  name: "selectedBreed",
  initialState,
  reducers: {
    setSelectedBreed(state, action) {
      state.selectedBreed = action.payload;
    },
  },
});

export const { setSelectedBreed } = selectedBreedSlice.actions;
export default selectedBreedSlice.reducer;
