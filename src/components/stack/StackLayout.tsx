import { Transition } from "@headlessui/react";
import { ReactNode, useState, useEffect } from "react";

export default function StackLayout({
  show,
  children,
  className,
}: {
  show: boolean;
  children: ReactNode;
  className?: string;
}) {
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow2(show);
      }, 300);
    } else {
      setShow2(show);
    }
  }, [show]);
  return (
    <Transition show={show2}>
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
