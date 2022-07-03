import { createUseStyles } from "react-jss";
import { desktop, laptop, mobile, tablet } from "../../../styles/mixins";

const borderWidth = 3;
const borderGap = 10;
const imageSize = 300;
const imageSizeMobile = 200;

const styles = createUseStyles({
  heroContainer: {
    height: "69vh",
    display: "flex",
    alignItems: "center",

    [mobile]: {
      height: "100%",
    },

    [tablet]: {
      height: "100%",
    },
  },

  hero: {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",

    [mobile]: {
      flexDirection: "column",
      marginTop: 0,
    },

    [tablet]: {
      flexDirection: "column",
      marginTop: 0,
    },

    [laptop]: {
      flexDirection: "row",
    },

    [desktop]: {
      flexDirection: "row",
    },
  },

  imageContainer: {
    flexBasis: `${imageSize}px`,
    flexShrink: 0,
    position: "relative",

    [mobile]: {
      flexBasis: `${imageSizeMobile}px`,
      width: `${imageSizeMobile}px`,
      marginBottom: "40px",
    },

    [tablet]: {
      flexBasis: `${imageSizeMobile}px`,
      width: `${imageSizeMobile}px`,
      marginBottom: "40px",
    },

    [laptop]: {
      height: `${imageSize}px`,
      marginRight: "50px",
    },

    [desktop]: {
      height: `${imageSize}px`,
      marginRight: "50px",
    },

    "&:before": {
      content: '""',
      zIndex: 5,
      position: "absolute",
      top: `-${borderWidth + borderGap}px`,
      left: `-${borderWidth + borderGap}px`,
      bottom: `-${borderWidth + borderGap}px`,
      right: `-${borderWidth + borderGap}px`,
      border: `${borderWidth}px solid white`,
      borderRadius: "50%",
      opacity: "70%",
    },
  },

  image: {
    borderRadius: "50%",
  },

  content: {
    flex: 4,
  },

  title: {
    [mobile]: {
      fontSize: "36px",
    },

    [tablet]: {
      fontSize: "36px",
    },

    [laptop]: {
      fontSize: "42px",
    },

    [desktop]: {
      fontSize: "42px",
    },
  },

  technologies: {
    fontSize: "28px",
    marginTop: "40px",
  },
});

export default styles;
