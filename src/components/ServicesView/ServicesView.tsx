import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeDataServicesItem } from "../../data";
import {
  IconBoxBasic,
  ViewAll,
  TypeViewAll,
  ServerError,
  LoadingWait,
} from "../../uikit";

import { getData } from "../../api/getData";

import styles from "./ServicesView.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const ServicesView: FC = () => {
  const [blockHover, setBlockHover] = useState(false);
  const [isHover, setIsHover] = useState("");

  const [data, setData] = useState<Array<TypeDataServicesItem>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData("/services_item", setData, setIsError, setIsLoading);
  }, []);

  const PropsViewAll: TypeViewAll = {
    titleViewAll: "Learn more about our services",
    to: "/services",
    btnTitle: "View services",
  };

  return (
    <div className={styles.servicesView}>
      {data && (
        <div className={styles.container}>
          {data.map((item) => (
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
