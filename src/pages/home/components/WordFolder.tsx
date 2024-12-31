import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import { WordFolderNew } from "@/types/words/new";
import { Link } from "react-router";

export default function WordFolder({ folder }: { folder: WordFolderNew }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="h-fit w-full rounded border border-gray-400 py-5">
      <div className="flex justify-between px-2">
        <div className="flex gap-2">
          <div className="text-xl font-semibold">{folder.name}</div>
          <div className="flex gap-1">
            {folder.tags.map((tag, index) => (
              <div
                key={index}
                className="rounded border px-0.5 pt-0.5 font-medium text-gray-400"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div className="py-1">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            type="button"
            title="Mở rộng"
          >
            <MdOutlineArrowDropDownCircle
              className={clsx(
                "h-7 w-7 transform transition-transform duration-1000",
                isExpanded ? "rotate-180" : "",
              )}
            />
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-1000",
          isExpanded ? "max-h-screen" : "max-h-0",
        )}
      >
        {/* {JSON.stringify(isExpanded)} */}
        {folder.words.map((word, index) => (
          <div key={index} className="border-b border-gray-300 px-3 py-1">
            <Link to="/search" state={{ wordText: word }}>
              {word}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
