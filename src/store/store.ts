import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
// import accountReducer from "./auth/slice";
import wordsHistoryReducer from "./words/history/slice";
import wordCollectionReducer from "./words/collections/slice";
// import typingCountReducer from "./words/typing-count/slice";
// import metaReducer from "./meta/slice";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["meta", "history", "typingCount"], // only history will be persisted
};

const rootReducer = combineReducers({
//   meta: metaReducer,
//   account: accountReducer,
  history: wordsHistoryReducer,
  collection: wordCollectionReducer,
//   typingCount: typingCountReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
