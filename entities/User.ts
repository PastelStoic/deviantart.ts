import { apiGet } from "../api/api.ts";
import {
  DeviantArtFriendSearch,
  DeviantArtStatus,
  DeviantArtUserFriends,
  DeviantArtUserProfile,
  DeviantArtUserStatuses,
  DeviantArtWatchers,
} from "../types/mod.ts";

export class User {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Gets all of the friends of the specified user, or yourself if none is specified.
   */
  public async friends(
    params: {
      username?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    if (!params.username) params.username = "";
    const result = await apiGet(
      `api/v1/oauth2/user/friends/${params.username}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtUserFriends>;
  }

  /**
   * Searches friends by their username.
   */
  public async friendsSearch(
    params: { query: string; username?: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/user/friends/search`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtFriendSearch>;
  }

  /**
   * Gets all of the statuses of the specified user.
   */
  public async statuses(
    params: {
      username?: string;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/user/statuses/`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviantArtUserStatuses>;
  }

  /**
   * Fetches a specific status from its status id.
   */
  public async status(
    params: { statusid: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/user/statuses/${params.statusid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtStatus>;
  }

  /**
   * Fetches the profile of the specified user.
   */
  public async profile(
    params: {
      username?: string;
      ext_collections?: boolean;
      ext_galleries?: boolean;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    if (!params.username) params.username = "";
    const result = await apiGet(
      `api/v1/oauth2/user/profile/${params.username}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtUserProfile>;
  }

  /**
   * Fetches all the watchers of the specified user.
   */
  public async watchers(
    params: {
      username?: string;
      offset?: number;
      limit?: number;
      expand?: string;
      mature_content?: boolean;
    },
  ) {
    if (!params.username) params.username = "";
    const result = await apiGet(
      `api/v1/oauth2/user/watchers/${params.username}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtWatchers>;
  }
}
