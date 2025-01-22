import api from "./api";

export const getDataHeroPage = async (
  page: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await api.get(`/hero_page?page=${page}`);
    setData(response.data);
  } catch {
    setIsError(true);
  }
};
