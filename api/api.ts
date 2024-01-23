const apiURL = "https://www.deviantart.com/";

export default class Api {
  constructor(private readonly accessToken: string) {}

  /**
   * Gets an endpoint from the DeviantArt api.
   */
  // deno-lint-ignore no-explicit-any
  public get = async (endpoint: string, params: any) => {
    params = params.params ? params.params : params;
    params.access_token = this.accessToken;
    const url = apiURL + endpoint;
    const result = await fetch(url, { body: params }).then(async (
      r,
    ) => await r.json());
    return result;
  };

  /**
   * Used internally to get the access token in [[login]]
   */
  // deno-lint-ignore no-explicit-any
  public static getNoLogin = async (endpoint: string, params: any) => {
    const url = apiURL + endpoint;
    const result = await fetch(url, { body: params }).then(async (
      r,
    ) => await r.json());
    return result;
  };
}
