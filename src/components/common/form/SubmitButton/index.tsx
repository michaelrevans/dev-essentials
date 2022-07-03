import React, { ButtonHTMLAttributes } from "react";
import useStyles from "./styles";

interface SubmitButtonProps extends ButtonHTMLAttributes<string> {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  const styles = useStyles();
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default SubmitButton;
