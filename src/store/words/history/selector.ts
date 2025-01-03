import { createSelector } from "@reduxjs/toolkit";
import { WordsHistoryState } from "./slice";

const selectWordsHistory = (state: { history: WordsHistoryState }) =>
  state.history.words;

export const selectorWordHistory = createSelector(
  selectWordsHistory,
  (words) => words,
);

export const selectHistoryWordTexts = createSelector(
  selectWordsHistory,
  (words) => words.map((word) => word.eng),
);
