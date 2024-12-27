// import { Transition } from "@headlessui/react";
// import { useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import "react-multi-carousel/lib/styles.css";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

export default function Loading() {
  return (
    <div className="flex min-h-80 items-center justify-center">
      <RotateLoader
        speedMultiplier={0.5}
        color={"#a2a2a2"}
        loading={true}
        //   cssOverride={override}
        // size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
