import { Transition } from "@headlessui/react";
import { ReactNode, useState, useEffect } from "react";

export default function EasyTransaction({
  show,
  children,
}: {
  show: boolean;
  children: ReactNode;
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
      <div className="transition duration-500 ease-in data-[closed]:opacity-0">
        {children}
      </div>
    </Transition>
  );
}
