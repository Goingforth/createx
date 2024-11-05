import { FC } from "react";
import { SvgSprite, TypeIdIcons } from "../index";

import styles from "./IconBoxBasic.module.scss";

type Props = {
  theme?: "light" | "basic";
  icon: TypeIdIcons;
  title?: string;
  content?: string;
};

const IconBoxBasic: FC<Props> = ({ theme = "basic", icon, title, content }) => {
  return (
    <div className='boxBasic'>
      <SvgSprite id={icon} />
      <p
        className={[
          theme === "light" ? styles.titleLight : "",
          theme === "basic" ? styles.titleBasic : "",
        ].join(" ")}
        style={{ marginTop: "24px", marginBottom: "8px" }}
      >
        {title}
      </p>
      {content && (
        <p
          className={[
            theme === "light" ? styles.contentLight : "",
            theme === "basic" ? styles.contentBasic : "",
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: `${content}` }}
        />
      )}
    </div>
  );
};

export default IconBoxBasic;
