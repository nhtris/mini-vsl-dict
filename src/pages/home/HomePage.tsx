import { Transition } from "@headlessui/react";
import { useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import "react-multi-carousel/lib/styles.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <RotateLoader
      speedMultiplier={0.5}
      color={"#a2a2a2"}
      loading={loading}
      cssOverride={override}
      // size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
