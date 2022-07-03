import React, { ChangeEvent } from "react";
import { InputHTMLAttributes } from "react";
import useStyles from "./styles";

type InputType = "text";

interface InputFieldProps extends InputHTMLAttributes<string> {
  value: string;
  setValue: (value: string) => void;
  type?: InputType;
}

const InputField = ({
  placeholder = "",
  value,
  setValue,
  type,
}: InputFieldProps) => {
  const classes = useStyles();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  const className =
    type === "text" ? classes.input : `${classes.input} ${classes.textarea}`;

  const fieldProps = {
    value,
    onChange: handleChange,
    placeholder,
    className,
  };

  if (type === "text") {
    return <input type="text" {...fieldProps} />;
  }

  return <textarea rows={4} {...fieldProps} />;
};

export default InputField;
