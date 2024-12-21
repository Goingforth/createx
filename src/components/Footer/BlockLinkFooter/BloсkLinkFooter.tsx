import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BlockLinkFooter.module.scss";

type TypeProps = {
  title: string;
  links: any;
};
type TypeLinks = {
  name: string;
  to: string;
  label?: string | undefined;
};

const BloсkLinkFooter: FC<TypeProps> = ({ title, links }) => {
  return (
    <div className={styles.container}>
      <h6>{title}</h6>
      <nav className={styles.navLinks}>
        {links.map(({ name, to, label }: TypeLinks, index: string) => (
          <div key={name} className={styles.itemNav}>
            {label ? <div className={styles.label}>{label}</div> : ""}
            <NavLink
              key={`navFooter${index}`}
              to={to}
              className={({ isActive }) =>
                [
                  styles.navLink,
                  // styles.base_regular,
                  isActive ? styles.active : "",
                ].join(" ")
              }
            >
              {name}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default BloсkLinkFooter;
