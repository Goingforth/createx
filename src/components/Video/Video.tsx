import ReactPlayer from "react-player/youtube";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";

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
      <SectionWithChildren
        title='We are Createx Construction Bureau'
        subtitle=' We are
      rightfully considered to be the best construction company in the USA.'
        children={Player()}
      />
    </>
  );
};

export default Video;
