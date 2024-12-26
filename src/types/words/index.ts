export interface WordNode {
    eng: string;
    vie: string;
  }
  
  export interface Phonetic {
    text: string | null;
    audio: string;
    sourceUrl: string | null;
    license: {
      name: string;
      url: string;
    } | null;
  }
  
  export interface Definition {
    synonyms: string[];
    antonyms: string[];
    definition: WordNode;
    example: WordNode | null;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    synonyms: string[];
    antonyms: string[];
    definitions: Definition[];
  }
  
  export interface Dictionary {
    word: string;
    phonetic: string | null;
    phonetics: Phonetic[];
    license: {
      name: string;
      url: string;
    };
    sourceUrls: string[];
    viet: string;
    eng: string;
    meanings: Meaning[];
  }
  
  export default interface Word {
    eng: string;
    viet: string;
    imageUrls: string[];
    dictionary: Dictionary;
  }
  