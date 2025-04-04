import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { dataSocialLinks, TypeContactsOffices } from "../../data";
import { SvgSprite, ServerError, LoadingWait } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./ContactsOffices.module.scss";

export const ContactsOffices: FC = () => {
  const [data, setData] = useState<TypeContactsOffices[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData("/offices", setData, setIsError, setIsLoading);
  }, []);

  return (
    <div className={styles.container}>
      <SectionWithChildren
        title='Our offices'
        subtitle='Give us a call, send us a note or visit our office. We can’t wait to hear from you!'
        children={
          <>
            {data !== undefined && (
              <div className={styles.offices}>
                {data.map(({ _id, city, address, call, email, schedule }) => (
                  <div key={_id} className={styles.office}>
                    <div className={styles.city}>{city}</div>
                    <div className={styles.map}>
                      <div className={styles.address}>{address}</div>
                      <NavLink
                        to={`https://www.google.com/maps/search/${address}`}
                        className={styles.link}
                      >
                        See on the map
                      </NavLink>
                    </div>
                    <div className={styles.block}>
                      <div>
                        <span>Call :</span>
                        <NavLink to={`tel:${call}`} className={styles.spans}>
                          {call}
                        </NavLink>
                      </div>
                      <div>
                        <span>Email :</span>
                        <NavLink
                          to={`mailto:${email}`}
                          className={styles.spans}
                        >
                          {email}
                        </NavLink>
                      </div>
                      <div>
                        <span>Schedule :</span>
                        <span className={styles.spans}>{schedule}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isError && <ServerError />}
            {isLoading && <LoadingWait />}
          </>
        }
      />
      <SectionWithChildren
        title='Find us at'
        mtChild='40px'
        children={
          <div className={styles.socialLinks}>
            {dataSocialLinks.map(({ id, icon, to }) => (
              <div key={id} className={styles.socialLink}>
                <NavLink to={to}>
                  <SvgSprite id={icon} />
                </NavLink>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};
