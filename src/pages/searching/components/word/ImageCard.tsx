export default function ImageCard({
    image,
    // onError,
  }: {
    image: string;
    // onError: () => void;
  }) {
    return (
      <>
        <div className="aspect-ratio relative aspect-[3/2] w-full rounded-sm border border-gray-300 p-1.5 sm:p-2 shadow-sm hover:border-gray-400">
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
  