import { apiGet } from "../api/api.ts";
import { DeviantArtFolders, DeviantArtSearchResults } from "../types/mod.ts";
import { buildIteratorOption } from "../utilities/toasynciterator.ts";

export class Collections {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Gets all of the deviations in a folder. Unless if you are searching for your own folders, you must specify the username of the user.
   */
  public all = buildIteratorOption(async (
    params: {
      folderid: string;
      username?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) => {
    const result = await apiGet(
      `api/v1/oauth2/collections/${params.folderid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtSearchResults>;
  })

  /**
   * Fetches all the folders of the specified user. Defaults to the authenticated user if none is specified.
   */
  public folders = buildIteratorOption(async (
    params: {
      username?: string;
      ext_preload?: boolean;
      calculate_size?: boolean;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) => {
    const result = await apiGet(
      `api/v1/oauth2/collections/folders`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtFolders>;
  });
}
