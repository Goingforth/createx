import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServerError } from "../../../uikit";

import { getNewsByID } from "../../../api/getData";
import { Comments, HeroPageNews } from "../../../components";
import { ScrollToTop } from "../../../utils";
import { TypeNews } from "../../../data";

const NewsPage: FC = () => {
  const [data, setData] = useState<TypeNews>();
  const [isError, setIsError] = useState(false);
  const [isNewComment, setNewComment] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    id !== undefined && getNewsByID(id, setData, setIsError);
    setNewComment(false);
  }, [isNewComment]);

  const commentsProps = {
    comments: data?.comments,
    setNewComment: setNewComment,
  };
  return data !== undefined && !isError ? (
    <>
      <ScrollToTop />
      <HeroPageNews {...data} />
      <Comments {...commentsProps} />
    </>
  ) : (
    <ServerError />
  );
};

export default NewsPage;
