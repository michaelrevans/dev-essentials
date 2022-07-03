import React from "react";
import NavBar from "../NavBar";
import "../../../styles/reset.css";
import "../../../styles/global.css";
import useStyles from "./styles";
import Footer from "../Footer";

type LayoutProps = React.PropsWithChildren<any>;

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.body}>{children}</div>
      <Footer className={classes.footer} />
    </div>
  );
}
