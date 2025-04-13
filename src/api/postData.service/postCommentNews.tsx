import api from "../api";
import { TypeFormValue } from "../../data";

export const postCommentNewsByID = async (
  id: string | undefined,
  formValues: TypeFormValue,
  replyName: string | undefined
) => {
  try {
    id !== undefined &&
      (await api.post(`/news/comments/${id}`, {
        ...formValues,
        replyName,
        date: Date.now(),
      }));
  } catch (error) {
    console.log("error:", error);
  }
};
