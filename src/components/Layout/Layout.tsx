import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./layout.module.scss";

export const Layout: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
