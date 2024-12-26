import { AxiosError } from "axios";
import ResultResponse from "./general";

interface ResponseData {
  status: number;
  message: string;
  messages?: string[];
  data: unknown; // Replace 'any' with a more specific type if possible
}

class SpringError extends AxiosError<ResponseData> {}

export function handleApiError(error: unknown): ResultResponse<unknown> {
  try {
    const err = error as SpringError;
    return {
      isSuccess: false,
      error: err.response?.data.message || err.message,
      errors: err.response?.data.messages || [],
    };
  } catch (unknownError) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        error: error.message,
      };
    } else {
      return {
        isSuccess: false,
        error: "Unknown error occurred.",
      };
    }
  }
}
