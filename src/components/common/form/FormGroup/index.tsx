import React, { PropsWithChildren, ReactNode } from "react";
import useStyles from "./styles";

type FormGroupType = PropsWithChildren<ReactNode>;

const FormGroup = ({ children }: FormGroupType) => {
  const classes = useStyles();

  return <div className={classes.formGroup}>{children}</div>;
};

export default FormGroup;
