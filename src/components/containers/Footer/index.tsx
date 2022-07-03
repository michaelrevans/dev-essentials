import React from "react";
import useStyles from "./styles";

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps) => {
  const classes = useStyles();

  const year = new Date().getFullYear();

  const footerClass = `${classes.footer} ${className}`;
  return (
    <footer className={footerClass}>
      <div className={classes.copyright}>Copyright &copy; {year}</div>
    </footer>
  );
};

export default Footer;
