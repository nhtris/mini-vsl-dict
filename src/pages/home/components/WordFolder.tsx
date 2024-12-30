import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

export default function WordFolder() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="h-fit w-full bg-teal-700 py-5">
      <div className="flex justify-between px-2">
        <div className="text-xl font-semibold">Tiêu đề</div>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A atque ab
        esse aut fuga odit repellendus explicabo tempore tenetur aliquid
        quibusdam veritatis saepe animi error laborum assumenda similique, unde
        maxime.
      </div>
    </div>
  );
}
