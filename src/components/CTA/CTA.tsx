import { FC, useState } from "react";
import styles from "./CTA.module.scss";
import { Btn, ModalWindow } from "../../uikit";
// import { ModalSendCV, ModalSubscribe } from "../Modal/Modal";
import { ModalSubscribe } from "../ModalSubcribe/ModalSubscribe";

const CTA: FC = () => {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState("");

  const changeModal = (name: string) => {
    switch (name) {
      case "subscribe":
        return <ModalSubscribe setOpen={setOpen} />;
      // case "sendCV":
      //   return <ModalSendCV setOpen={setOpen} />;
      default:
        return;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Didn’t find what you were looking for?</h3>
        <p className={styles.note}>
          Send your CV or subscribe to our newsletter to receive information
          about new vacancies.
        </p>
        <div className={styles.blockBtn}>
          <Btn
            form='outline'
            size='large'
            title='subscribe'
            width={180}
            onClick={() => {
              setOpen(true), setModalName("subscribe");
            }}
          />
          <Btn
            form='solid'
            size='large'
            title='send cv'
            width={180}
            onClick={() => {
              setOpen(true), setModalName("sendCV");
            }}
          />
        </div>
      </div>
      <ModalWindow open={open} children={changeModal(modalName)} />
    </>
  );
};

export default CTA;
