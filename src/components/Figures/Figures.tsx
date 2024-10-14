import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import Pie from "../../uikit/Pie/Pie";
import { dataFigures, TypeFigure } from "../../data";

import styles from "./Figures.module.scss";

const FigureBlock: FC<TypeFigure> = (figure) => {
  return (
    <div className={styles.figureWrapper}>
      <div>
        <Pie {...figure} />
      </div>
      <div className={styles.caption}>{figure.caption}</div>
    </div>
  );
};

const FiguresBlock: FC = () => {
  return (
    <div className={styles.containerFigures}>
      {dataFigures.map((figure) => (
        <FigureBlock key={figure.id} {...figure} />
      ))}
    </div>
  );
};

const Figures: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren
        title='Some facts and figures'
        children={<FiguresBlock />}
      />
    </div>
  );
};

export default Figures;
