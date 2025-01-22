type TypeTablePricingItem = {
  id: string;
  item: string;
  basic: boolean | string;
  standart: boolean | string;
  business: boolean | string;
};
export const dataTablePricing: TypeTablePricingItem[] = [
  {
    id: "tablePricing0",
    item: "Installation plan",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing1",
    item: "Planning solutions (2-3 options)",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing2",
    item: "Lighting plan",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing3",
    item: "Flooring plan",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing4",
    item: "Heating floor laying scheme",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing5",
    item: "Air conditioner zones layout",
    basic: true,
    standart: true,
    business: true,
  },
  {
    id: "tablePricing6",
    item: "3D visualization of all rooms",
    basic: "simplified",
    standart: true,
    business: true,
  },
  {
    id: "tablePricing7",
    item: "Visualization of each room (3-4 angles)",
    basic: false,
    standart: false,
    business: true,
  },
  {
    id: "tablePricing8",
    item: "Terms",
    basic: "10 days",
    standart: "20 days",
    business: "30 days",
  },
];
