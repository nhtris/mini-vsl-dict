import { Dictionary } from "@/types/words";

export function getWordSpeeches(dictionary: Dictionary) {
  if (!dictionary) {
    return null;
  }
  return dictionary.meanings.map((meaning) => meaning.partOfSpeech);
}

export function getWordSpeechesAsString(dictionary: Dictionary) {
  const speeches = getWordSpeeches(dictionary);
  if (!speeches) {
    return null;
  }
  return `[${speeches.join(", ")}]`;
}
