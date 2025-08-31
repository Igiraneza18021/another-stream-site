import { Movie, TV } from "tmdb-ts/dist/types";

export type ContentType = "movie" | "tv";

export interface Params<T> {
  params: Promise<T>;
}

export type MovieParam =
  | "todayTrending"
  | "thisWeekTrending"
  | "popular"
  | "nowPlaying"
  | "upcoming"
  | "topRated";

export type TvShowParam =
  | "todayTrending"
  | "thisWeekTrending"
  | "popular"
  | "onTheAir"
  | "topRated";

export interface QueryList<T extends Movie | TV> {
  name: string;
  query: () => Promise<{
    page: number;
    results: T[];
    total_results: number;
    total_pages: number;
  }>;
  param: T extends Movie ? MovieParam : TvShowParam;
}

export interface SiteConfigType {
  name: string;
  description: string;
  favicon: string;
  navItems: {
    label: string;
    href: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
  }[];
  queryLists: {
    movies: QueryList<Movie>[];
    tvShows: QueryList<TV>[];
  };
  themes: {
    name: "light" | "dark" | "system";
    icon: React.ReactNode;
  }[];
  socials: {
    github: string;
  };
}

export interface PlayersProps {
  title: string;
  source: `https://${string}`;
  recommended?: boolean;
  fast?: boolean;
  ads?: boolean;
}
