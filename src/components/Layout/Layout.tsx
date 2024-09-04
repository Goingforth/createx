import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Application from "../Application/Application";
import styles from "./layout.module.scss";

export const Layout: FC = () => {
  const location = useLocation();
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      {location.pathname !== "/contacts" && <Application />}

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
