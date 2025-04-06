import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { TypeDataServicesItem } from "../../data";
import {
  IconBoxBasic,
  ViewAll,
  TypeViewAll,
  ServerError,
  LoadingWait,
} from "../../uikit";

import { useData } from "../../api/index";

import styles from "./ServicesView.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const ServicesView: FC = () => {
  const { data, isLoading, isError } = useData("/services_item");
  const [blockHover, setBlockHover] = useState(false);
  const [isHover, setIsHover] = useState("");

  const PropsViewAll: TypeViewAll = {
    titleViewAll: "Learn more about our services",
    to: "/services",
    btnTitle: "View services",
  };

  return (
    <div className={styles.servicesView}>
      {data && (
        <div className={styles.container}>
          {data.map((item: TypeDataServicesItem) => (
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
                    ? `url(${VITE_BASE_URL_PHOTO}/${item.bgHoverImage})`
                    : "",
              }}
            >
              <IconBoxBasic {...item} />
            </Link>
          ))}
        </div>
      )}
      {isError && <ServerError />}
      <div>
        <ViewAll {...PropsViewAll} />
        {isLoading && <LoadingWait />}
      </div>
    </div>
  );
};

export default ServicesView;
