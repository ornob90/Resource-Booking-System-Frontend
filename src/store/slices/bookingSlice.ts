import { createSlice } from "@reduxjs/toolkit";

interface BookingSliceInititalState {
  fetched: boolean;
}

const initialState: BookingSliceInititalState = {
  fetched: false,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
