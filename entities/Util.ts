import { apiGet } from "../api/api.ts";
import { DeviantArtPlacebo } from "../types/ApiTypes.ts";

export class Util {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Sends a placebo API query to check that your access token is still valid.
   */
  public async placebo() {
    const result = await apiGet(`api/v1/oauth2/placebo`, this.accessToken);
    return result as Promise<DeviantArtPlacebo>;
  }
}
