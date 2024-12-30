import SearchAreaBtn from "@/components/element/SearchAreaBtn";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import WordFolder from "./components/WordFolder";
import clsx from "clsx";

export default function HomePage() {
  const [bottomSheetStatusOnTop, setBottomSheetStatusOnTop] = useState(false);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(500);
  const [bottomSheetTop, setBottomSheetTop] = useState(500);

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
          return Math.max(100, Math.min(newHeight, 500)); // Giới hạn chiều cao từ 100px đến 500px
        });
      }
    },
    onSwiped: (eventData) => {
      // eventData.event.preventDefault();
      console.log("Swiped event completed:", eventData);
      if (bottomSheetTop < 180) {
        setBottomSheetTop(100);
        setBottomSheetStatusOnTop(true);
      } else {
        setBottomSheetTop(500);
        setBottomSheetStatusOnTop(false);
      }
      // Thực hiện các hành động khác sau khi vuốt xong
    },
  });

  return (
    <div className="relative flex h-full w-full flex-col">
      <section className="pt-4">
        <SearchAreaBtn onClick={() => console.log("Search")} />
      </section>

      <section className="pt-8">
        <div className="px-2 text-xl font-semibold">Gần đây</div>
        <div className="flex snap-x flex-row gap-1 overflow-x-auto">
          <div className="h-32 min-w-40 bg-teal-700"></div>
          <div className="h-32 min-w-40 bg-teal-700"></div>
          <div className="h-32 min-w-40 bg-teal-700"></div>
          <div className="h-32 min-w-40 bg-teal-700"></div>
          <div className="h-32 w-40 bg-teal-700"></div>
          <div className="h-32 w-40 bg-teal-700"></div>
        </div>
      </section>

      {/* Modal Bottom Sheet */}
      <section className="">
        <div
          className={clsx(
            "absolute bottom-0 mb-12 w-full rounded-t-lg border bg-gray-200 shadow-lg transition-all duration-500",
            bottomSheetStatusOnTop ? "overflow-auto" : "overflow-hidden",
          )}
          style={{ top: `${bottomSheetTop}px` }}
          // onClick={() => setBottomSheetStatus(!bottomSheetStatus)}
        >
          <div className="relative">
            <div
              className="sticky top-0 z-10 w-full bg-gray-200 py-1 pt-2"
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
                <div className="rounded border border-gray-600 px-1 text-gray-500">
                  #technology
                </div>
                <div className="rounded border border-gray-600 px-1 text-gray-500">
                  #toeic
                </div>
                <div className="rounded border border-gray-600 px-1 text-gray-500">
                  #duolingo
                </div>
                <div className="rounded border border-gray-600 px-1 text-gray-500">
                  #hello
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 py-3">
              <WordFolder />
              <WordFolder />
              <WordFolder />
              <WordFolder />
              <WordFolder />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
