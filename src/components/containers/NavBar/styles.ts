import { createUseStyles } from "react-jss";
import { brand } from "../../../styles/brand";
import { desktop, laptop, mobile, tablet } from "../../../styles/mixins";
import { headerHeight } from "../Layout/styles";

const hamburgerOffset = 11;

const hamburgerBars = {
  height: "4px",
  width: "32px",
  backgroundColor: "white",
  position: "absolute",
  borderRadius: "3px",
  transition: "0.5s all",
};

const styles = createUseStyles({
  nav: {
    display: "flex",
    width: "100%",
    fontSize: "30px",
  },
  home: {
    flex: 1,
  },
  hamburger: {
    [mobile]: {
      display: "block",
    },
    [tablet]: {
      display: "block",
    },
    [laptop]: {
      display: "none",
    },
    [desktop]: {
      display: "none",
    },
  },
  hamburgerButton: {
    height: "26px",
    width: "32px",
    position: "relative",
    cursor: "pointer",
  },
  top: {
    ...hamburgerBars,
    top: 0,

    ".open &": {
      transform: "rotate(45deg)",
      top: `${hamburgerOffset}px`,
    },
  },
  middle: {
    ...hamburgerBars,
    top: `${hamburgerOffset}px`,

    ".open &": {
      opacity: 0,
    },
  },
  bottom: {
    ...hamburgerBars,
    bottom: 0,

    ".open &": {
      transform: "rotate(-45deg)",
      bottom: `${hamburgerOffset}px`,
    },
  },

  extraLinks: {
    alignSelf: "flex-end",

    [mobile]: {
      display: "none",
    },
    [tablet]: {
      display: "none",
    },
    [laptop]: {
      display: "block",
    },
    [desktop]: {
      display: "block",
    },

    "& a": {
      marginLeft: "30px",
    },
  },
  link: {
    [mobile]: {
      display: "block",
    },
    [tablet]: {
      display: "block",
    },
    [laptop]: {
      display: "inline-block",
    },
    [desktop]: {
      display: "inline-block",
    },
  },

  mobileNav: {
    position: "fixed",
    top: `${headerHeight}px`,
    left: "-100vw",
    height: "100vh",
    width: "100vw",
    padding: "30px",
    background: brand.colors.primary,

    transition: "left 0.4s",

    "&.open": {
      left: 0,
    },

    "& a": {
      padding: {
        top: 10,
        bottom: 10,
      },
      marginBottom: 10,
    },

    [laptop]: {
      display: "none",
    },
    [desktop]: {
      display: "none",
    },
  },
});

export default styles;
