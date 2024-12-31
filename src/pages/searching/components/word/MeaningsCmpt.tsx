import { Meaning } from "@/types/words";
import MeaningCmpt from "./MeaningCmpt";

export default function MeaningsCmpt({ meanings }: { meanings: Meaning[] }) {
  return (
    <div className="mt-8">
      <h3 className="mb-2 text-lg font-bold dark:text-gray-300">Definitions</h3>
      <div className="space-y-10">
        {meanings.map((meaning, idx) => (
          <MeaningCmpt key={idx} meaning={meaning} index={idx} />
        ))}
      </div>
    </div>
  );
}
