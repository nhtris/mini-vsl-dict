import { classNames } from "@/utils/ui";

export default function ImageCard({
    image,
    classNms,
    // onError,
  }: {
    image: string;
    classNms?: string;
    // onError: () => void;
  }) {
    return (
      <>
        <div className={classNames(classNms, "aspect-ratio relative aspect-[3/2] w-full border border-gray-300 p-1.5 sm:p-2 shadow-sm hover:border-gray-400", classNms)}>
          <img
            className="h-full w-full object-contain object-center"
            src={image}
            alt="image"
            role="img"
            // onError={onError}
            onDoubleClick={() => window.open(image, "_blank")}
          />
        </div>
      </>
    );
  }
  