import { FC } from "react";
import { NavLink } from "react-router-dom";

import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
import { TypeTeamMember } from "../../data";
import { useData } from "../../api/index";
import { ServerError, LoadingWait } from "../../uikit";

import styles from "./Team.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const TeamGallery: FC = () => {
  const { data, isLoading, isError } = useData("/team");

  return (
    <div className={styles.containerGallery}>
      {data && (
        <>
          {data.map((member: TypeTeamMember) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
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
      <div
        className={styles.imageWrapper}
        style={{
          backgroundImage: `url(${VITE_BASE_URL_PHOTO}/bgImage.jpg)`,
        }}
      />
    </div>
  );
};

export default Team;
