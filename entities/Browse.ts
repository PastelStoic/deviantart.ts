import { apiGet } from "../api/api.ts";
import {
  DeviantArtDailySearch,
  DeviantArtMoreLikeThisPreview,
  DeviantArtQueryResults,
  DeviantArtSearchResults,
  DeviantArtTagSearch,
} from "../types/BrowseTypes.ts";

export class Browse {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Gets similar deviations to the one specified. Requires the deviation id.
   */
  public async moreLikeThis(
    params: {
      seed: string;
      category?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/morelikethis`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtSearchResults>;
  }

  /**
   * Same as [[moreLikeThis]] but returns the preview result.
   */
  public async moreLikeThisPreview(
    params: { seed: string; expand?: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/morelikethis/preview`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtMoreLikeThisPreview>;
  }

  /**
   * Fetches daily deviations for today or a certain date if it is specified.
   */
  public async daily(
    params: { date?: string; expand?: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/dailydeviations`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtDailySearch>;
  }

  /**
   * Searches deviations using a tag.
   */
  public async tag(
    params: {
      tag: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(`api/v1/oauth2/browse/tags`, this.accessToken, {
      params,
    });
    return result as Promise<DeviantArtQueryResults>;
  }

  /**
   * Searches a tag for similar tags.
   */
  public async tagSearch(
    params: { tag_name: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/tags/search`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtTagSearch>;
  }

  /**
   * Searches the journals of a user.
   */
  public async userJournals(
    params: {
      username: string;
      featured?: boolean;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/user/journals`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtSearchResults>;
  }

  /**
   * Searches for newest deviations.
   */
  public async newest(
    params: {
      category_path?: string;
      q?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/newest`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtQueryResults>;
  }

  /**
   * Searches for popular deviations.
   */
  public async popular(
    params: {
      category_path?: string;
      q?: string;
      timerange?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/popular`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtQueryResults>;
  }

  /**
   * Searches for hot deviations.
   */
  public async hot(
    params: {
      category_path?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(`api/v1/oauth2/browse/hot`, this.accessToken, {
      params,
    });
    return result as Promise<DeviantArtSearchResults>;
  }

  /**
   * Searches for undiscovered deviations.
   */
  public async undiscovered(
    params?: {
      category_path?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/browse/undiscovered`,
      this.accessToken,
      {
        params: params ?? {},
      },
    );
    return result as Promise<DeviantArtSearchResults>;
  }
}
