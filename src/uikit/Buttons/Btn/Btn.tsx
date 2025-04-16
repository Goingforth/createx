import { FC } from "react";
import styles from "./Btn.module.scss";

export type TypeBtnProps = {
  type?: "submit" | "reset" | "button";
  title?: string;
  size?: "large" | "regular" | "small";
  width?: number;
  bgcolor?: string;
  border?: string;
  form?: "solid" | "outline";
  brdRadius?: "none" | "all" | "left" | "right";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Btn: FC<TypeBtnProps> = ({
  type = "button",
  size = "regular",
  width,
  bgcolor,
  border,
  title = size === "large"
    ? "Large Button"
    : size === "small"
    ? "Small Button"
    : "Regular Button",
  form = "solid",
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
        size === "large" ? styles.large : "",
        size === "regular" ? styles.regular : "",
        size === "small" ? styles.small : "",
        form === "solid" ? styles.solid : "",
        form === "outline" ? styles.outline : "",

        brdRadius === "none" ? styles.brdRadius_None : "",
        brdRadius === "all" ? styles.brdRadius_All : "",
        brdRadius === "left" ? styles.brdRadius_Left : "",
        brdRadius === "right" ? styles.brdRadius_Right : "",
      ].join(" ")}
      style={{
        width: width !== undefined ? `${width}px` : "",
        background: bgcolor && bgcolor,
        border: border && border,
        padding: width !== undefined ? 0 : "",
      }}
    >
      {title}
    </button>
  );
};

export default Btn;
