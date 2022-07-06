import { createUseStyles } from "react-jss";

const faqStyles = createUseStyles({
  question: {
    fontSize: 24,
    padding: 10,
    border: "1px solid",
    cursor: "pointer",
  },

  answer: {
    padding: 10,
    border: "1px solid"
  },
});

export default faqStyles;
