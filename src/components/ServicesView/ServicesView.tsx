import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { dataServicesItems } from "../../data";
import { IconBoxBasic, ViewAll, TypeViewAll } from "../../uikit";

import styles from "./ServicesView.module.scss";

const ServicesView: FC = () => {
  const [blockHover, setBlockHover] = useState(false);
  const [isHover, setIsHover] = useState("");
  const PropsViewAll: TypeViewAll = {
    titleViewAll: "Learn more about our services",
    to: "/services",
    btnTitle: "View services",
  };

  return (
    <div className={styles.servicesView}>
      <div className={styles.container}>
        {dataServicesItems.map((item) => (
          <Link
            to={item.to}
            className={styles.box}
            key={item.id}
            onClick={() => {}}
            onMouseOver={() => {
              setBlockHover(true);
              setIsHover(item.id);
            }}
            onMouseOut={() => setBlockHover(false)}
            style={{
              backgroundImage:
                blockHover && item.id === isHover
                  ? `url(${item.bgHoverImage})`
                  : "",
            }}
          >
            <IconBoxBasic {...item} />
          </Link>
        ))}
      </div>
      <div>
        <ViewAll {...PropsViewAll} />
      </div>
    </div>
  );
};

export default ServicesView;
