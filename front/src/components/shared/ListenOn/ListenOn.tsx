import { FC } from "react";
import clsx from "clsx";

import ListenOnList from "./ListenOnItems/ListenOnList";

import { IMusicPlatforms } from "@/interfaces/music.interface";

interface ListenOnProps {
  className?: string;
  links: IMusicPlatforms;
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const ListenOn: FC<ListenOnProps> = ({
  className,
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <div className={clsx(className, "listen-on")}>
      <ListenOnList
        links={links}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </div>
  );
};

export default ListenOn;
