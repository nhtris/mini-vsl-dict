import SearchAreaBtn from "@/components/element/SearchAreaBtn";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import WordFolder from "./components/WordFolder";
// import clsx from "clsx";
import BottomSheet from "./components/BottomSheet";

export default function HomePage() {
  // const [bottomSheetStatusOnTop, setBottomSheetStatusOnTop] = useState(false);
  // const [bottomSheetHeight, setBottomSheetHeight] = useState(500);
  // const [bottomSheetTop, setBottomSheetTop] = useState(500);



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
        <BottomSheet />
      </section>
    </div>
  );
}
