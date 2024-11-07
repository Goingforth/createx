import { useLocation } from "react-router-dom";

export const DataPage = (data: any) => {
  const location = useLocation().pathname;
  return data?.find((item: any) => item.page === location);
};
