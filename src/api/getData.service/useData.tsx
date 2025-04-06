import api from "../api";
import { useQuery } from "@tanstack/react-query";

const getData = async (collection: string) => {
  return await api.get(`${collection}`);
};
export function useData(collection: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`${collection}`],
    queryFn: () => getData(collection),
    select: (data) => data?.data,
  });
  return { data: data, isLoading, isError };
}
