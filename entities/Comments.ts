import { apiGet } from "../api/api.ts";
import {
  DeviantArtCommentContext,
  DeviantArtCommentSearch,
} from "../types/mod.ts";

export class Comments {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Fetches all of the replies to a certain comment, requires the comment id.
   */
  public async siblings(
    params: {
      commentid: string;
      ext_item?: boolean;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/comments/${params.commentid}/siblings`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtCommentContext>;
  }

  /**
   * Fetches all comments on a certain deviation.
   */
  public deviation = async(
    params: {
      deviationid: string;
      commentid?: string;
      maxdepth?: number;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) => {
    const result = await apiGet(
      `api/v1/oauth2/comments/deviation/${params.deviationid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtCommentSearch>;
  }

  /**
   * Fetches all the comments on a user profile.
   */
  public async profile(
    params: {
      username: string;
      commentid?: string;
      maxdepth?: number;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/comments/profile/${params.username}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtCommentSearch>;
  }

  /**
   * Fetches all the comments on a user status.
   */
  public async status(
    params: {
      statusid: string;
      commentid?: string;
      maxdepth?: number;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/comments/status/${params.statusid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtCommentSearch>;
  }
}
