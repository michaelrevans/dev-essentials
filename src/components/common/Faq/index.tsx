import React, { useState } from "react";
import SubmitButton from "../form/SubmitButton";
import useStyles from "./styles";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq = ({ question, answer }: FaqProps) => {
  const classes = useStyles();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  }

  return <div>
    <div className={classes.question} onClick={handleClick}>
      {question}
    </div>
    {showAnswer &&
      <div className={classes.answer}>
        <p>{answer}</p>

        <div className={classes.buttonContainer}>
          <a href="#sign-up" className={classes.button}>Sign up now</a>
        </div>
      </div>
    }
  </div>
}

export default Faq;
