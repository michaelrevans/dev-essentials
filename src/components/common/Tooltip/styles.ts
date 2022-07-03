import { createUseStyles } from "react-jss";
import { brand } from "../../../styles/brand";

const size = 20;

const styles = createUseStyles({
  hoverBox: {
    position: "relative",
    display: "inline-flex",
    height: `${size}px`,
    width: `${size}px`,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    border: `1px solid ${brand.colors.text}`,
    borderRadius: "50%",
    cursor: "pointer",
    margin: {
      left: "10px",
    },
  },
  tooltip: {
    position: "absolute",
    bottom: `${size + 5}px`,
    backgroundColor: brand.colors.secondary,
    whiteSpace: "nowrap",
    cursor: "default",
    textAlign: "center",
    padding: {
      left: "10px",
      right: "10px",
      top: "5px",
      bottom: "5px",
    },
  },
});

export default styles;
