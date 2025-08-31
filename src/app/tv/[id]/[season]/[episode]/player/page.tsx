"use client";

import { tmdb } from "@/api/tmdb";
import { Params } from "@/types";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { use } from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";
const TvShowPlayer = dynamic(() => import("@/components/sections/TV/Player/Player"));

const TvShowPlayerPage: NextPage<Params<{ id: number; season: number; episode: number }>> = ({
  params,
}) => {
  const { id, season, episode } = use(params);

  const {
    data: tv,
    isPending: isPendingTv,
    error: errorTv,
  } = useQuery({
    queryFn: () => tmdb.tvShows.details(id),
    queryKey: ["tv-show-player-details", id],
  });

  const {
    data: seasonDetail,
    isPending: isPendingSeason,
    error: errorSeason,
  } = useQuery({
    queryFn: () => tmdb.tvShows.season(id, season),
    queryKey: ["tv-show-season", id, season],
  });

  if (isPendingTv || isPendingSeason) {
    return <Spinner size="lg" className="absolute-center" color="warning" variant="simple" />;
  }

  const EPISODE = seasonDetail?.episodes.find(
    (e) => e.episode_number.toString() === episode.toString(),
  );

  if (!EPISODE || errorTv || errorSeason) notFound();

  const isNotReleased = new Date(EPISODE.air_date) > new Date();

  if (isNotReleased) notFound();

  const currentEpisodeIndex = seasonDetail.episodes.findIndex(
    (e) => e.episode_number === EPISODE.episode_number,
  );

  const nextEpisodeNumber =
    currentEpisodeIndex < seasonDetail.episodes.length - 1
      ? new Date(seasonDetail.episodes[currentEpisodeIndex + 1].air_date) > new Date()
        ? null
        : seasonDetail.episodes[currentEpisodeIndex + 1].episode_number
      : null;

  const prevEpisodeNumber =
    currentEpisodeIndex > 0 ? seasonDetail.episodes[currentEpisodeIndex - 1].episode_number : null;

  return (
    <TvShowPlayer
      id={id}
      seriesName={tv.name}
      seasonName={seasonDetail.name}
      episode={EPISODE}
      episodes={seasonDetail.episodes}
      nextEpisodeNumber={nextEpisodeNumber}
      prevEpisodeNumber={prevEpisodeNumber}
    />
  );
};

export default TvShowPlayerPage;
