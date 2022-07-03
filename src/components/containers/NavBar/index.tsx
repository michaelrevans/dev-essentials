import React, { useState } from "react";
import BrandLink from "../../common/BrandLink";
import useStyles from "./styles";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const classes = useStyles();

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const openClass = menuOpen ? "open" : "";

  const hamburgerClass = `${classes.hamburgerButton} ${openClass}`;
  const mobileNavClass = `${classes.mobileNav} ${openClass}`;

  return (
    <header className={classes.nav}>
      <div className={classes.home}>
        <BrandLink to="/" internal={true}>Michael Evans</BrandLink>
      </div>
      <div className={classes.hamburger}>
        <div onClick={clickHandler} className={hamburgerClass}>
          <div className={classes.top} />
          <div className={classes.middle} />
          <div className={classes.bottom} />
        </div>
      </div>
      <div className={classes.extraLinks}>
        <NavLinks />
      </div>
      <nav className={mobileNavClass}>
        <NavLinks />
      </nav>
    </header>
  );
}

type LinkType = {
  destination: string;
  text: string;
  internal: boolean;
  domain?: string;
};

const LINKS: LinkType[] = [
  // {
  //   destination: "/projects",
  //   text: "Projects",
  //   internal: true,
  // },
  // {
  //   destination: "/about",
  //   text: "About",
  //   internal: true,
  // },
  // {
  //   destination: "/contact",
  //   text: "Contact me",
  //   internal: true,
  // },
  // {
  //   destination: "",
  //   text: "Courses",
  //   internal: false,
  //   domain: process.env.DEV_ESSENTIALS_DOMAIN,
  // },
];

const NavLinks = () => {
  const classes = useStyles();

  return (
    <>
      {LINKS.map((link: LinkType) => (
        <BrandLink
          key={link.destination}
          to={link.destination}
          className={classes.link}
          internal={link.internal}
          domain={link.domain}
        >
          {link.text}
        </BrandLink>
      ))}
    </>
  );
};
