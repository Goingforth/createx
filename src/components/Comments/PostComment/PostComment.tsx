import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  postCommentNewsByID,
  postCommentReplyByID,
} from "../../../api/postCommentNews";
import { InputsForm, TypeInputsForm } from "../../index";

import { TypeFormValue, dataPostCommentForm } from "../../../data";
import { Btn } from "../../../uikit";
import styles from "./PostComment.module.scss";

const styleForm: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "390px 390px",
  gridTemplateRows: "86px 134px",
  gap: "22px 30px",
  gridTemplateAreas: `"name email" "comment comment" `,
};

const initForm = Object.fromEntries(
  dataPostCommentForm.map(({ name, defaultValue = "" }) => [name, defaultValue])
);
const initStatusInput = Object.fromEntries(
  dataPostCommentForm.map(({ name }) => [name, "blank"])
);

interface DataPostComment {
  setNewComment: React.Dispatch<React.SetStateAction<boolean>>;
  replyId: string;
  setReplyId: React.Dispatch<React.SetStateAction<string>>;
  isReply: boolean;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostComment: FC<DataPostComment> = (props) => {
  const { setNewComment, replyId, setReplyId, isReply, setIsReply } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(initStatusInput);
  const [formValues, setFormValues] = useState<TypeFormValue>(initForm);
  const idNews = useParams().id;

  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);

  const stateInputs = {
    statusInputs: statusInputs,
    setStatusInputs: setStatusInputs,
    formValues: formValues,
    setFormValues: setFormValues,
  };
  const PostCommentFormProps: TypeInputsForm = Object.assign(
    { data: dataPostCommentForm, style: styleForm },
    stateInputs
  );

  const onClick = () => {
    isReply
      ? (postCommentReplyByID(replyId, formValues), setIsReply(false))
      : postCommentNewsByID(idNews, formValues);
    setReplyId("");
    setNewComment(true);
    setFormValues(initForm);
    setStatusInputs(initStatusInput);
  };
  return (
    <div className={styles.container}>
      <InputsForm {...PostCommentFormProps} />
      <Btn
        width={215}
        title='Post comment'
        disabled={isDisabled}
        onClick={onClick}
      />
    </div>
  );
};
