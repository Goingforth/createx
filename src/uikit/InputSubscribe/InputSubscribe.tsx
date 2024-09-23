import { FC, useState, useEffect } from "react";
import Btn from "../Buttons/Btn/Btn";
import { patterns } from "../../data/data";
import styles from "./InputSubscribe.module.scss";

const InputSubscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!patterns["email"].test(email));
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
        onChange={(e: any) => setEmail(e.target.value)}
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

export default InputSubscribe;
