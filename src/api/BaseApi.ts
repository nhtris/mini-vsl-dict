import axios, { AxiosInstance } from "axios";

export const ACCESS_TOKEN = "ijOFKDU*Djf^1432id-f";
export const REFRESH_TOKEN = "ijOFKDO*Djf^1432id-f";
export const IS_AUTHENTICATED = "ijOFKD0*Djf^1432id-f";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

class BaseApi {
  private static staticObject: BaseApi;
  public instance: AxiosInstance;

  private constructor() {
    this.instance = axios.create({
      baseURL: BASE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      this.setAuthorizationToken(token);
    }
  }

  public static initInstance(): BaseApi {
    if (!BaseApi.staticObject) {
      BaseApi.staticObject = new BaseApi();
    }
    return BaseApi.staticObject;
  }

  public setAuthorizationToken(token: string): void {
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  public removeAuthorizationToken(): void {
    delete this.instance.defaults.headers.common["Authorization"];
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(IS_AUTHENTICATED);
  }
}

export default BaseApi.initInstance();
