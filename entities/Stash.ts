import { apiGet } from "../api/api.ts";
import { DeviantArtStash, DeviantArtStashItem } from "../types/mod.ts";

export class Stash {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Fetches a stash from its stack id.
   */
  public async get(
    params: { stackid: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/stash/${params.stackid}`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtStash>;
  }

  /**
   * Fetches an item using its item id.
   */
  public async item(
    params: {
      itemid: string;
      ext_submission?: boolean;
      ext_camera?: boolean;
      ext_stats?: boolean;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/stash/item/${params.itemid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtStashItem>;
  }
}
