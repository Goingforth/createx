import { FC } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SectionWithChildren } from "../index";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
import { TypeTeamMember } from "../../data";
import axios from "axios";

import styles from "./Team.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;
const VITE_API_TEAM = import.meta.env.VITE_API_TEAM;

const TeamGallery: FC = () => {
  interface TypeDataTeam {
    dataTeam: TypeTeamMember[];
  }
  const [dataTeam, setDataTeam] = useState<TypeDataTeam>();
  useEffect(() => {
    axios
      .get(VITE_API_TEAM)
      .then((resp) => {
        const data = resp.data;
        setDataTeam(data);
      })
      .catch((error) => console.log(error));
  }, [setDataTeam]);

  return (
    <div className={styles.containerGallery}>
      {dataTeam !== undefined && (
        <>
          {JSON.parse(JSON.stringify(dataTeam)).map(
            (member: TypeTeamMember) => (
              <TeamMemberCard key={member.id} {...member} />
            )
          )}
        </>
      )}
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
