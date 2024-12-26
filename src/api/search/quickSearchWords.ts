import { searchUrls } from "@api/ApiUrls";
import QuickSearchAxios from "./QuickSearchAxios";
import { WordNode } from "@/types/words";
import ResultResponse, { ResponseBody } from "@/types/responses/general";
import { handleApiError } from "@/types/responses/error-response";

export default async function quickSearchWords(
  word: string,
): Promise<ResultResponse<WordNode[]>> {
  try {
    word = word.trim();
    console.log("call api quick search: ", word);
    const response = await QuickSearchAxios.instance.get<
      ResponseBody<WordNode[]>
    >(searchUrls.quickSearch, {
      params: { keyword: word },
    });

    const result: ResultResponse<WordNode[]> = {
      isSuccess: true,
      error: "",
      data: response.data.data as WordNode[],
    };
    return result;
  } catch (error: unknown) {
    return handleApiError(error) as ResultResponse<WordNode[]>;
  }
}
