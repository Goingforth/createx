import { FC } from "react";
import { Link } from "react-router-dom";
import { TypeTeamMember } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./TeamMemberCard.module.scss";

const TeamMemberCard: FC<TypeTeamMember> = (props) => {
  const { image, name, position } = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt='' />
        <div className={styles.socialLinks}>
          <Link to="" className={styles.iconWrapper}>
            <SvgSprite id='linkedin' />
          </Link >
          <Link to="" className={styles.iconWrapper}>
            <SvgSprite id='twitter' />
          </Link >
          <Link to="" className={styles.iconWrapper}>
            <SvgSprite id='facebook' />
          </Link >
        </div>
      </div>
      <div className={styles.projectName}>
        <div className={styles.contentTitle}>{name}</div>
        <div className={styles.contentSubTitle}>{position}</div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
