import { FC } from "react";
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
          <div className={styles.iconWrapper}>
            <SvgSprite id='linkedin' />
          </div>
          <div className={styles.iconWrapper}>
            <SvgSprite id='twitter' />
          </div>
          <div className={styles.iconWrapper}>
            <SvgSprite id='facebook' />
          </div>
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
