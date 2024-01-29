import { apiGetNoLogin } from "./api/api.ts";
import {
  Browse,
  Collections,
  Comments,
  Data,
  Deviation,
  Gallery,
  Stash,
  User,
  Util,
} from "./entities/mod.ts";
import { DeviantArtAuth } from "./types/mod.ts";

/**
 * This is the main class for interacting with the DeviantArt API.
 */
export default class DeviantArt {
  public static accessToken: string;
  public deviation = new Deviation(DeviantArt.accessToken);
  public user = new User(DeviantArt.accessToken);
  public gallery = new Gallery(DeviantArt.accessToken);
  public util = new Util(DeviantArt.accessToken);
  public browse = new Browse(DeviantArt.accessToken);
  public data = new Data(DeviantArt.accessToken);
  public collections = new Collections(DeviantArt.accessToken);
  public stash = new Stash(DeviantArt.accessToken);
  public comments = new Comments(DeviantArt.accessToken);

  private constructor() {}

  /**
   * Logs into the DeviantArt API with your client id and token, and retrieves your access token.
   * @returns An instance of the DeviantArt Class.
   */
  public static async login(clientId: string, clientSecret: string) {
    if (!clientId || !clientSecret) {
      const missing = clientId ? "clientSecret" : "clientId";
      return Promise.reject(`You must provide a ${missing}. You can get these
            credentials by registering an application at https://www.deviantart.com/developers/`);
    }
    const auth = await apiGetNoLogin("oauth2/token", {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }) as DeviantArtAuth;
    DeviantArt.accessToken = auth.access_token;
    return new DeviantArt();
  };
}

export * from "./types/mod.ts";
export * from "./entities/mod.ts";
