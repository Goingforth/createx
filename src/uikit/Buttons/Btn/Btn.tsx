import { FC } from "react";
import styles from "./Btn.module.scss";

export type TypeBtnProps = {
  type?: "submit" | "reset" | "button";
  title?: string;
  // titleColor?: "white" | "primary";
  // bg?: "primary" | "transparent";
  size?: "large" | "regular" | "small";
  width?: number;
  form?: "solid" | "outline";

  // border?: boolean;
  // borderColor?: "white" | "primary";
  brdRadius?: "none" | "all" | "left" | "right";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Btn: FC<TypeBtnProps> = ({
  type = "button",

  //   titleColor,
  //   bg = "primary",
  size = "regular",
  width,
  title = size === "large"
    ? "Large Button"
    : size === "small"
    ? "Small Button"
    : "Regular Button",
  form = "solid",

  //   border,
  //   borderColor,
  brdRadius = "all",
  disabled = false,
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
        //   bg === "primary" ? styles.bgPrimary : "",
        //   bg === "transparent" ? styles.bgTransparent : "",
        size === "large" ? styles.large : "",
        size === "regular" ? styles.regular : "",
        size === "small" ? styles.small : "",
        form === "solid" ? styles.solid : "",
        form === "outline" ? styles.outline : "",

        //   border ? styles.border : "",
        //   borderColor === "white" ? styles.borderColorWhite : "",
        //   borderColor === "primary" ? styles.borderColorPrimary : "",
        brdRadius === "none" ? styles.brdRadius_None : "",
        brdRadius === "all" ? styles.brdRadius_All : "",
        brdRadius === "left" ? styles.brdRadius_Left : "",
        brdRadius === "right" ? styles.brdRadius_Right : "",
        //   titleColor === "white" ? styles.titleColorWhite : "",
        //   titleColor === "primary" ? styles.titleColorPrimary : "",
      ].join(" ")}
      style={{
        width: width !== undefined ? `${width}px` : "",

        padding: width !== undefined ? 0 : "",
      }}
    >
      {title}
    </button>
  );
};

export default Btn;
