import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import WordFolder from "./WordFolder";
import clsx from "clsx";
import { wordCollections } from "@/data/wordsColection";

const BottomSheetHeight1 = 100;
const BottomSheetHeight2 = 550;

export default function BottomSheet() {
  const [bottomSheetStatusOnTop, setBottomSheetStatusOnTop] = useState(false);
  // const [bottomSheetHeight, setBottomSheetHeight] = useState(500);
  const [bottomSheetTop, setBottomSheetTop] = useState(BottomSheetHeight2);

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

  return (
    <div
      className={clsx(
        "absolute bottom-0 mb-12 w-full rounded-t-xl border-t-2 shadow-2xl border-gray-300 bg-teal-50 shadow-red-500 transition-all duration-500",
        bottomSheetStatusOnTop ? "overflow-auto" : "overflow-hidden",
      )}
      style={{ top: `${bottomSheetTop}px` }}
      // onClick={() => setBottomSheetStatus(!bottomSheetStatus)}
    >
      <div className="relative ">
        <div
          className="sticky top-0 z-10 w-full bg-teal-50 py-1 pt-2"
          {...handlers}
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
          <div className="flex gap-1 px-2">
            <div className="rounded-sm border border-gray-300 px-1 text-gray-500">
              #technology
            </div>
            <div className="rounded-sm border border-gray-300 px-1 text-gray-500">
              #toeic
            </div>
            <div className="rounded-sm border border-gray-300 px-1 text-gray-500">
              #duolingo
            </div>
            <div className="rounded-sm border border-gray-300 px-1 text-gray-500">
              #hello
            </div>
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
