import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    characters: [],
    character: {},
    paging: {
        total: 0,
        page: 0,
        limit: 0,
      }
  };

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {    
    getCharactersRequest: state => {
      state.loading = true;
    },
    getCharactersSucess: (state, { payload }) => {
      state.loading = false;
      state.paging.page = payload.offset;
      state.paging.total = payload.data.data.total;
      state.paging.limit = payload.data.data.limit;
      state.characters = payload.data.data.results;
    }, 
    getProfileRequest: state => {
      state.loading = true;
    },
    getProfileSucess: (state, {payload}) => {
      state.loading = false;
      state.character = payload.data.results[0];
    },
    searchCharactersRequest: state => {
      state.loading = true;
    },   
  }
})

export const { 
    getCharactersRequest,
    getCharactersSucess,
    getProfileRequest,
    getProfileSucess,
    searchCharactersRequest
  } = charactersSlice.actions

export default charactersSlice.reducer;
