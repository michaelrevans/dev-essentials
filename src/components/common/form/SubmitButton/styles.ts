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
    height: 40,
    fontSize: brand.fonts.normal,
    borderRadius: 20,
    cursor: "pointer",
    margin: {
      left: "auto",
      right: "auto",
    },
  },
});

export default styles;
