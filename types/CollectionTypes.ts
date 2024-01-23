import { DeviantArtDeviation } from "./index.ts";

export interface DeviantArtFolders {
  results: Array<{
    folderid: string;
    name: string;
    size?: number;
    deviations?: DeviantArtDeviation;
  }>;
  has_more: boolean;
  next_offset: number | null;
}
