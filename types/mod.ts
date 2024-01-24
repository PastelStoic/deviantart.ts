export * from "./ApiTypes.ts";
export * from "./DeviationTypes.ts";
export * from "./UserTypes.ts";
export * from "./BrowseTypes.ts";
export * from "./GalleryTypes.ts";
export * from "./CollectionTypes.ts";
export * from "./CommentTypes.ts";
export * from "./StashTypes.ts";

export type DeviantArtError = {
    error: "invalid_request" | "unauthorized" | "unverified_account" | "server_error" | "version_error";
    error_description: string;
    error_code: number;
    status: string;
}