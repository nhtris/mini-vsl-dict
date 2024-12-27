import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

export default function EasyTransaction({
  show,
  children,
}: {
  show: boolean;
  children: ReactNode;
}) {
  return (
    <Transition show={show}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0">
        {children}
      </div>
    </Transition>
  );
}
