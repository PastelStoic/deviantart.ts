import api from "../api/api.ts";
import { DeviantArtStash, DeviantArtStashItem } from "../types/mod.ts";

export class Stash {
  private readonly api: api;
  constructor(private readonly accessToken: string) {
    this.api = new api(this.accessToken);
  }

  /**
   * Fetches a stash from its stack id.
   */
  public get = async (
    params: { stackid: string; mature_content?: boolean },
  ) => {
    const result = await this.api.get(`api/v1/oauth2/stash/${params.stackid}`, {
      params,
    });
    return result as Promise<DeviantArtStash>;
  };

  /**
   * Fetches an item using its item id.
   */
  public item = async (
    params: {
      itemid: string;
      ext_submission?: boolean;
      ext_camera?: boolean;
      ext_stats?: boolean;
      mature_content?: boolean;
    },
  ) => {
    const result = await this.api.get(
      `api/v1/oauth2/stash/item/${params.itemid}`,
      { params },
    );
    return result as Promise<DeviantArtStashItem>;
  };
}
