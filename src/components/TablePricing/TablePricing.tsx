import { FC } from "react";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";
import { dataTablePricing } from "../../data";
import styles from "./TablePricing.module.scss";

import Btn from "../../uikit/Buttons/Btn/Btn";

const TablePricing: FC = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles.items}>Items</th>
            <th className={styles.tariff}>
              BASIC <p className={styles.p}>$20 per m2</p>
            </th>
            <th className={styles.tariff}>
              STANDARD <p className={styles.p}>$30 per m2</p>
            </th>
            <th className={styles.tariff}>
              BUSINESS <p className={styles.p}>$40 per m2</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTablePricing.map(
            ({ item, basic, standart, business }, index) => (
              <tr className={index % 2 === 0 ? styles.trBody : ""}>
                <td className={styles.item}>{item}</td>
                <td>
                  {typeof basic === "boolean"
                    ? basic && <SvgSprite id='mark24' />
                    : basic}
                </td>
                <td>
                  {typeof standart === "boolean"
                    ? standart && <SvgSprite id='mark24' />
                    : standart}
                </td>
                <td>
                  {typeof business === "boolean"
                    ? business && <SvgSprite id='mark24' />
                    : business}
                </td>
              </tr>
            )
          )}
          <tr>
            <td></td>
            <td>
              <ButtonBasic />
            </td>
            <td>
              <ButtonBasic />
            </td>
            <td>
              <ButtonBasic />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btn}>
        <Btn size='large' />
        <Btn size='regular' />
        <Btn size='small' />
      </div>
      <div className={styles.btn}>
        <Btn size='large' form='outline' />
        <Btn size='regular' form='outline' />
        <Btn size='small' form='outline' />
      </div>
    </div>
  );
};

export default TablePricing;
