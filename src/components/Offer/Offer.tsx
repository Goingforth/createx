import { FC, useState, useEffect } from "react";
import { SvgSprite, ImgCloudinary } from "../../uikit";
import { Steps } from "../index";
//import OfferItem from "../OffferItem/OfferItem";
import styles from "./Offer.module.scss";

const Offer: FC = () => {
  const [active, setActive] = useState(true);
  const [isShowBox, setIsShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowBox(true));
  }, [active]);
  const onClick = () => setActive(!active);
  // const dataOffer = [
  //   {
  //     id: "offer0",
  //     offerImg: "/images/bgOffer.jpg",
  //     titleArgument: "Interior design of apartments",
  //     noteArgument:
  //       "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
  //   },
  //   {
  //     id: "offer1",
  //     offerImg: "/images/bgOffer.jpg",
  //     titleArgument: "Interior design of private houses",
  //     noteArgument:
  //       "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
  //   },
  // ];
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <div className={`offerImg ${isShowBox ? "offerImg_show" : ""}`}>
          <ImgCloudinary
            image={active ? "/images/bgOffer.jpg" : "/images/bgOffer1.jpg"}
          />
        </div>
        <div className={styles.offerContent}>
          <div className={styles.offerTitle}>We offer</div>
          <div>
            <div className={styles.icon}>
              <div className={styles.iconWrapper} onClick={onClick}>
                <SvgSprite id={active ? "minus" : "plus"} />
              </div>
              <div className={styles.titleArgument}>
                Interior design of apartments
              </div>
            </div>
            {active && (
              <div className={styles.noteArgument}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </div>
            )}
          </div>
          <div>
            <div className={styles.icon}>
              <div className={styles.iconWrapper} onClick={onClick}>
                <SvgSprite id={active ? "plus" : "minus"} />
              </div>
              <div className={styles.titleArgument}>
                Interior design of private houses
              </div>
            </div>
            {!active && (
              <div className={styles.noteArgument}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin.
                Imperdiet elementum faucibus dignissim purus. Fusce parturient
                diam magna ullamcorper morbi semper massa ac facilisis.
              </div>
            )}
          </div>
        </div>
      </div>
      <Steps />
    </div>
  );
};

export default Offer;
