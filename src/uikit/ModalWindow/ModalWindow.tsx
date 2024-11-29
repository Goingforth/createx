import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./ModalWindow.module.scss";

const ModalRootElement = document.querySelector("#modal");
type TypeModalWindow = {
  children: React.ReactNode;
  open: boolean;
};

export const ModalWindow: FC<TypeModalWindow> = ({ children, open }) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (open) {
      ModalRootElement?.appendChild(element);
      return () => {
        ModalRootElement?.removeChild(element);
      };
    }
  });
  if (open) {
    return createPortal(
      <>
        <div className={styles.backdrop} />,
        <div className={styles.modalWrapper}>{children}</div>,
      </>,
      element
    );
  }
  return null;
};
