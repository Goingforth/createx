import { FC, useState } from "react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import SliderControls from "../../uikit/SliderControls/SliderControls";
import { dataTestimonialsCards } from "../../data";
import styles from "./Testimonials.module.scss";

const Testimonials: FC = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>What our clients are saying</div>
        <TestimonialsCard
          key={dataTestimonialsCards[active].id}
          {...dataTestimonialsCards[active]}
        />
        <div className={styles.sliderControls}>
          <SliderControls
            type='jump'
            currentSlide={active}
            numberBlockingSlide={dataTestimonialsCards.length - 1}
            onClickPrev={() => {
              setActive(active - 1);
            }}
            onClickNext={() => {
              setActive(active + 1);
            }}
          />
        </div>
        {/* {dataTestimonialsCards.map((card) => (
          <TestimonialsCard key={card.id} {...card} />
        ))} */}
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
