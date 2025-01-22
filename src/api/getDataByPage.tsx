import api from "./api";

export const getDataByPage = async (
  collection: string,
  page: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await api.get(collection, {
      params: { page: `${page}` },
    });
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  }
};
