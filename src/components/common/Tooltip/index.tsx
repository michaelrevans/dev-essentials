import React, { useState } from "react";
import useStyles from "./styles";

type TooltipProps = {
  text: string;
};

const Tooltip = ({ text }: TooltipProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const classes = useStyles();

  let mouseOutTimer: NodeJS.Timeout;
  let mouseOverTimer: NodeJS.Timeout;

  const onMouseOver = () => {
    clearTimeout(mouseOutTimer);

    mouseOverTimer = setTimeout(() => {
      setHovered(true);
    }, 200);
  };

  const onMouseOut = () => {
    clearTimeout(mouseOverTimer);

    mouseOutTimer = setTimeout(() => {
      setHovered(false);
    }, 1000);
  };

  const handleClick = () => {
    if (hovered) {
      onMouseOut();
    } else {
      onMouseOver();
    }
  };

  return (
    <>
      <span
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={handleClick}
        className={classes.hoverBox}
      >
        {" "}
        i{" "}
        {hovered && (
          <span
            className={classes.tooltip}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </span>
    </>
  );
};

export default Tooltip;
