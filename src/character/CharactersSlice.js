import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    characters: [],
    character: {},
    paging: {
        total: 0,
        page: 0,
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
      state.paging.page = 0;
      state.paging.total = payload.data.total;
      state.characters = payload.data.results;
    }, 
    getProfileRequest: state => {
      state.loading = true;
    },
    getProfileSucess: (state, {payload}) => {
      state.loading = false;
      state.character = payload.data.results[0];
      console.log('slice character: ', state.character);
    },
    getCharactersNext: state => {
      state.loading = true;
    },
    getCharactersNextSucess: (state, {payload}) => {
      state.loading = false;
      state.paging.page = state.paging.page + 60;
      state.paging.total = payload.data.total;
      state.characters = payload.data.results;
    },
    getCharactersPrev: state => {
      state.loading = true;
    },
    getCharactersPrevSucess: (state, {payload}) => {
      state.loading = false;
      state.paging.page = state.paging.page - 60;
      state.paging.total = payload.data.total;
      state.characters = payload.data.results;
    },
  }
})

export const { 
    getCharactersRequest,
    getCharactersSucess,
    getCharactersNext,
    getCharactersNextSucess,
    getCharactersPrev,
    getCharactersPrevSucess,
    saveSelectedCharacter,
    getProfileRequest,
    getProfileSucess
  } = charactersSlice.actions

export default charactersSlice.reducer;
