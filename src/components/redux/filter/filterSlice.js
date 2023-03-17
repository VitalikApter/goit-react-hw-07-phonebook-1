import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './filterInitialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChangeAction: (_, {payload}) => payload,
  },
});

export const filterReducer = filterSlice.reducer;

export const {filterChangeAction} = filterSlice.actions;