export const searchUrls = {
    quickSearch:  "api/v2/search/quick-search",
    search:       "api/v1/search/search",
  };
  
  export const authUrls = {
    signin:   "api/v1/auth/login",
    signup:   "api/v1/auth/register",
    userInfo: "api/v1/auth/info",
  };
  
  export const wordCollectionUrls = {
    allCollections:     "api/v1/words/collections",
    markWord:           "api/v1/words/marking",
    folderCollections:  "api/v1/words/folders", // folder CRUD
    addWordToFolder:    "api/v1/words/word-folder/add",
    removeWordToFolder: "api/v1/words/word-folder/remove",
    moveWordFolder:     "api/v1/words/word-folder/moving",
  };
  
  export const wordNoteUrls = {
    notes: "api/v1/words/notes",
  }