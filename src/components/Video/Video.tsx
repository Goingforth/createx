import ReactPlayer from "react-player/youtube";
import { SvgSprite } from "../../uikit/";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const Video = (): React.ReactNode => {
  const Player = () => (
    <ReactPlayer
      light={`${VITE_BASE_URL_PHOTO}/construction.jpg`}
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
