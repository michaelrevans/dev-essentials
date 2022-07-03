import React from "react";
import Tooltip from "../Tooltip";
import useStyles from "./styles";

type ProjectCard = {
  project: Project;
};

const ProjectCard = ({
  project: { title, descriptionTexts, skills, url, image, tooltip },
}: ProjectCard) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      {descriptionTexts.map((description: string) => (
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          key={description}
        />
      ))}

      <div className={classes.skillsSection}>
        {skills.map((skill: string) => (
          <span className={classes.skillBadge} key={skill}>
            {skill}
          </span>
        ))}
      </div>

      {url && (
        <p className={classes.linkContainer}>
          <a href={url} target="_blank" rel="nofollow">
            Link to project
          </a>
          {tooltip && <Tooltip text={tooltip} />}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
