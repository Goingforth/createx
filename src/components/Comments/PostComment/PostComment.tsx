import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postCommentNewsByID } from "../../../api/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InputsForm, TypeInputsForm } from "../../index";

import { TypeFormValue, dataPostCommentForm } from "../../../data";
import styles from "./PostComment.module.scss";

const styleForm: React.CSSProperties = {
  width: "810px",
  height: "342px",
  display: "grid",
  gridTemplateColumns: "298px 92px 30px 92px 298px",
  gridTemplateRows: "86px 22px 134px 48px 52px",
  gridTemplateAreas: `"name name . email email " ". . . . ." "comment comment comment comment comment "  ". . . . ." ". btn btn btn . "`,
};
const filterData = dataPostCommentForm.filter((item) => item.name !== "btn");
const initFormValues = Object.fromEntries(
  filterData.map(({ name, defaultValue = "" }) => [name, defaultValue])
);
const initFormStatusInput = Object.fromEntries(
  filterData.map(({ name }) => [name, "blank"])
);

interface DataPostComment {
  replyName: string;
  setReplyName: React.Dispatch<React.SetStateAction<string>>;
  isReply: boolean;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PostComment: FC<DataPostComment> = (props) => {
  const queryClient = useQueryClient();
  const { isReply, setIsReply, replyName, setReplyName } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(initFormStatusInput);
  const [formValues, setFormValues] = useState<TypeFormValue>(initFormValues);
  const idNews = useParams().id;

  const initState = () => {
    setFormValues(initFormValues);
    setStatusInputs(initFormStatusInput);
    isReply && (setIsReply(false), setReplyName(""));
  };

  const { mutate } = useMutation({
    mutationKey: [`postsnews/${idNews}`],
    mutationFn: () => postCommentNewsByID(idNews, formValues, replyName),
    onSuccess: () => {
      initState();
      queryClient.invalidateQueries({ queryKey: [`newsByID/${idNews}`] });
    },
  });

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

  const sendDataForm = async () => {
    mutate();
  };
  const PostCommentFormProps: TypeInputsForm = Object.assign(
    { data: dataPostCommentForm, style: styleForm, isDisabled, sendDataForm },
    stateInputs
  );

  return (
    <div className={styles.container}>
      <InputsForm {...PostCommentFormProps} />
    </div>
  );
};
