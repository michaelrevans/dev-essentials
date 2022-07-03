import React, { LabelHTMLAttributes, ReactNode } from "react";
import useStyles from "./styles";

interface LabelProps extends LabelHTMLAttributes<string> {
  text: string | ReactNode;
}

const Label = ({ text }: LabelProps) => {
  const classes = useStyles();

  return <div className={classes.label}>{text}</div>;
};

export default Label;
