import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

export default function StackLayout({
  show,
  children,
  className,
}: {
  show: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Transition show={show}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0">
        <div
          className={`fixed top-0 z-40 h-full w-full overflow-auto ${className}`}
        >
          {children}
        </div>
      </div>
    </Transition>
  );
}
