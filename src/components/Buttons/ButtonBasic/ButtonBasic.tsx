import { FC } from "react";
import styles from "./ButtonBasic.module.scss";

type Props = {
  type?: "submit" | "reset" | "button";
  title?: string;
  bg?: "primary" | "transparent";
  size: "large" | "regular" | "small";
  border?: boolean;
};

const ButtonBasic: FC<Props> = ({
  type = "button",
  title = "Large Button",
  bg = "primary",
  size,
  border,
}) => {
  return (
    <button
      type={type}
      className={[
        styles.basic,
        bg === "primary" ? styles.bgPrimary : "",
        bg === "transparent" ? styles.bgTransparent : "",
        size === "large" ? styles.large : "",
        size === "regular" ? styles.regular : "",
        size === "small" ? styles.small : "",
        border ? styles.border : "",
      ].join(" ")}
    >
      {title}
    </button>
  );
};

export default ButtonBasic;
