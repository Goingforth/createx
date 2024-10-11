import { FC } from "react";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./CEO.module.scss";

const CEO: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgCEO}>
        <img src='/ceo.jpg' alt='CEO image' />
      </div>
      <div className={styles.quotation}>
        <div className={styles.text}>
          <div className={styles.braces}>
            <SvgSprite id='braces' />
          </div>
          <div className={styles.content}>
            <p>
              Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in.
              Sed aliquet in egestas hac at proin sed quam. Etiam aliquet
              sagittis non, massa cum pulvinar. Et in leo, tempus purus
              vestibulum ut blandit et mi. Odio massa purus vel praesent arcu
              enim elit felis viverra.
            </p>
            <p>
              Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra
              quis metus amet eleifend amet. Vet suspendisse faucibus tempor
              ipsum integer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;
