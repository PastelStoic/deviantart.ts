import api from "../api/api.ts";
import { DeviantArtPlacebo } from "../types/ApiTypes.ts";

export class Util {
  private readonly api: api;
  constructor(private readonly accessToken: string) {
    this.api = new api(this.accessToken);
  }

  /**
   * Sends a placebo API query to check that your access token is still valid.
   */
  public placebo = async (params: { mature_content?: boolean }) => {
    const result = await this.api.get(`api/v1/oauth2/placebo`, { params });
    return result as Promise<DeviantArtPlacebo>;
  };
}
