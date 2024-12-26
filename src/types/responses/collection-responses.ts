import { CollectionFolder } from "@/store/words/collections/slice";

export interface CollectionResponseData {
  markedWords: string[];
  folders: CollectionFolder[]; // { id: string; name: string; words: string[]; }
}

export interface MarkingWordResponse {
  words: string[];
}

export interface MovingWordResponse {
  fromFolder: CollectionFolder;
  toFolder: CollectionFolder;
}
