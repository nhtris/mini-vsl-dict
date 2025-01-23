import SearchAreaBtn from "@/components/element/SearchAreaBtn";
import BottomSheet from "./components/BottomSheet";
import { useSelector } from "react-redux";
import { selectorWordHistory } from "@/store/words/history/selector";
import HorizontalWordList from "./components/HorizontalWordList";
import { useMemo, useState } from "react";
import SearchingStack from "@/pages/searching/stack/SearchingStack";
import EasyTransaction from "@/components/transaction/EasyTransaction";
import { useNavigate } from "react-router";
// import MiniApp from 'dop-sdk-vtb'

export default function HomePage() {
  const navigate = useNavigate();

  const [openSearchStack, setOpenSearchStack] = useState(false);
  const wordsHistory = useSelector(selectorWordHistory);

  const suggestedWords = useMemo(
    () => [...wordsHistory].reverse(),
    [wordsHistory],
  );

  const onSearchWord = async (textSearch: string) => {
    navigate("/search", { state: { wordText: textSearch } });
  };

  return (
    <>
      <SearchingStack
        open={openSearchStack}
        onClose={() => setOpenSearchStack(false)}
        onSearch={onSearchWord}
      />
      <EasyTransaction show={!openSearchStack}>
        <div className="flex h-full w-full flex-col">
          <section className="pt-4">
            <SearchAreaBtn
              onClick={() => {
                setOpenSearchStack(!openSearchStack);
              }}
            />
          </section>

          {/* history  */}
          <section className="pt-8">
            <HorizontalWordList title="Bạn có nhớ" words={wordsHistory} />
          </section>

          <section className="pt-5">
            <HorizontalWordList
              title="Có thể bạn quan tâm"
              words={suggestedWords}
            />
          </section>

          {/* Modal Bottom Sheet */}
          {/* className="fixed bottom-0 left-0 right-0" */}
          <div className="overflow-hidden" onWheel={(e) => e.stopPropagation()}>
          <section >
            <BottomSheet />
          </section>
          </div>
       
        </div>
      </EasyTransaction>
    </>
  );
}
