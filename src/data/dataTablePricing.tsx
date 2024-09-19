type TypeTablePricingItem = {
  item: string;
  basic: boolean | string;
  standart: boolean | string;
  business: boolean | string;
};
export const dataTablePricing: TypeTablePricingItem[] = [
  { item: "Installation plan", basic: true, standart: true, business: true },
  {
    item: "Planning solutions (2-3 options)",
    basic: true,
    standart: true,
    business: true,
  },
  { item: "Lighting plan", basic: true, standart: true, business: true },
  { item: "Flooring plan", basic: true, standart: true, business: true },
  {
    item: "Heating floor laying scheme",
    basic: true,
    standart: true,
    business: true,
  },
  {
    item: "Air conditioner zones layout",
    basic: true,
    standart: true,
    business: true,
  },
  {
    item: "3D visualization of all rooms",
    basic: "simplified",
    standart: true,
    business: true,
  },
  {
    item: "Visualization of each room (3-4 angles)",
    basic: false,
    standart: false,
    business: true,
  },
  { item: "Terms", basic: "10 days", standart: "20 days", business: "30 days" },
];
