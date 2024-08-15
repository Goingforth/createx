import ReactPlayer from "react-player/youtube";
import SvgSprite from "../SvgSprite/SvgSprite";
import BlockHome from "../BlockHome/BlockHome";

import poster from "/construction.jpg";

const Video = (): React.ReactNode => {
  const Player = () => (
    <ReactPlayer
      light={poster}
      url='http://www.youtube.com/watch?v=CtLy8PXiL58'
      width='1230px'
      height='500px'
      playIcon={<SvgSprite id='play-btn' />}
      playing
      controls
    />
  );
  return (
    <>
      <BlockHome
        title='We are Createx Construction Bureau'
        text=' We are
      rightfully considered to be the best construction company in the USA.'
        children={Player()}
        mb={120}
      />
    </>
  );
};

export default Video;
