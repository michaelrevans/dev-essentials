import { createUseStyles } from "react-jss";
import { brand } from "../../../styles/brand";

const styles = createUseStyles({
  container: {
    boxShadow: `0 0 7px ${brand.colors.contrast}`,
    borderRadius: "10px",
    padding: "30px",

    "& + &": {
      margin: {
        top: "40px",
      },
    },
  },

  title: {
    fontSize: "30px",
  },

  skillsSection: {
    margin: {
      top: "20px",
    },
  },
  skillBadge: {
    padding: "5px",
    display: "inline-block",
    border: `1px solid ${brand.colors.contrast}`,
    margin: {
      right: "10px",
      top: "5px",
    },
  },

  linkContainer: {
    margin: {
      top: "20px",
    },
  },
});

export default styles;
