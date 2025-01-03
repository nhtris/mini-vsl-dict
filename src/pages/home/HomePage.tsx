import SearchAreaBtn from "@/components/element/SearchAreaBtn";
// import clsx from "clsx";
import BottomSheet from "./components/BottomSheet";
import { useSelector } from "react-redux";
import { selectorWordHistory } from "@/store/words/history/selector";
import HorizontalWordList from "./components/HorizontalWordList";
import { useMemo } from "react";

export default function HomePage() {
  // const [bottomSheetStatusOnTop, setBottomSheetStatusOnTop] = useState(false);
  // const [bottomSheetHeight, setBottomSheetHeight] = useState(500);
  // const [bottomSheetTop, setBottomSheetTop] = useState(500);

  const wordsHistory = useSelector(selectorWordHistory);

  const suggestedWords = useMemo(()=>  [...wordsHistory].reverse(), [wordsHistory]) 

  return (
    <div className="relative flex h-full w-full flex-col">
      <section className="pt-4">
        <SearchAreaBtn onClick={() => console.log("Search")} />
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
      <section className="">
        <BottomSheet />
      </section>
    </div>
  );
}
