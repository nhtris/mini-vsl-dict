import { Meaning } from "@/types/words";
import TranslationCmpt from "./TranslationCmpt";
import RelationWords from "./RelationWords";
// import { generateSpeechId } from "@/services/shortcut";
import { generateSpeechId } from "@/utils/shortcut";

export default function MeaningCmpt({
  meaning,
  index,
}: {
  meaning: Meaning;
  index: number;
}) {
  return (
    <div>
      <div
        id={generateSpeechId(index)}
        className="pb-1 font-bold dark:text-gray-300"
      >
        {meaning.partOfSpeech}
      </div>
      <div className="space-y-6 text-sm sm:text-base">
        {meaning.definitions.map((def, idx) => (
          <div key={idx} className="border shadow-sm dark:border-gray-500">
            <div className="dark:bg-darkmode-md flex bg-[#F8FdFd] py-1">
              <div className="sm:min-w-26 min-w-24 pl-0.5 font-semibold text-gray-700 dark:text-gray-400">
                Definition
              </div>
              <TranslationCmpt wordNode={def.definition} />
            </div>
            {def.example && (
              <div className="border-blue-100 dark:bg-darkmode-md flex border-t bg-[#FCFFFF] py-1 dark:border-gray-600">
                <div className="sm:min-w-26 min-w-24 pl-0.5 font-semibold text-gray-700 dark:text-gray-400">
                  Example
                </div>
                <TranslationCmpt wordNode={def.example} />
              </div>
            )}
          </div>
        ))}
        {(meaning.synonyms.length > 0 || meaning.antonyms.length > 0) && (
          <div className="border shadow-sm dark:border-gray-500">
            <div className="dark:bg-darkmode-md flex bg-gray-50 py-1 dark:text-gray-400">
              <div className="min-w-24 pl-0.5 sm:min-w-28">Synonyms</div>
              <RelationWords words={meaning.synonyms} />
            </div>

            <div className="dark:bg-darkmode-md dark:border-gray-500 flex border-t border-gray-200 bg-gray-50 py-1 dark:text-gray-400">
              <div className="min-w-24 pl-0.5 sm:min-w-28">Antonyms</div>
              <RelationWords words={meaning.antonyms} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
