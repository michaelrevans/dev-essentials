import React, { FormEvent, useState } from "react";
import { init, send } from "@emailjs/browser";
import Layout from "../components/containers/Layout";
import Seo from "../components/common/Seo";
import InputField from "../components/common/form/InputField";
import Form from "../components/common/form/Form";
import FormGroup from "../components/common/form/FormGroup";
import Label from "../components/common/form/Label";
import SubmitButton from "../components/common/form/SubmitButton";
import { PageProps } from "gatsby";
import useStyles from "../styles/home";

init("user_iuPsQoApXuEb73mveBtmL");

const serviceID = "service_5y4bhmk";
const templateID = "template_qmt9kor";

export default function Home({ location }: PageProps) {
  const { pathname } = location;
  const description =
    "Michael Evans is a Software Engineer based in Berlin, Germany. With over 5 years of experience in the industry, he enjoys working across the full stack with technologies such as Ruby on Rails, React, Node and Typescript.";

  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const clearForm = () => {
    setName("");
    setEmail("");
  };

  const handleSubmit = (event: FormEvent<any>) => {
    event.preventDefault();

    const templateParams = {
      name,
      emailAddress: email,
      message: "I'm interested in the Dev Essentials course",
    };
    send(serviceID, templateID, templateParams);

    clearForm();
  };

  return (
    <Layout>
      <Seo title="Dev Essentials Course" description={description} pathname={pathname} />

      <h1>Dev Essentials Course</h1>

      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <p>Dev essentials is a digital course for career-switchers entering the development industry</p>
          <br />
          <p>In it, you will learn about:</p>
          <ul>
            <li>Fundamental developer skills</li>
            <li>Getting your first job</li>
            <li>Running an effective job search</li>
            <li>Interview processes</li>
            <li>Working on a team of developers</li>
            <li>And more...</li>
          </ul>
        </div>
        <div className={classes.rightColumn}>
          <h2>Sign up for early access</h2>
          <Form onSubmit={handleSubmit} action="">
            <FormGroup>
              <Label text="Name" htmlFor="name" />
              <InputField
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                setValue={setName}
              />
            </FormGroup>
            <FormGroup>
              <Label text="Email" htmlFor="email" />
              <InputField
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                setValue={setEmail}
              />
            </FormGroup>
            <FormGroup>
              <SubmitButton text="Sign up" />
            </FormGroup>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
