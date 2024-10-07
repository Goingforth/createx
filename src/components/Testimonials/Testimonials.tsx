import { FC } from "react";
//import { dataTestimonialsCards } from "../../data/dataTestimonialsCards";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { dataTestimonialsCards } from "../../data";
import styles from "./Testimonials.module.scss";

const Testimonials: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>What our clients are saying</div>
        {dataTestimonialsCards.map(
          ({ profileImg, image, content, name, position }) => (
            <div>
              <TestimonialsCard
                profileImg={profileImg}
                image={image}
                content={content}
                name={name}
                position={position}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;

type PropsTestimonialsBlock = {
  children?: React.ReactNode;
};

export const TestimonialsBlock: FC<PropsTestimonialsBlock> = () => {
  return <SectionWithChildren children={<Testimonials />} />;
};
