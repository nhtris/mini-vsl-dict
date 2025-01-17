import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import WordFolder from "./WordFolder";
import clsx from "clsx";
import { wordCollections } from "@/data/wordsColection";
import { classNames } from "@/utils/ui";

const BottomSheetHeight1 = 100;
const BottomSheetHeight2 = 550;

export default function BottomSheet() {
  const [bottomSheetStatusOnTop, setBottomSheetStatusOnTop] = useState(false);
  // const [bottomSheetHeight, setBottomSheetHeight] = useState(500);
  const [bottomSheetTop, setBottomSheetTop] = useState(BottomSheetHeight2);

  const allWordTags = wordCollections.map((folder) => folder.tags).flat();

  const [choicedTags, setChoicedTags] = useState<string[]>(allWordTags);

  const handlers = useSwipeable({
    onSwipedUp: (event) => {
      // event.event.preventDefault();
      // setBottomSheetStatus(true);
    },
    onSwipedDown: (event) => {
      // event.event.preventDefault();
      // setBottomSheetStatus(false);
    },
    onSwiping: (eventData) => {
      // eventData.event.preventDefault();
      if (eventData.dir === "Up" || eventData.dir === "Down") {
        setBottomSheetTop((prevHeight) => {
          console.log("prevHeight:", prevHeight);
          console.log("eventData.deltaY:", eventData.deltaY);
          const newHeight = prevHeight + eventData.deltaY;
          return Math.max(
            BottomSheetHeight1,
            Math.min(newHeight, BottomSheetHeight2),
          ); // Giới hạn chiều cao từ 100px đến 500px
        });
      }
    },
    onSwiped: (eventData) => {
      // eventData.event.preventDefault();
      console.log("Swiped event completed:", eventData);
      if (bottomSheetTop < 180) {
        setBottomSheetTop(BottomSheetHeight1);
        setBottomSheetStatusOnTop(true);
      } else {
        setBottomSheetTop(BottomSheetHeight2);
        setBottomSheetStatusOnTop(false);
      }
      // Thực hiện các hành động khác sau khi vuốt xong
    },
  });

  const handingClickTag = (tag: string) => {
    if (choicedTags.length === allWordTags.length) {
      setChoicedTags([tag]);
    }
  };

  const onClickTopButtomSheet = () => {
    if (bottomSheetStatusOnTop) {
      setBottomSheetStatusOnTop(false);
      setBottomSheetTop(BottomSheetHeight2);
    } else {
      setBottomSheetStatusOnTop(true);
      setBottomSheetTop(BottomSheetHeight1);
    }
  };



  return (
    <div
      className={clsx(
        "absolute bottom-0 mb-12 w-full rounded-t-xl border-t-2 border-gray-300 bg-teal-50 shadow-2xl shadow-gray-300 transition-all duration-1000",
        bottomSheetStatusOnTop ? "overflow-auto" : "overflow-hidden",
      )}
      style={{ top: `${bottomSheetTop}px` }}
      // onClick={() => setBottomSheetStatus(!bottomSheetStatus)}
    >
      <div className="relative">
        <div
          className="sticky top-0 z-10 w-full bg-teal-50 py-1 pt-2"
          {...handlers}
          onClick={onClickTopButtomSheet}
        >
          <div className="flex justify-center">
            <MdOutlineKeyboardDoubleArrowDown
              className={clsx(
                "h-5 w-5 transform transition-transform duration-1000",
                bottomSheetStatusOnTop ? "" : "rotate-180",
              )}
            />
          </div>

          <div className="text-md px-2 font-semibold">Danh mục</div>
          <div className="flex gap-1 overflow-x-auto px-2 pb-1">
            {allWordTags.map((tag, index) => (
              <button
                className={classNames(
                  "rounded-sm border border-gray-300 px-1 text-gray-500",
                  choicedTags.includes(tag) ? "text-sky-600" : "",
                )}
                key={index}
                onClick={() => handingClickTag(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
    
        <div className="flex flex-col gap-2 px-2 py-3">
          {wordCollections.map((folder, index) => (
            <WordFolder key={index} folder={folder} />
          ))}

          {/* <WordFolder />
          <WordFolder />
          <WordFolder />
          <WordFolder />
          <WordFolder /> */}
        </div>
      </div>
    </div>
  );
}
