import { FC, useState } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./Pagination.module.scss";
// type Props = {
//   activePage: number;
// };

const Pagination: FC = () => {
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4]);

  const onClickLeft = () => {
    const newPages = pages.map((page) => page - 1);
    setPages(newPages);
  };

  const onClickRight = () => {
    const newPages = pages.map((page) => page + 1);
    setPages(newPages);
  };
  return (
    <div className={styles.container}>
      {pages[0] !== 1 ? (
        <div className={styles.right} onClick={onClickLeft}>
          <SvgSprite id='left' />
        </div>
      ) : (
        <div className={styles.cap}></div>
      )}
      {pages.map((page) => (
        <div
          key={`pagination${page}`}
          className={[styles.number, page === active ? styles.active : ""].join(
            " "
          )}
          onClick={() => setActive(page)}
        >
          {page}
        </div>
      ))}
      <div className={styles.right} onClick={onClickRight}>
        <SvgSprite id='right' />
      </div>
    </div>
  );
};

export default Pagination;
