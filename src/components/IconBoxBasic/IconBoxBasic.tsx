import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";

type Props = {
  icon: string;
  title: string;
  content: string;
};

const IconBoxBasic: FC<Props> = ({ icon, title, content }) => {
  return (
    <div className='boxBasic'>
      <SvgSprite id={icon} />
      <p
        className='lead_bold'
        style={{ marginTop: "24px", marginBottom: "8px" }}
      >
        {title}
      </p>
      <p
        className='base_regular'
        dangerouslySetInnerHTML={{ __html: `${content}` }}
      />
    </div>
  );
};

export default IconBoxBasic;
