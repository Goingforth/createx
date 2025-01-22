export type TypeNamePage =
  | "/services"
  | "/services/interior_design"
  | "/work"
  | "/work/modern_cottage"
  | "/about_us"
  | "/news"
  | "/contacts"
  | "/about_us/available_positions";

type TypeHero = "heroBasic" | "heroNoImg";

export type TypeHeroPage = {
  page: TypeNamePage;
  typeHero: TypeHero;
  title: string;
  note?: string;
  bgImage?: string;
};
