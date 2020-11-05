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
    saveSelectedCharacter: (state, {payload}) => {
      console.log('saveSelectedCharacter payload=', payload)
      state.loading = false;
      state.character = payload;      
      console.log('saveSelectedCharacter state=', state.character);
    }
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
} = charactersSlice.actions

export default charactersSlice.reducer;
