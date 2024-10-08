import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import { dataTeamMembers } from "../../data";

import styles from "./Team.module.scss";

const TeamGallery: FC = () => {
  return (
    <div className={styles.containerGallery}>
      {dataTeamMembers.map((member) => (
        <TeamMemberCard {...member} />
      ))}
    </div>
  );
};

const Team: FC = () => {
  return (
    <SectionWithChildren
      title='Our team'
      subtitle='People are at the heart of Createx Construction Bureau'
      children={<TeamGallery />}
    />
  );
};

export default Team;
