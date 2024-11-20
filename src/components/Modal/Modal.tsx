import { FC } from "react";
import { InputForms, Btn, SvgSprite } from "../../uikit";
import { retPattern, dataModalSubscribe } from "../../data";
import styles from "./Modal.module.scss";

type TypeModal = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalSubscribe: FC<TypeModal> = ({ setOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
        <SvgSprite id='cross' />
      </div>
      <h3 className={styles.title}>Subscribe to our newsletter</h3>
      <form className={styles.form}>
        <InputForms
          name='name'
          label='Name*'
          placeholder='Your name'
          pattern={retPattern("name")}
        />
        <InputForms
          name='email'
          label='Email*'
          placeholder='Your working email'
          pattern={retPattern("email")}
        />
      </form>
      <Btn form='solid' title='send' width={390} />
    </div>
  );
};

export const ModalSendCV: FC<TypeModal> = ({ setOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
        <SvgSprite id='cross' />
      </div>
      <h3 className={styles.title}>Send your CV</h3>
    </div>
  );
};
