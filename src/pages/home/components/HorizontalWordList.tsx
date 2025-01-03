import Word from "@/types/words";
import ImageCard from "@/pages/searching/components/word/ImageCard";
import { Link } from "react-router";

export default function HorizontalWordList({
  title,
  words,
}: {
  title: string;
  words: Word[];
}) {
  return (
    <>
      <div className="px-2 pb-1 text-xl font-semibold">{title}</div>
      <div className="flex snap-x flex-row gap-2 overflow-x-auto pl-2 pr-6">
        {words.map((word, index) => (
          <Link to={"/search"} state={{ wordText: word.eng }} key={index}>
            <div key={index} className="min-w-48 bg-teal-100">
              <ImageCard image={word.imageUrls[0]} />

              <div className="py-1 pl-4 text-sm font-semibold border border-gray-300">{word.eng}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
