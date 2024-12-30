import { LuSearch } from "react-icons/lu";

export default function SearchAreaBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="px-2">
      <button className="w-full" onClick={onClick}>
        <div className="mx-auto flex max-w-md items-center overflow-hidden rounded-md border-2 border-blue-900 px-2.5 py-2.5">
          <LuSearch className="h-7 w-7 text-blue-900" />
          <div className="px-2">
            <span className="text-md font-medium text-gray-400">
              Bạn muốn tra gì
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
