import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../components/Icon/Icon";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const navigation = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Work", to: "/work" },
    { name: "News", to: "/news" },
    { name: "Contacts", to: "/contacts" },
  ];
  const connection = [
    {
      iconID: "iPhone",
      to: "tel:405555-0128",
      us: "Call us",
      data: "(405) 555-0128",
    },
    {
      iconID: "chat",
      to: "mailto:hello@createx.com",
      us: "Talk to us",
      data: "hello@createx.com",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navBlock}>
        <Link to='/'>
          <Icon id='logo' width='130px' hight='22px' />
        </Link>
        <nav className={styles.navLinks}>
          {navigation.map(({ name, to }, index) => (
            <NavLink
              key={`nav${index}`}
              to={to}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : ""].join(" ")
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.connection}>
        {connection.map(({ iconID, to, us, data }, index) => (
          <NavLink
            key={`connection${index}`}
            to={to}
            className={styles.connectionItem}
          >
            <Icon id={iconID} width='40px' hight='40px' />
            <div>
              <div className={styles.connectionItemUs}>{us}</div>
              <div className={styles.connectionItemData}>{data}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
