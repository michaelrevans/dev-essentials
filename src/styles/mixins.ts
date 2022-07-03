export const breakpoints = {
  mobile: 320,
  tablet: 800,
  desktop: 1020,
};

export const mobile = `@media all and (max-width: ${breakpoints.mobile}px)`;
export const tablet = `@media all and (min-width: ${
  breakpoints.mobile + 1
}px) and (max-width: ${breakpoints.tablet}px)`;
export const laptop = `@media all and (min-width: ${
  breakpoints.tablet + 1
}px) and (max-width: ${breakpoints.desktop}px)`;
export const desktop = `@media all and (min-width: ${
  breakpoints.desktop + 1
}px)`;
