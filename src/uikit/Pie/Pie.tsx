import { FC } from "react";
import { ColorsFigures, hexColorsFigures } from "../../data";
import styles from "./Pie.module.scss";

const hexToRgba = (hex: string | undefined = "", a: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${[
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ].join()},${a})`
    : "";
};

type TypeCircle = {
  color: ColorsFigures;
  pct?: number;
  a?: number;
};

const Circle: FC<TypeCircle> = ({ color, pct = 100, a = 1 }) => {
  const r = 71;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  const hex = hexColorsFigures.find((item) => item.color === color)?.hex;
  const rgba = hexToRgba(hex, a);
  return (
    <circle
      r={r}
      cx={74}
      cy={74}
      fill='transparent'
      stroke={strokePct !== circ ? rgba : ""} // remove colour as 0% sets full circumference
      strokeWidth={"6px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap='butt'
    ></circle>
  );
};

type TypeLabel = {
  label: string;
};

const Label: FC<TypeLabel> = ({ label }) => {
  return (
    <text
      x='50%'
      y='50%'
      dominantBaseline='central'
      textAnchor='middle'
      className={styles.label}
    >
      {label}
    </text>
  );
};

interface TypePie extends TypeCircle {
  label: string;
}

const Pie: FC<TypePie> = ({ pct, color, a, label }) => {
  return (
    <svg width={148} height={148}>
      <g transform={`rotate(-90 ${"74 74"})`}>
        {/* <Circle color={color} a={a} pct={100} />
        <Circle color={color} a={1} pct={pct} /> */}
        <Circle color={color} a={a} />
        <Circle color={color} pct={pct} />
      </g>
      <Label label={label} />
    </svg>
  );
};

export default Pie;
