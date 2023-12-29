import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    location: "Uzbekistan",
    cost: 50000,
  },
];

export const testSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    addHouse: (state, action) => [
      ...state,
      { id: new Date().valueOf(), ...action.payload },
    ],
  },
});

export const { addHouse } = testSlice.actions;

export default testSlice.reducer;
