import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quote: {
    _id: "",
    content: "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
    author: "Woodrow Wilson",
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
