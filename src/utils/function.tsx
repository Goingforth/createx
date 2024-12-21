import { useLocation } from "react-router-dom";
import { TypeNews } from "../data";

export const DataPage = (data: any) => {
  const location = useLocation().pathname;
  return data?.find((item: any) => item.page === location);
};

export const DataPageNews = (data: any, id: string | undefined) => {
  return data?.find((item: TypeNews) => item.id === id);
};
