import api from "../api";
import { useQuery } from "@tanstack/react-query";
// import {
//   TypeSliderFullImage,
//   TypeClientsLogo,
//   TypeContactsOffices,
// } from "../../data";

// const getData = async (collection: string) => {
//   switch (collection) {
//     case "/slider_hero":
//       return await api.get<TypeSliderFullImage[]>("/slider_hero");
//     case "/clients_logo":
//       return await api.get<TypeClientsLogo[]>("/clients_logo");
//     case "/offices":
//       return await api.get<TypeContactsOffices[]>("/offices");
//   }
// };

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
