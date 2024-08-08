import { FC } from "react";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
