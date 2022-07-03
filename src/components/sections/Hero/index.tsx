import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <div className={classes.hero}>
        <div className={classes.imageContainer}>
          <StaticImage
            className={classes.image}
            src="../../../../images/michael-evans-profile-picture.jpeg"
            alt="Michael Evans' profile picture"
          />
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>
            My name is Michael Evans - Freelance Software Engineer.
          </h1>
          <h2 className={classes.technologies}>
            Ruby & Typescript | Ruby on Rails | Node | React | AWS | Interested
            in Event-Driven Systems
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
