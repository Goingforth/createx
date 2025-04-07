import api from "../api";
import { useQuery } from "@tanstack/react-query";

const getData = async (params: { [key: string]: number | string[] }) => {
  return await api.get("/news", {
    params: params,
  });
};
export function useNewsByQuery(params: { [key: string]: number | string[] }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/news/params", params],
    queryFn: () => getData(params),
    select: (data) => data?.data,
  });
  return { data: data, isLoading, isError };
}
