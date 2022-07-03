import { createUseStyles } from "react-jss";
import { mobile, tablet } from "./mixins";

const touchScreenContainerStyles = {
  flexDirection: "column",
};

const touchScreenLeftColumnStyles = {
  marginBottom: 60,
}

const homeStyles = createUseStyles({
  container: {
    display: "flex",

    [mobile]: touchScreenContainerStyles,
    [tablet]: touchScreenContainerStyles,
  },
  leftColumn: {
    flexBasis: "50%",
    marginRight: 60,

    [mobile]: touchScreenLeftColumnStyles,
    [tablet]: touchScreenLeftColumnStyles,

    "& ul": {
      paddingLeft: 18,
    }
  },
  rightColumn: {
    flexBasis: "50%",
  },
});

export default homeStyles;
