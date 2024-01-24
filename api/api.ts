const apiURL = "https://www.deviantart.com/";

export default class Api {
  constructor(private readonly accessToken: string) {}

  /**
   * Gets an endpoint from the DeviantArt api.
   */
  public async get(endpoint: string, args?: { params: Record<string, string | number | boolean | undefined | string[]> }) {
    const url = new URL(apiURL + endpoint);

    url.searchParams.set("access_token", this.accessToken);
    if (args) {
      for (const pair of Object.entries(args.params)) {
        if (pair[1] !== undefined) {
          if (Array.isArray(pair[1])) {
            for (const item of pair[1]) {
              url.searchParams.set(pair[0] + "[]", item.toString());
            }
            console.log(url.searchParams)
          } else {
            url.searchParams.set(pair[0], pair[1].toString());
          }
        }
      }
    }

    const result = await fetch(url).then((
      r,
    ) => r.json());
    return result;
  };

  /**
   * Used internally to get the access token in [[login]]
   */
  public static getNoLogin = async (endpoint: string, params: Record<string, string | number | boolean | undefined>) => {
    const url = new URL(apiURL + endpoint);
    for (const pair of Object.entries(params)) {
      if (pair[1] !== undefined) {
        url.searchParams.set(pair[0], pair[1].toString());
      }
    }
    const result = await fetch(url).then(async (
      r,
    ) => await r.json());
    return result;
  };
}
