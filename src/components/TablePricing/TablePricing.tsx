import { FC, useEffect, useState } from "react";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";

import { TypeTablePricingItem } from "../../data";

import { ServerError } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./TablePricing.module.scss";

import Btn from "../../uikit/Buttons/Btn/Btn";

const TablePricing: FC = () => {
  const [data, setData] = useState<Array<TypeTablePricingItem>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/table_pricing", setData, setIsError);
  }, []);
  return (
    <div className={styles.container}>
      {data && (
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
            {data.map(({ id, item, basic, standart, business }, index) => (
              <tr key={id} className={index % 2 === 0 ? styles.trBody : ""}>
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
            ))}
            <tr>
              <td></td>
              {[1, 2, 3].map((item) => (
                <td key={`sendRequest${item}`}>
                  <div className={styles.btn}>
                    <Btn size='small' form='outline' title='send request' />
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
      {isError && <ServerError />}
    </div>
  );
};

export default TablePricing;
