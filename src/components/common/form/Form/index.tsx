import React, { FormHTMLAttributes } from "react";
import useStyles from "./styles";

interface FormProps extends FormHTMLAttributes<any> {}

const Form = ({ onSubmit, children, className = "" }: FormProps) => {
  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} className={`${classes.form} ${className}`}>
      {children}
    </form>
  );
};

export default Form;
