import { useState } from "react";
import { WordNode } from "@/types/words";
import { LanguageIcon } from "@heroicons/react/24/outline";
// import { classNames } from "@/services/template.suport";
import { classNames } from "@/utils/ui";

export default function TranslationCmpt({ wordNode }: { wordNode: WordNode }) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="relative w-full">
      <div className="pr-6 dark:text-gray-400">
        <div>{wordNode.eng}</div>
        <div
          className={classNames(
            "overflow-hidden transition-all duration-700",
            showTranslation ? "max-h-screen" : "max-h-0",
            // showTranslation ? "block" : "hidden",
            "text-gray-500 dark:text-gray-400",
          )}
        >
          {wordNode.vie}
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <button
          className="p-0.5 pl-3"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          <LanguageIcon className="h-5 w-5 text-gray-300 hover:text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
}
