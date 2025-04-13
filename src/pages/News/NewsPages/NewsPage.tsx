import { FC } from "react";
import { useParams } from "react-router-dom";
import { ServerError, LoadingWait } from "../../../uikit";

import { useNewsByID } from "../../../api/index";
import { Comments, HeroPageNews } from "../../../components";
import { ScrollToTop } from "../../../utils";

const NewsPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useNewsByID(id);

  const commentsProps = {
    comments: data?.comments,
  };
  return data !== undefined && !isError ? (
    <>
      <ScrollToTop />
      <HeroPageNews {...data} />
      <Comments {...commentsProps} />
      {isLoading && <LoadingWait />}
    </>
  ) : (
    <ServerError />
  );
  return <h3>newsPage</h3>;
};

export default NewsPage;
