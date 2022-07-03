import { createUseStyles } from "react-jss";
import { brand } from "../../../styles/brand";
import {
  breakpoints,
  desktop,
  laptop,
  mobile,
  tablet,
} from "../../../styles/mixins";

const gutter: number = 30;
export const headerHeight: number = 80;
const footerHeight: number = 80;

const styles = createUseStyles({
  layout: {
    backgroundColor: brand.colors.primary,
    color: brand.colors.text,
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: `${headerHeight}px 1fr ${footerHeight}px`,
    gridTemplateAreas: `
      ". header ."
      ". body ."
      ". footer ."
    `,

    [mobile]: {
      gridTemplateColumns: `${gutter / 2}px 1fr ${gutter / 2}px`,
    },
    [tablet]: {
      gridTemplateColumns: `${gutter}px 1fr ${gutter}px`,
    },
    [laptop]: {
      gridTemplateColumns: `1fr ${breakpoints.tablet - gutter * 2}px 1fr`,
    },
    [desktop]: {
      gridTemplateColumns: `1fr ${breakpoints.desktop - gutter * 2}px 1fr`,
    },

    "& a": {
      color: brand.colors.text,
    },
  },
  header: {
    gridArea: "header",
    alignSelf: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: brand.colors.primary,
    zIndex: 100,
    height: 80,
    display: "flex",
    margin: "0 auto",
    padding: "0 30px",

    [laptop]: {
      width: `${breakpoints.tablet}px`,
    },
    [desktop]: {
      width: `${breakpoints.desktop}px`,
    },

    "&:after": {
      content: "''",
      height: 1,
      position: "absolute",
      right: -2000,
      left: -2000,
      bottom: 0,
      background: brand.colors.contrast,
    },
  },
  body: {
    gridArea: "body",
    padding: "30px 0",
  },
  footer: {
    gridArea: "footer",
  },
  other: {
    marginTop: "100px",
  },
});

export default styles;
