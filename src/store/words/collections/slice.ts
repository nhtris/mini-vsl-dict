import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionResponseData } from "@/types/responses/collection-responses";

export interface CollectionFolder {
  id: string;
  name: string;
  words: string[];
  isTypingChoiced?: boolean;
}

export interface WordCollectionState {
  markedWords: string[];
  folders: CollectionFolder[];
}

const initialState: WordCollectionState = {
  markedWords: [],
  folders: [],
};

const wordCollectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection(state, action: PayloadAction<CollectionResponseData>) {
      state.markedWords = action.payload.markedWords;
      state.folders = action.payload.folders;
    },
    setMarkedWords(state, action: PayloadAction<string[]>) {
      state.markedWords = action.payload;
    },

    updateFolderWithConstId(
      state,
      action: PayloadAction<{ newFolder: CollectionFolder }>,
    ) {
      const newFolder = action.payload.newFolder;
      const folderIndex = state.folders.findIndex(
        (folder) => folder.id === newFolder.id,
      );
      if (folderIndex !== -1) {
        state.folders[folderIndex] = newFolder;
      }
    },

    deleteFolderWithId(state, action: PayloadAction<string>) {
      const folderId = action.payload;
      const folderIndex = state.folders.findIndex(
        (folder) => folder.id === folderId,
      );
      if (folderIndex !== -1) {
        state.folders.splice(folderIndex, 1);
      }
    },

    choiceAllToTyping(state) {
      state.folders.forEach((folder) => {
        folder.isTypingChoiced = true;
      });
    },

    choiceNoneToTyping(state) {
      state.folders.forEach((folder) => {
        folder.isTypingChoiced = false;
      });
    },
  },
});

const wordCollectionReducer = wordCollectionSlice.reducer;
export default wordCollectionReducer;

export const {
  setCollection,
  setMarkedWords,
  updateFolderWithConstId,
  deleteFolderWithId,
  choiceAllToTyping,
  choiceNoneToTyping,
} = wordCollectionSlice.actions;
