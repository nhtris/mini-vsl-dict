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
    <div className="flex justify-center items-center mt-8">
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
