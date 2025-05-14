import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},

  //   extraReducers: (builder) => {
  //     // Add any additional reducers here if needed
  //   },
});

export const {} = appSlice.actions;
export default appSlice.reducer;
