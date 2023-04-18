import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quote: {
    _id: "",
    content: "Loading..............",
    author: "Loading.....",
    authorSlug: "",
    length: 0,
    tags: [],
    bookmarked: false,
  },
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
