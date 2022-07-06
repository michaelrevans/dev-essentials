import React, { useState } from "react";
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
      </div>
    }
  </div>
}

export default Faq;
