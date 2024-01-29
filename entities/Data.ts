import { apiGet } from "../api/api.ts";
import { DeviantArtData } from "../types/ApiTypes.ts";

export class Data {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Returns a list of all countries.
   */
  public async countries() {
    const result = await apiGet(
      `api/v1/oauth2/data/countries`,
      this.accessToken,
    );
    return result as Promise<
      { results: Array<{ countryid: number; name: string }> }
    >;
  }

  /**
   * Returns the privacy policy.
   */
  public async privacy() {
    const result = await apiGet(`api/v1/oauth2/data/privacy`, this.accessToken);
    return result as Promise<DeviantArtData>;
  }

  /**
   * Returns the submission guidelines.
   */
  public async submission() {
    const result = await apiGet(
      `api/v1/oauth2/data/submission`,
      this.accessToken,
    );
    return result as Promise<DeviantArtData>;
  }

  /**
   * Returns the terms of service.
   */
  public async tos() {
    const result = await apiGet(`api/v1/oauth2/data/tos`, this.accessToken);
    return result as Promise<DeviantArtData>;
  }
}
