import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    characters: [],
    character: {},
    paging: {
        limit: 10,
        offset: 0,
        totalElements: 0,
      }
  };

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharactersRequest: state => {
      state.loading = true;
    },
  }
})

export const { 
    getCharactersRequest, 
} = charactersSlice.actions

export default charactersSlice.reducer;