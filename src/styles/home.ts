import { createUseStyles } from "react-jss";
import { brand } from "./brand";
import { mobile, tablet } from "./mixins";

const touchScreenContainerStyles = {
  flexDirection: "column",
};

const touchScreenLeftColumnStyles = {
  marginBottom: 60,
}

const homeStyles = createUseStyles({
  title: {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 50,
  },

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
  },
  rightColumn: {
    flexBasis: "50%",
  },

  errorMessage: {
    marginTop: 10,
  },

  submitButton: {
    backgroundColor: brand.colors.secondary,
    color: brand.colors.text,
    border: "1px solid",
    borderColor: brand.colors.text
  },

  teaser: {
    marginTop: 100,
  },

  faqs: {
    marginTop: 100,
  },
});

export default homeStyles;
