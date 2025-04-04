import api from "./api";

export const getData = async (
  collection: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await api.get(`${collection}`);
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

export const getDataByPage = async (
  collection: string,
  page: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await api.get(collection, {
      params: { page: `${page}` },
    });
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};
export const getGalleryByName = async (
  name: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await api.get("/gallerys", {
      params: { name: name },
    });
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

export const getNewsByQuery = async (
  params: { [key: string]: number | string[] },
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await api.get("/news", {
      params: params,
    });
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

export const getNewsByID = async (
  id: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  try {
    const response = await api.get(`/news/${id}`);
    setData(response.data);
    setIsError(false);
  } catch {
    setData([]);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};
