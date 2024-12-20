import { FC } from "react";
import { useParams } from "react-router-dom";
import * as NewsPages from "./index";
import ErrorPage from "./ErrorPage/ErrorPage";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const NewsPage: FC = () => {
  const { id } = useParams();

  const NewPage =
    id !== undefined &&
    NewsPages[capitalizeFirstLetter(id) as keyof typeof NewsPages] !== undefined
      ? NewsPages[capitalizeFirstLetter(id) as keyof typeof NewsPages]
      : null;

  return (
    <>
      {NewPage !== null ? (
        <div>
          <NewPage />
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
