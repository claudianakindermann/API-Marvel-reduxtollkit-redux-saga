import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    characters: [],
    character: {},
    paging: {
        count: 0,
        limit: 0,
        offset: 0,
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
    getChactersSucess: (state, { payload }) => {
      state.paging.count = payload.data.count;
      state.paging.page = state.paging.page + 60;
      state.paging.limit = payload.data.limit;
      state.paging.offset = payload.data.offset;
      state.paging.total = payload.data.total;
      state.characters = payload.data.results;
      // console.log('slice count >>', state.paging.count);
      console.log('slice page >>', state.paging.page);
      // console.log('slice limit >>', state.paging.limit);
      // console.log('slice offset >>', state.paging.offset);
      // console.log('slice total >>', state.paging.total);
      // console.log('slice characters >>', state.characters);
    } 
  }
})

export const { 
    getCharactersRequest,
    getChactersSucess,
} = charactersSlice.actions

export default charactersSlice.reducer;
