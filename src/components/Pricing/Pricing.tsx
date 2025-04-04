import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import TablePricing from "../TablePricing/TablePricing";

const Pricing: FC = () => {
  return (
    <SectionWithChildren
      title='Pricing'
      subtitle='We offer you three categories of construction.'
      children={<TablePricing />}
    />
  );
};

export default Pricing;
