import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { DeviantArtUser } from "./mod.ts";

export interface DeviantArtDeviation {
  deviationid: string;
  printid: string | null;
  url?: string;
  title?: string;
  category?: string;
  category_path?: string;
  is_favourited?: boolean;
  is_deleted?: boolean;
  author?: DeviantArtUser;
  stats?: {
    comments: number;
    favourites: number;
  };
  published_time?: string;
  allows_comments?: boolean;
  preview?: {
    src: string;
    height: number;
    width: number;
    transparency: boolean;
  };
  content?: {
    src: string;
    height: number;
    width: number;
    transparency: boolean;
    filesize: number;
  };
  thumbs?: Array<{
    src: string;
    height: number;
    width: number;
    transparency: boolean;
  }>;
  videos?: Array<{
    src: string;
    quality: string;
    filesize: number;
    duration: number;
  }>;
  flash?: {
    src: string;
    height: number;
    width: number;
  };
  daily_deviation?: {
    body: string;
    time: string;
    giver: DeviantArtUser;
    suggester?: DeviantArtUser;
  };
  excerpt?: string;
  is_mature?: boolean;
  is_downloadable?: boolean;
  download_filesize?: number;
  challenge?: {
    type: string[];
    completed: boolean;
    tags: string[];
    locked?: boolean;
    credit_deviation: string | null;
    media: string[];
    level_label?: string;
    time_limit?: number;
    levels?: string[];
  };
  challenge_entry?: {
    challengeid: string;
    challenge_title: string;
    challenge?: DeviantArtDeviation;
    timed_duration: number;
    submission_time: string;
  };
  motion_book?: {
    embed_url: string;
  };
}

export const DeviationMetaDataSchema = z.object({
  metadata: z.array(z.object({
    deviationid: z.string(),
    printid: z.string(),
    author: DeviantArtUser,
    is_watching: z.boolean(),
    title: z.string(),
    description: z.string(),
    license: z.string(),
    allows_comments: z.boolean(),
    tags: z.array(z.object({
      tag_name: z.string(),
      sponsored: z.boolean(),
      sponsor: z.string(),
    })),
    is_favourited: z.boolean(),
    is_mature: z.boolean(),
    submission: z.object({
      creation_time: z.string(),
      category: z.string(),
      file_size: z.string(),
      resolution: z.string().nullish(),
      submitted_with: z.object({
        app: z.string(),
        url: z.string(),
      }),
    }).nullish(),
    stats: z.object({
      views: z.number(),
      views_today: z.number(),
      favourites: z.number(),
      comments: z.number(),
      downloads: z.number(),
      downloads_today: z.number(),
    }).nullish(),
    camera: z.record(z.string()).nullish(),
    collections: z.array(z.object({
      folderid: z.string(),
      name: z.string(),
    })).nullish()
  })),
});

export interface DeviationMetaData {
  metadata: {
    deviationid: string;
    printid: string;
    author: DeviantArtUser;
    is_watching: boolean;
    title: string;
    description: string;
    license: string;
    allows_comments: boolean;
    tags: Array<{
      tag_name: string;
      sponsored: boolean;
      sponsor: string;
    }>;
    is_favourited: boolean;
    is_mature: boolean;
    submission?: {
      creation_time: string;
      category: string;
      file_size: string;
      resolution?: string;
      submitted_with: {
        app: string;
        url: string;
      };
    };
    stats?: {
      views: number;
      views_today: number;
      favourites: number;
      comments: number;
      downloads: number;
      downloads_today: number;
    };
    camera?: {
      [key: string]: string;
    };
    collections?: Array<{
      folderid: string;
      name: string;
    }>;
  }[];
}

export interface DeviationContent {
  html: string;
  css: string;
  css_fonts: string[];
}

export interface DeviationWhoFaved {
  has_more: boolean;
  next_offset: number | null;
  results: {
    user: DeviantArtUser;
    time: number;
  };
}

export interface DeviationDownload {
  src: string;
  height: number;
  width: number;
  filesize: number;
}

export interface DeviationEmbeddedContent {
  has_more: boolean;
  next_offset: number;
  has_less: boolean;
  prev_offset: number;
  results: DeviantArtDeviation[];
}

export interface DeviantArtDeviationExtended extends DeviantArtDeviation {
  description: string;
  keywords: string[];
  copyright: string;
}
