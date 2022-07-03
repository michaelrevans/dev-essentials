import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  formGroup: {
    display: "flex",
    flexDirection: "column",

    "& + &": {
      marginTop: 30,
    },
  },
});

export default styles;
