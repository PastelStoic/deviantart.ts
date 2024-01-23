// Generated by ts-to-zod
import { z } from "zod";
import {
  DeviantArtDeviation,
  DeviationMetaData,
  DeviationWhoFaved,
  DeviationEmbeddedContent,
  DeviantArtDeviationExtended,
} from "../types/DeviationTypes.ts";

import { DeviantArtUser } from "../types/UserTypes.ts";

export const deviationContentSchema = z.object({
  html: z.string(),
  css: z.string(),
  css_fonts: z.array(z.string()),
});

export const deviationDownloadSchema = z.object({
  src: z.string(),
  height: z.number(),
  width: z.number(),
  filesize: z.number(),
});

export const deviantArtUserSchema: z.ZodSchema<DeviantArtUser> = z.lazy(() =>
  z.object({
    userid: z.string(),
    username: z.string(),
    usericon: z.string(),
    type: z.string(),
    is_watching: z.boolean().optional(),
    details: z
      .object({
        sex: z.string().nullable(),
        age: z.number().nullable(),
        joinDate: z.string(),
      })
      .optional(),
    geo: z
      .object({
        country: z.string(),
        countryid: z.number(),
        timezone: z.string(),
      })
      .optional(),
    profile: z
      .object({
        user_is_artist: z.boolean(),
        artist_level: z.string().nullable(),
        artist_specialty: z.string().nullable(),
        real_name: z.string(),
        tagline: z.string(),
        website: z.string(),
        cover_photo: z.string(),
        profile_pic: deviantArtDeviationSchema,
      })
      .optional(),
    stats: z
      .object({
        watchers: z.number(),
        friends: z.number(),
      })
      .optional(),
  }),
);

export const deviantArtDeviationSchema: z.ZodSchema<DeviantArtDeviation> =
  z.lazy(() =>
    z.object({
      deviationid: z.string(),
      printid: z.string().nullable(),
      url: z.string().optional(),
      title: z.string().optional(),
      category: z.string().optional(),
      category_path: z.string().optional(),
      is_favourited: z.boolean().optional(),
      is_deleted: z.boolean().optional(),
      author: deviantArtUserSchema.optional(),
      stats: z
        .object({
          comments: z.number(),
          favourites: z.number(),
        })
        .optional(),
      published_time: z.string().optional(),
      allows_comments: z.boolean().optional(),
      preview: z
        .object({
          src: z.string(),
          height: z.number(),
          width: z.number(),
          transparency: z.boolean(),
        })
        .optional(),
      content: z
        .object({
          src: z.string(),
          height: z.number(),
          width: z.number(),
          transparency: z.boolean(),
          filesize: z.number(),
        })
        .optional(),
      thumbs: z
        .array(
          z.object({
            src: z.string(),
            height: z.number(),
            width: z.number(),
            transparency: z.boolean(),
          }),
        )
        .optional(),
      videos: z
        .array(
          z.object({
            src: z.string(),
            quality: z.string(),
            filesize: z.number(),
            duration: z.number(),
          }),
        )
        .optional(),
      flash: z
        .object({
          src: z.string(),
          height: z.number(),
          width: z.number(),
        })
        .optional(),
      daily_deviation: z
        .object({
          body: z.string(),
          time: z.string(),
          giver: deviantArtUserSchema,
          suggester: deviantArtUserSchema.optional(),
        })
        .optional(),
      excerpt: z.string().optional(),
      is_mature: z.boolean().optional(),
      is_downloadable: z.boolean().optional(),
      download_filesize: z.number().optional(),
      challenge: z
        .object({
          type: z.array(z.string()),
          completed: z.boolean(),
          tags: z.array(z.string()),
          locked: z.boolean().optional(),
          credit_deviation: z.string().nullable(),
          media: z.array(z.string()),
          level_label: z.string().optional(),
          time_limit: z.number().optional(),
          levels: z.array(z.string()).optional(),
        })
        .optional(),
      challenge_entry: z
        .object({
          challengeid: z.string(),
          challenge_title: z.string(),
          challenge: deviantArtDeviationSchema.optional(),
          timed_duration: z.number(),
          submission_time: z.string(),
        })
        .optional(),
      motion_book: z
        .object({
          embed_url: z.string(),
        })
        .optional(),
    }),
  );

export const deviationMetaDataSchema: z.ZodSchema<DeviationMetaData> = z.lazy(
  () =>
    z.object({
      metadata: z.array(
        z.object({
          deviationid: z.string(),
          printid: z.string(),
          author: deviantArtUserSchema,
          is_watching: z.boolean(),
          title: z.string(),
          description: z.string(),
          license: z.string(),
          allows_comments: z.boolean(),
          tags: z.array(
            z.object({
              tag_name: z.string(),
              sponsored: z.boolean(),
              sponsor: z.string(),
            }),
          ),
          is_favourited: z.boolean(),
          is_mature: z.boolean(),
          submission: z
            .object({
              creation_time: z.string(),
              category: z.string(),
              file_size: z.string(),
              resolution: z.string().optional(),
              submitted_with: z.object({
                app: z.string(),
                url: z.string(),
              }),
            })
            .optional(),
          stats: z
            .object({
              views: z.number(),
              views_today: z.number(),
              favourites: z.number(),
              comments: z.number(),
              downloads: z.number(),
              downloads_today: z.number(),
            })
            .optional(),
          camera: z.record(z.string()).optional(),
          collections: z
            .array(
              z.object({
                folderid: z.string(),
                name: z.string(),
              }),
            )
            .optional(),
        }),
      ),
    }),
);

export const deviationWhoFavedSchema: z.ZodSchema<DeviationWhoFaved> = z.lazy(
  () =>
    z.object({
      has_more: z.boolean(),
      next_offset: z.number().nullable(),
      results: z.object({
        user: deviantArtUserSchema,
        time: z.number(),
      }),
    }),
);

export const deviationEmbeddedContentSchema: z.ZodSchema<DeviationEmbeddedContent> =
  z.lazy(() =>
    z.object({
      has_more: z.boolean(),
      next_offset: z.number(),
      has_less: z.boolean(),
      prev_offset: z.number(),
      results: z.array(deviantArtDeviationSchema),
    }),
  );

export const deviantArtDeviationExtendedSchema: z.ZodSchema<DeviantArtDeviationExtended> =
  z.lazy(() =>
    deviantArtDeviationSchema.extend({
      description: z.string(),
      keywords: z.array(z.string()),
      copyright: z.string(),
    }),
  );
