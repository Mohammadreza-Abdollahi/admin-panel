import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialogIsOpen: false,
};

const colorsSlice = createSlice({
  name: "ColorsSlice",
  initialState,
  reducers: {
    openCloseDialog: (state) => {
      state.dialogIsOpen = !state.dialogIsOpen;
    },
  },
});

export default colorsSlice.reducer;

export const { openCloseDialog } = colorsSlice.actions;
