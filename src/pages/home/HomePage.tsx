import { Transition } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <p>hello</p>
      </div>

      <div className="fixed h-full w-full bg-gray-400 top-0 z-10">stack</div>
    </>
  );
}
