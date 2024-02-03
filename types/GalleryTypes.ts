import { DeviantArtDeviation } from "./mod.ts";

export interface DeviantArtGalleryResult {
  has_more: boolean;
  next_offset: number | null;
  name?: string;
  results: DeviantArtDeviation[];
}

export interface DeviantArtGalleryAll {
  has_more: boolean;
  next_offset: number | null;
  results: DeviantArtDeviation[];
}

export interface DeviantArtGalleryFolders {
  results: DeviantArtGalleryObject[];
  has_more: boolean;
  next_offset: number | null;
}

export interface DeviantArtGalleryObject {
  folderid: string;
  parent: string | null;
  name: string;
  description: string;
  size?: number;
  thumb: DeviantArtDeviation | null;
  has_subfolders?: boolean;
  subfolders?: DeviantArtGalleryObject[];
  deviations?: DeviantArtDeviation[];
}