import { apiGet } from "../api/api.ts";
import {
  DeviantArtGalleryAll,
  DeviantArtGalleryFolders,
  DeviantArtGalleryResult,
} from "../types/mod.ts";
import { toAsyncIterator } from "../utilities/toasynciterator.ts";

export type GalleryAllParams = {
  username?: string;
  offset?: number;
  limit?: number;
  expand?: string;
  mature_content?: boolean;
};

export class Gallery {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Gets all of the deviations in the folder, requires the folder id.
   */
  public async get(
    params: {
      folderid?: string;
      username?: string;
      mode?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    if (!params.folderid) params.folderid = "";
    const result = await apiGet(
      `api/v1/oauth2/gallery/${params.folderid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtGalleryResult>;
  }

  /**
   * Get all of the deviations of a certain user, yourself if none is specified.
   */
  public all = async (params: GalleryAllParams) => {
    const result = await apiGet(`api/v1/oauth2/gallery/all`, this.accessToken, {
      params,
    });
    return result as Promise<DeviantArtGalleryAll>;
  }

  public allAsyncInterator(params: GalleryAllParams) {
    return toAsyncIterator(params, this.all);
  }

  /**
   * Get all of the folders of a certain user, or yourself if none is specified.
   */
  public async folders(
    params: {
      username?: string;
      calculate_size?: boolean;
      ext_preload?: boolean;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/gallery/folders`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtGalleryFolders>;
  }
}
