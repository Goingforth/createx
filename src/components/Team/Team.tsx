import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import { dataTeamMembers } from "../../data";

import styles from "./Team.module.scss";
import { NavLink } from "react-router-dom";

const TeamGallery: FC = () => {
  return (
    <div className={styles.containerGallery}>
      {dataTeamMembers.map((member) => (
        <TeamMemberCard key={member.id} {...member} />
      ))}
    </div>
  );
};

const Positions: FC = () => {
  return (
    <div className={styles.positions}>
      <div className={styles.invite}>
        Become a part of the best team in the construction market of the USA.
      </div>
      <NavLink className={styles.to} to='available_positions'>
        Available Positions
      </NavLink>
    </div>
  );
};

const Team: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren
        title='Our team'
        subtitle='People are at the heart of Createx Construction Bureau'
        children={[
          <TeamGallery key='TeamGallery' />,
          <Positions key='Positions' />,
        ]}
      />
      <div className={styles.imageWrapper}>
        <img src='/bgImage.jpg' alt='' width='300px' height='300px' />
      </div>
    </div>
  );
};

export default Team;
