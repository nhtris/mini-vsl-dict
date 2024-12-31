import { useMemo } from "react";
import { Dictionary, WordNode } from "@/types/words";
// import HeaderDefine from "./cmpnts/HeaderDefine";
import HeaderDefine from "./HeaderDefine";
// import PhoneticsCmpt from "./cmpnts/PhoneticsCmpt";
// import MeaningsCmpt from "./cmpnts/MeaningsCmpt";
// import NoteArea from "./note/NoteArea";
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "@/store/auth/selector";
// import getWordNoteApi from "@/api/note/getWordNoteApi";
// import { WordNoteContext } from "@/context/WordNoteProvider";
// import { handleShowErrorsNotification } from "@/services/toast";
import { getWordSpeeches } from "@/utils/words";
import MeaningsCmpt from "./MeaningsCmpt";

export default function GroupDefine({
  generalDefine,
  dictionary,
}: {
  generalDefine: WordNode;
  dictionary: Dictionary;
}) {
  // const isAuthenticated = useSelector(selectIsAuthenticated);

  // const { setNewNote, setOldNote, setIsOpenNote, setIsOpenQuill } =
  //   useContext(WordNoteContext);

  const speeches: string[] | null = useMemo(() => {
    if (!dictionary) {
      return null;
    }
    return getWordSpeeches(dictionary);
  }, [dictionary]);

  // useEffect(() => {
  //   async function fetchNote(word: string) {
  //     const resp = await getWordNoteApi(word);
  //     if (resp.isSuccess) {
  //       if (resp?.data?.note) {
  //         setNewNote(resp.data.note);
  //         setOldNote(resp.data.note);
  //         setIsOpenNote(true);
  //         setIsOpenQuill(false);
  //       } else {
  //         setNewNote("");
  //         setOldNote("");
  //         setIsOpenNote(false);
  //         setIsOpenQuill(false);
  //       }
  //     }
  //     if (!resp.isSuccess) {
  //       console.error(resp.error);
  //       handleShowErrorsNotification(resp);
  //     }
  //   }

  //   if (isAuthenticated) {
  //     // fetch user's note
  //     fetchNote(generalDefine.eng);
  //   }
  // }, [
  //   isAuthenticated,
  //   generalDefine.eng,
  //   setNewNote,
  //   setOldNote,
  //   setIsOpenNote,
  //   setIsOpenQuill,
  // ]);

  return (
    <div className="mb-16 sm:mb-0">
      <HeaderDefine generalDefine={generalDefine} speeches={speeches} />

      {/* {dictionary && dictionary.phonetics && (
        <PhoneticsCmpt phonetics={dictionary.phonetics} />
      )} */}

      {/* {isAuthenticated && <NoteArea word={generalDefine.eng} />} */}

      {dictionary && dictionary.meanings && (
        <MeaningsCmpt meanings={dictionary.meanings} />
      )}
    </div>
  );
}
