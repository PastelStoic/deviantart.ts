import { apiGet } from "../api/api.ts";
import {
  DeviantArtDeviation,
  DeviationContent,
  DeviationDownload,
  DeviationEmbeddedContent,
  DeviationMetaData,
  DeviationWhoFaved,
} from "../types/mod.ts";

export class Deviation {
  constructor(private readonly accessToken: string) {
  }

  /**
   * Gets a deviation from its deviation id.
   */
  public async get(params: { deviationid: string; expand?: string }) {
    const result = await apiGet(
      `api/v1/oauth2/deviation/${params.deviationid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviantArtDeviation>;
  }

  /**
   * Gets the meta data for multiple deviations.
   */
  public metaData = async (
    params: {
      deviationids: string[];
      ext_submission?: boolean;
      ext_camera?: boolean;
      ext_stats?: boolean;
      ext_collection?: boolean;
      mature_content?: boolean;
    },
  ) => {
    const result = await apiGet(
      `api/v1/oauth2/deviation/metadata`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviationMetaData>;
  };

  /**
   * Get a list of users who favorited the deviation.
   */
  public async whoFaved(
    params: { deviationid: string; offset?: number; limit?: number },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/deviation/whofaved`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviationWhoFaved>;
  }

  /**
   * Fetch the full data of a deviation.
   */
  public async content(
    params: { deviationid: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/deviation/content`,
      this.accessToken,
      {
        params,
      },
    );
    return result as Promise<DeviationContent>;
  }

  /**
   * Fetches the file download of a deviation, if available.
   */
  public async download(
    params: { deviationid: string; mature_content?: boolean },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/deviation/download/${params.deviationid}`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviationDownload>;
  }

  /**
   * Fetches the embedded content in a deviation.
   */
  public async embeddedContent(
    params: {
      deviationid: string;
      offset_deviationid?: string;
      offset?: number;
      limit?: number;
      mature_content?: boolean;
    },
  ) {
    const result = await apiGet(
      `api/v1/oauth2/deviation/embeddedcontent`,
      this.accessToken,
      { params },
    );
    return result as Promise<DeviationEmbeddedContent>;
  }
}
