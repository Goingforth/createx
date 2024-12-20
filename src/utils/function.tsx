import { useLocation, useParams } from "react-router-dom";

export const DataPage = (data: any) => {
  const location = useLocation().pathname;
  return data?.find((item: any) => item.page === location);
};

export const DataPageNews = (data: any) => {
  const idNews = useParams().id;
  return data?.find((item: any) => item.id === idNews);
};
