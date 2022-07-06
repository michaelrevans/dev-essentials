import { createUseStyles } from "react-jss";
import { brand } from "../../../../styles/brand";

const styles = createUseStyles({
  button: {
    padding: {
      left: 30,
      right: 30,
      top: 5,
      bottom: 5,
    },
    backgroundColor: brand.colors.secondary,
    color: brand.colors.text,
    border: `1px solid ${brand.colors.text}`,
    height: 40,
    fontSize: brand.fonts.normal,
    borderRadius: 20,
    cursor: "pointer",
    margin: {
      left: "auto",
      right: "auto",
    },

    "&:hover": {
      filter: "brightness(80%)",
    }
  },
});

export default styles;
