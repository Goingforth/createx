export type TypeFormValue = { [k: string]: string | boolean | File };

export type TypeFormValuesStatusInputs = {
  formValues: TypeFormValue;
  setFormValues: React.Dispatch<React.SetStateAction<TypeFormValue>>;
  statusInputs: {
    [k: string]: string;
  };
  setStatusInputs: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
};
