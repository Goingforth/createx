import { FC } from "react";
import { useParams } from "react-router-dom";
import { Comments, HeroPageNews } from "../../../components";
import { ScrollToTop, DataPageNews } from "../../../utils";
import { dataNews, TypeNews } from "../../../data";

// import ErrorPage from "./ErrorPage/ErrorPage";

const NewsPage: FC = () => {
  const { id } = useParams();
  const pageData: TypeNews | undefined = DataPageNews(dataNews, id);

  return (
    pageData !== undefined && (
      <>
        <ScrollToTop />
        <HeroPageNews {...pageData} />
        <Comments id={pageData.id} comments={pageData.comments} />
      </>
    )
  );
};

export default NewsPage;
