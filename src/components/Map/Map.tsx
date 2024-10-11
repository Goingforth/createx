import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import SvgSpriteCountry from "../../uikit/SvgSpriteCountry/SvgSpriteCountry";
import { dataCountryFlag } from "../../data";
import styles from "./Map.module.scss";

const MapImg: FC = () => {
  return (
    <div className={styles.mapWrapper}>
      <img src='/map.jpg' alt='Map' />

      {dataCountryFlag.map((country) => (
        <div
          key={country.id}
          style={{
            position: "absolute",
            top: `${country.top}px`,
            left: `${country.left}px`,
          }}
        >
          <SvgSpriteCountry id={country.icon} />
        </div>
      ))}
    </div>
  );
};

const Map: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren title='We work worldwide' children={<MapImg />} />
    </div>
  );
};

export default Map;
