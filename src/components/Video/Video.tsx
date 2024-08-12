import { FC } from "react";
import ReactPlayer from "react-player/youtube";
import SvgSprite from "../SvgSprite/SvgSprite";

import poster from "/construction.jpg";
import styles from "./Video.module.scss";

const Video: FC = () => {
  return (
    <div className={styles.containerChildren}>
      <h1>We are Createx Construction Bureau </h1>
      <p className={[styles.large_regular, styles.info].join(" ")}>
        We are rightfully considered to be the best construction company in the
        USA.
      </p>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          light={poster}
          url='http://www.youtube.com/watch?v=CtLy8PXiL58'
          width='100%'
          height='100%'
          playIcon={<SvgSprite id='play-btn' />}
          playing
          controls
        />
      </div>
    </div>
  );
};

export default Video;
