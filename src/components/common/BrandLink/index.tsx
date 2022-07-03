import { Link } from "gatsby";
import React from "react";
import { LinkProps } from "@reach/router";
import useStyles from "./styles";

interface BrandLinkProps extends LinkProps<never> {
  internal: boolean;
  domain?: string;
}

const BrandLink = ({
  to,
  internal,
  domain,
  children,
  className,
  ref,
  ...props
}: BrandLinkProps) => {
  const { brandLink } = useStyles();
  const linkClass = `${className ?? ""} ${brandLink}`;

  if (!internal) {
    return (
      <a href={`${domain}${to}`} className={linkClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClass} to={to} {...props}>
      {children}
    </Link>
  );
};

export default BrandLink;
