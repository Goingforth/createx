import api from "../api";
import { useQuery } from "@tanstack/react-query";
import { TypeNews } from "../../data";

const getData = async (id: string | undefined) => {
  return await api.get<TypeNews>(`/news/${id}`);
};
export function useNewsByID(id: string | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`newsByID/${id}`],
    queryFn: () => getData(id),
    select: (data) => data?.data,
  });
  return { data: data, isLoading, isError };
}
