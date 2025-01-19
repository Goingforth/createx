import api from "./api";

export const getData = async (
  collection: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await api.get(`${collection}`);
    setData(response.data);
  } catch {
    setIsError(true);
  }
};
