import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    esp: true
  },
  reducers: {
    changeLang: (state, {payload}) => {
        state.esp = payload  
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeLang } = langSlice.actions;