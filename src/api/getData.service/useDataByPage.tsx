import api from "../api";
import { useQuery } from "@tanstack/react-query";

const getData = async (collection: string, page: string) => {
  return await api.get(collection, {
    params: { page: `${page}` },
  });
};
export function useDataByPage(collection: string, page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}`],
    queryFn: () => getData(collection, page),
    select: (data) => data?.data,
  });
  return { data: data, isLoading, isError };
}
