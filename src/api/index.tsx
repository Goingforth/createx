import { useData } from "./getData.service/useData";
import { useDataByPage } from "./getData.service/useDataByPage";
import { useGalleryByName } from "./getData.service/useGalleryByName";
import { useNewsByQuery } from "./getData.service/useNewsByQuery";
import { useNewsByID } from "./getData.service/useNewsByID";
import { postCommentNewsByID } from "./postData.service/postCommentNews";

export {
  useData,
  useDataByPage,
  useGalleryByName,
  useNewsByQuery,
  useNewsByID,
  postCommentNewsByID,
};
