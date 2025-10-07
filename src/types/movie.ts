import { ContentType } from ".";

export interface SavedMovieDetails {
  adult: boolean;
  type: ContentType;
  backdrop_path: string;
  id: number;
  poster_path?: string;
  release_date: string;
  title: string;
  vote_average: number;
  saved_date: string;
}

export const DISCOVER_MOVIES_VALID_QUERY_TYPES = [
  "discover",
  "todayTrending",
  "thisWeekTrending",
  "Piular",
  "nowPlaying",
  "upcoming",
  "topRated",
] as const;

export type DiscoverMoviesFetchQueryType = (typeof DISCOVER_MOVIES_VALID_QUERY_TYPES)[number];

export const DISCOVER_TVS_VALID_QUERY_TYPES = [
  "discover",
  "todayTrending",
  "thisWeekTrending",
  "Piular",
  "onTheAir",
  "topRated",
] as const;

export type DiscoverTvShowsFetchQueryType = (typeof DISCOVER_TVS_VALID_QUERY_TYPES)[number];
