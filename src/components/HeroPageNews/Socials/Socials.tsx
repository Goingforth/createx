import { FC } from "react";
import { Link } from "react-router-dom";
import { TypeIdIcons, SvgSprite } from "../../../uikit";

import styles from "./Socials.module.scss";
interface TypeSocialsIcon {
  id: string;
  socialId: TypeIdIcons;
  to: string;
}
const socialsIcon: TypeSocialsIcon[] = [
  {
    id: "social0",
    socialId: "facebook",
    to: "",
  },
  {
    id: "social1",
    socialId: "linkedin",
    to: "",
  },
  {
    id: "social2",
    socialId: "twitter",
    to: "",
  },
];

export const Socials: FC = () => {
  return (
    <div className={styles.container}>
      {socialsIcon.map(({ id, socialId, to }) => (
        <Link key={id} to={to} className={styles.iconWrapper}>
          <SvgSprite id={socialId} />
        </Link>
      ))}
    </div>
  );
};
