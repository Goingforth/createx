import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import { TypeIdIcons } from "../SvgSprite/SvgSprite";

import styles from "./IconBoxBasic.module.scss";

type Props = {
  theme?: "light" | "basic";
  icon: TypeIdIcons;
  title?: string;
  content?: string;
};

export const IconBoxBasic: FC<Props> = ({
  theme = "basic",
  icon,
  title,
  content,
}) => {
  return (
    <div className={styles[theme]}>
      <div className='boxBasic'>
        <SvgSprite id={icon} />
        <p
          className={styles.title}
          style={{ marginTop: "24px", marginBottom: "8px" }}
        >
          {title}
        </p>
        {content && (
          <p
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: `${content}` }}
          />
        )}
      </div>
    </div>
  );
};
