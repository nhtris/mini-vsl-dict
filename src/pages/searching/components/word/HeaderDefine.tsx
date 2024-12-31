import { WordNode } from "@/types/words";
// import { generateSpeechId } from "@/services/shortcut";
// import GroupWordButtons from "../action-cmpnts/GroupWordButtons";
// import { classNames } from "@/services/template.suport";
import { classNames } from "@/utils/ui";

export default function HeaderDefine({
  generalDefine,
  speeches,
}: {
  generalDefine: WordNode;
  speeches: string[] | null;
}) {
  const isLongText = generalDefine.eng.length > 11;
  return (
    <div className="mt-6 flex justify-between font-bold">
      <div>
        <div className={classNames(isLongText ? "" : "flex", "text-gray-800 dark:text-gray-200")}>
          <h2 className="text-2xl sm:text-4xl">{generalDefine.eng}</h2>
          {/* <GroupWordButtons word={generalDefine.eng} inNewLine={isLongText}/> */}
        </div>
        {speeches && speeches.length > 0 && (
          <div className="text-gray-400">
            <span>[</span>
            {speeches.map((speech, idx) => {
              return (
                <a key={idx} href={`#`}>
                  {speech}
                  {idx < speeches.length - 1 && <span>{", "}</span>}
                </a>
              );
            })}
            <span>]</span>
          </div>
        )}
      </div>
      <div className="ml-auto text-right  text-gray-400 ">
        <h2 className="text-2xl sm:text-4xl">{generalDefine.vie}</h2>
      </div>
    </div>
  );
}
