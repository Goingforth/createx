import api from "./api";
import { TypeFormValue } from "../data";
export const postCommentReplyByID = async (
  id: string | undefined,
  formValues: TypeFormValue
) => {
  try {
    id !== undefined &&
      (await api.post(`/news/comments/reply/${id}`, {
        ...formValues,
        date: Date.now(),
      }));
  } catch (error) {
    console.log("error:", error);
  }
};

export const postCommentNewsByID = async (
  id: string | undefined,
  formValues: TypeFormValue
) => {
  try {
    id !== undefined &&
      (await api.post(`/news/comments/${id}`, {
        ...formValues,
        date: Date.now(),
      }));
  } catch (error) {
    console.log("error:", error);
  }
};
