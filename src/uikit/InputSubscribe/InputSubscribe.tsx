import { FC, useState, useEffect } from "react";
import { Btn } from "../index";
import { retPattern } from "../../data";
import styles from "./InputSubscribe.module.scss";

export const InputSubscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!retPattern("email")?.test(email));
  }, [email]);
  const onClick = () => {
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <input
        name='email'
        placeholder='Your email address '
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <Btn
        title='subscribe'
        brdRadius='right'
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
};
