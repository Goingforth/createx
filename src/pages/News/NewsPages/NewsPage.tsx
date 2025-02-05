import { FC, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

//import { ServerError } from "../../uikit";
import { getNewsByID } from "../../../api/getData";
import { Comments, HeroPageNews } from "../../../components";
import { ScrollToTop } from "../../../utils";
// import { dataNews, TypeNews } from "../../../data";
import { TypeNews } from "../../../data";

// import ErrorPage from "./ErrorPage/ErrorPage";

const NewsPage: FC = () => {
  // const [data, setData] = useState<TypeNews>();
  // const [isError, setIsError] = useState(false);
  // const { id } = useParams();
  // console.log("useParams :", useParams());

  const { data } = useLocation().state;

  // useEffect(() => {
  //   id !== undefined && getNewsByID(id, setData, setIsError);
  // }, []);

  // const pageData: TypeNews | undefined = DataPageNews(dataNews, id);
  // console.log(data);

  return (
    // data !== undefined && (
    <>
      <ScrollToTop />
      <HeroPageNews {...data} />
      <Comments id={data._id} comments={data.comments} />
    </>
    // )
  );
};

export default NewsPage;
