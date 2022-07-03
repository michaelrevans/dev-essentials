import { createUseStyles } from "react-jss";
import { brand } from "../../../styles/brand";

const styles = createUseStyles({
  brandLink: {
    color: brand.colors.text,
    textDecoration: "none",

    "&:hover": {
      color: brand.colors.textDarker,
      textShadow: `0 0 3px ${brand.colors.secondary}`,
    },
  },
});

export default styles;
