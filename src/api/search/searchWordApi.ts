import { searchUrls } from "@/api/ApiUrls";
import BaseApi from "@/api/BaseApi";
import Word from "@/types/words";
// import { isOnlyLetters } from "@/services/shortcut";
import { isOnlyLetters } from "@/utils/shortcut";
import ResultResponse, { ResponseBody } from "@/types/responses/general";
import { handleApiError } from "@/types/responses/error-response";
// import WELCOME from "./data/welcome";

export default async function searchWordApi(
  word: string,
): Promise<ResultResponse<Word>> {
  word = word.trim();
  if (!isOnlyLetters(word)) {
    console.log("Search words only letters");
    return {
      isSuccess: false,
      error: "Only letters are allowed",
    };
  }

//   if(word === 'welcome') {
//     console.log("...WELCOME...");
//     return {
//       isSuccess: true,
//       error: "",
//       data: WELCOME,
//     };
//   }

  try {
    console.log("call api search: ", word);
    const response = await BaseApi.instance.get<ResponseBody<Word>>(
      searchUrls.search,
      {
        params: { keyword: word.toLowerCase() },
      },
    );

    const result: ResultResponse<Word> = {
      isSuccess: true,
      error: "",
      data: response.data.data as Word,
    };
    return result;
  } catch (error) {
    return handleApiError(error) as ResultResponse<Word>;
  }
}
