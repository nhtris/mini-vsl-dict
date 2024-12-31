import { Link } from "react-router";
// import { isOnlyLetters } from "@/services/shortcut";
import { isOnlyLetters } from "@/utils/shortcut";
// import { generateRouteWordPage } from "@/services/routing";

export default function RelationWords({ words }: { words: string[] }) {
  return (
    <>
      <p>
        <span>[</span>
        {words.map((word, idx) => (
          <span key={idx}>
            {isOnlyLetters(word) ? (
              <Link
                // to={generateRouteWordPage(word)}
                to="/"
                className="hover:text-blue-600"
              >
                {word}
              </Link>
            ) : (
              <span>{word}</span>
            )}
            {idx < words.length - 1 && <span>{", "}</span>}
          </span>
        ))}
        <span>]</span>
      </p>
    </>
  );
}
