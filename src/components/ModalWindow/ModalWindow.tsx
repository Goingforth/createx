import { FC } from "react";
import styles from "./ModalWindow.module.scss";

const ModalWindow: FC = () => {
  return <div className={styles.backdrop}>ModalWindow</div>;
};

export default ModalWindow;
