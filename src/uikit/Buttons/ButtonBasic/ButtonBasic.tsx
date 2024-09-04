import { FC } from "react";
import styles from "./ButtonBasic.module.scss";

type Props = {
  type?: "submit" | "reset" | "button";
  title?: string;
  bg?: "primary" | "transparent";
  size: "large" | "regular" | "small";
  border?: boolean;
  borderR?: "none" | "all" | "left" | "right";
  disabled?: boolean;
  onClick?: any;
};

const ButtonBasic: FC<Props> = ({
  type = "button",
  title = "Large Button",
  bg = "primary",
  size,
  border,
  borderR,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        styles.basic,
        disabled === true ? styles.disabled : "",
        bg === "primary" ? styles.bgPrimary : "",
        bg === "transparent" ? styles.bgTransparent : "",
        size === "large" ? styles.large : "",
        size === "regular" ? styles.regular : "",
        size === "small" ? styles.small : "",
        border ? styles.border : "",
        borderR === "none" ? styles.borderR_None : "",
        borderR === "all" ? styles.borderR_All : "",
        borderR === "left" ? styles.borderR_Left : "",
        borderR === "right" ? styles.borderR_Right : "",
      ].join(" ")}
    >
      {title}
    </button>
  );
};

export default ButtonBasic;