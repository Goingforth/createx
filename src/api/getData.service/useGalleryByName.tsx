import api from "../api";
import { useQuery } from "@tanstack/react-query";

const getData = async (name: string) => {
  return await api.get("/gallerys", {
    params: { name: `${name}` },
  });
};
export function useGalleryByName(name: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/gallerys"],
    queryFn: () => getData(name),
    select: (data) => data?.data,
  });
  return { data: data, isLoading, isError };
}
