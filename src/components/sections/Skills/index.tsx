import React from "react";
import useStyles from "./styles";

type Skill = {
  name: string;
  icon: string;
};

// React, PostgresQL, GraphQL, RESTful APIs, Kafka, Docker, RSpec, MiniTest, Jest, Chai, Cypress, React Testing Library

// Interests: Microservices, Design Patterns, CI/CD

const SKILLS_LIST: Skill[] = [
  {
    name: "Ruby",
    icon: "",
  },
  {
    name: "Ruby on Rails",
    icon: "",
  },
  {
    name: "Typescript",
    icon: "",
  },
  {
    name: "Javascript",
    icon: "",
  },
  {
    name: "Node",
    icon: "",
  },
  {
    name: "React",
    icon: "",
  },
  {
    name: "Postgres",
    icon: "",
  },
  {
    name: "GraphQL",
    icon: "",
  },
  {
    name: "RESTful APIs",
    icon: "",
  },
  {
    name: "Kafka",
    icon: "",
  },
  {
    name: "Redis",
    icon: "",
  },
  {
    name: "Sidekiq",
    icon: "",
  },
  {
    name: "Docker",
    icon: "",
  },
  {
    name: "RSpec",
    icon: "",
  },
  {
    name: "MiniTest",
    icon: "",
  },
  {
    name: "Jest",
    icon: "",
  },
  {
    name: "Chai",
    icon: "",
  },
  {
    name: "Cypress",
    icon: "",
  },
  {
    name: "React Testing Library",
    icon: "",
  },
];

const Skills = () => {
  const classes = useStyles();

  return <div className={classes.container}></div>;
};

export default Skills;
