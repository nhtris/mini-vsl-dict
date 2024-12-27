import { LuSearch } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";
import StackLayout from "@/components/stack/StackLayout";
import { useEffect, useState } from "react";
import quickSearchWords from "@/api/search/quickSearchWords";
import { WordNode } from "@/types/words";

export default function SearchingStack({
  open,
  onClose,
  onSearch,
}: {
  open: boolean;
  onClose: () => void;
  onSearch: (word: string) => void;
}) {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState<WordNode[]>([]);

  useEffect(() => {
    async function search() {
      try {
        const newSearchResp = await quickSearchWords(
          searchText.trim().toLocaleLowerCase(),
        );
        console.log(newSearchResp);
        if (newSearchResp.isSuccess) {
          if (!newSearchResp.data) {
            setSearchList([]);
            return;
          } else {
            setSearchList(newSearchResp.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    search();
  }, [searchText]);

  return (
    <StackLayout show={open} className="bg-slate-300">
      <div className="sticky top-0 flex h-14 w-full items-center gap-2 bg-gray-200">
        <div className="px-2">
          <button onClick={onClose} type="button" title="back">
            <IoArrowBackOutline className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="w-full">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="name"
            name="name"
            type="text"
            placeholder="Tìm kiếm"
            className="peer block w-full bg-gray-200 pb-2 pr-5 pt-1.5 font-medium text-gray-700 placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          />
        </div>
      </div>

      <div className="bg-slate-300 p-3 pb-10">
        {searchList.map((word, index) => (
          <button
            className="w-full text-left hover:bg-sky-700"
            key={index}
            onClick={() => onSearch(word.eng.toLocaleLowerCase().trim())}
          >
            <div
              key={index}
              className="flex flex-row gap-1 border-b border-gray-400 p-2"
            >
              <div className="min-w-32 text-gray-900">{word.eng}</div>
              <div className="text-gray-700">{word.vie}</div>
            </div>
          </button>
        ))}
      </div>
    </StackLayout>
  );
}
