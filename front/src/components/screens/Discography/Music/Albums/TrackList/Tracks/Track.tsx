import { FC } from "react";

import { ITrack } from "@/interfaces/music.interface";

interface TrackProps {
  track: ITrack["title"];
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const Track: FC<TrackProps> = ({
  track,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <li
      className="track-list__track"
      {...(swiperParallax && {
        "data-swiper-parallax": swiperParallax,
      })}
      {...(swiperParallaxDuration && {
        "data-swiper-parallax-duration": swiperParallaxDuration,
      })}
    >
      <h5>{track}</h5>
    </li>
  );
};

export default Track;
