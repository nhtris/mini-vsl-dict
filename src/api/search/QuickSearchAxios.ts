import axios, { AxiosInstance } from "axios";

const QUICK_SEARCH_API_URL = import.meta.env.VITE_QUICK_SEARCH_API_URL;

class QuickSearchAxios {
  private static staticObject: QuickSearchAxios;
  public instance: AxiosInstance;

  private constructor() {
    this.instance = axios.create({
      baseURL: QUICK_SEARCH_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static initInstance(): QuickSearchAxios {
    if (!QuickSearchAxios.staticObject) {
      QuickSearchAxios.staticObject = new QuickSearchAxios();
    }
    return QuickSearchAxios.staticObject;
  }
}

export default QuickSearchAxios.initInstance();
