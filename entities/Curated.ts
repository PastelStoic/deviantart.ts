import api from "../api/api.ts";
import { DeviantArtCuratedTags } from "../types/mod.ts";

export class Curated {
  private readonly api: api;
  constructor(private readonly accessToken: string) {
    this.api = new api(this.accessToken);
  }

  /**
   * Fetches featured tags.
   */
  public tags = async (
    params: { ext_preload?: boolean; mature_content?: boolean },
  ) => {
    const result = await this.api.get(`api/v1/oauth2/curated/tags`, { params });
    return result as Promise<DeviantArtCuratedTags>;
  };
}
