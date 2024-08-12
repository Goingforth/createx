import { FC, useState } from "react";
import ReactPlayer from "react-player/youtube";
import SvgSprite from "../SvgSprite/SvgSprite";
import VideoFile from "/public/сonstruction.mp4";
import poster from "/construction.jpg";
import styles from "./Video.module.scss";

const Video: FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const playVideo = () => {
    console.log("playvideo");
  };
  return (
    <div className={styles.containerChildren}>
      <h1>We are Createx Construction Bureau </h1>
      <p className={[styles.large_regular, styles.info].join(" ")}>
        We are rightfully considered to be the best construction company in the
        USA.
      </p>
      <div className={styles.playerWrapper}>
        {/* <img
          src={Img}
          className='video-thumb tiny'
          alt='thumb'
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        /> */}
        {/* <div style={{ opacity: isVideoLoaded ? 1 : 0 }}> */}
        <ReactPlayer
          light={poster}
          //   url='http://www.youtube.com/watch?v=CtLy8PXiL58'
          url='сonstruction.mp4'
          width='100%'
          height='100%'
          playIcon={<SvgSprite id='play-btn' />}
          playing
          controls
          //   onReady={onLoadedData}
        />

        {/* <div onClick={playVideo} className={styles.iconPlayVideo}>
          <SvgSprite id='play-btn' />
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Video;
