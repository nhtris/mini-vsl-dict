import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Word from "@/types/words";

const HISTORY_LENGTH = 30;

export interface WordsHistoryState {
  words: Word[];
}

const initialState: WordsHistoryState = {
  words: [],
};

const wordsHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    likeImageWord(state, action: PayloadAction<string>) {
      const imageUrl = action.payload;
      const imageUrls = state.words[0].imageUrls;
      const index = imageUrls.indexOf(imageUrl);
      if (typeof index === "number" && index > -1) {
        imageUrls.splice(index, 1);
        imageUrls.unshift(imageUrl);
      }
      state.words[0].imageUrls = imageUrls;
    },
    dislikeImageWord(state, action: PayloadAction<string>) {
      const imageUrl = action.payload;
      const imageUrls = state.words[0].imageUrls;
      const index = imageUrls.indexOf(imageUrl);
      if (typeof index === "number" && index > -1) {
        imageUrls.splice(index, 1);
        imageUrls.push(imageUrl);
      }
      state.words[0].imageUrls = imageUrls;
    },
    addHistoryWord(state, action: PayloadAction<Word>) {
      const newWord = action.payload;
      if (!state.words) {
        state.words = [newWord];
        return;
      }
      const index = state.words.findIndex((word) => word.eng === newWord.eng);
      if (index > -1) {
        state.words.splice(index, 1);
      }
      state.words = [newWord, ...state.words].slice(0, HISTORY_LENGTH);
    },
    removeHistoryWord(state, action: PayloadAction<string>) {
      const eng = action.payload.toLowerCase();
      const index = state.words.findIndex((w) => w.eng === eng);
      if (index > -1) {
        state.words.splice(index, 1);
      }
    },
  },
});

const wordsHistoryReducer = wordsHistorySlice.reducer;
export default wordsHistoryReducer;

export const {
  addHistoryWord,
  removeHistoryWord,
  likeImageWord,
  dislikeImageWord,
} = wordsHistorySlice.actions;
