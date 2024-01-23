import api from "../api/api.ts";
import { DeviantArtData } from "../types/ApiTypes.ts";

export class Data {
  private readonly api: api;
  constructor(private readonly accessToken: string) {
    this.api = new api(this.accessToken);
  }

  /**
   * Returns a list of all countries.
   */
  public countries = async () => {
    const result = await this.api.get(`api/v1/oauth2/data/countries`);
    return result as Promise<
      { results: Array<{ countryid: number; name: string }> }
    >;
  };

  /**
   * Returns the privacy policy.
   */
  public privacy = async () => {
    const result = await this.api.get(`api/v1/oauth2/data/privacy`);
    return result as Promise<DeviantArtData>;
  };

  /**
   * Returns the submission guidelines.
   */
  public submission = async () => {
    const result = await this.api.get(`api/v1/oauth2/data/submission`);
    return result as Promise<DeviantArtData>;
  };

  /**
   * Returns the terms of service.
   */
  public tos = async () => {
    const result = await this.api.get(`api/v1/oauth2/data/tos`);
    return result as Promise<DeviantArtData>;
  };
}
