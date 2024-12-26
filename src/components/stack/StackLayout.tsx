import { Transition } from "@headlessui/react";
import { ReactNode, useState } from "react";

export default function StackLayout({
  show,
  children,
}: {
  show: boolean;
  children: ReactNode;
}) {
  return (
    <Transition show={show}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0">
        <div className="fixed top-0 z-40 h-full w-full bg-gray-400">
          {children}
        </div>
      </div>
    </Transition>
  );
}
