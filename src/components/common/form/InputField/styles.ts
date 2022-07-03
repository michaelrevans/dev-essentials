import { createUseStyles } from "react-jss";
import { brand } from "../../../../styles/brand";

const styles = createUseStyles({
  input: {
    outline: "none",
    border: "1px solid transparent",
    fontSize: brand.fonts.normal,
    padding: 10,
    height: 40,
    width: "100%",
    borderRadius: 10,

    "&:active": {
      borderColor: brand.colors.contrast,
    },
  },

  textarea: {
    height: "unset",
  },
});

export default styles;
