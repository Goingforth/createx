import { FC } from "react";
import { HeroPageNews } from "../../../../components";
import { ScrollToTop } from "../../../../utils";
import styles from "./News0.module.scss";

export const News0: FC = () => {
  return (
    <>
      <ScrollToTop />
      <HeroPageNews />
    </>
  );
};
