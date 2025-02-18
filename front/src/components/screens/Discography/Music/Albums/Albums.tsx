import { FC } from "react";
import clsx from "clsx";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import Album from "./Album";

import { IAlbum } from "@/interfaces/music.interface";

interface AlbumsProps {
  className?: string;
  albums: IAlbum[];
}

const Albums: FC<AlbumsProps> = ({ className, albums }) => {
  const slides = albums.map((album) => {
    const { slug } = album;

    const slide = {
      id: slug,
      slide: <Album album={album} />,
    };

    return slide;
  });

  return (
    <div className={clsx(className, "albums")}>
      <div className="albums__container">
        <SliderSwiper
          className="albums__slider-swiper"
          slides={slides}
          loop
          parallax
        />
      </div>
    </div>
  );
};

export default Albums;
