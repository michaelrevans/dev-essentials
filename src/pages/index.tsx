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
import Faq from "../components/common/Faq";

init("user_iuPsQoApXuEb73mveBtmL");

const serviceID = "service_5y4bhmk";
const templateID = "template_qmt9kor";

export default function Home({ location }: PageProps) {
  const { pathname } = location;
  const description =
    "Michael Evans is a Software Engineer based in Berlin, Germany. With over 5 years of experience in the industry, he enjoys working across the full stack with technologies such as Ruby on Rails, React, Node and Typescript.";

  const classes = useStyles();
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const [submitted, setSubmitted] = useState<boolean>(false);

  const clearForm = () => {
    setName("");
    setEmail("");
  };

  const handleSubmit = (event: FormEvent<any>) => {
    event.preventDefault();

    if (name === "") {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (email === "") {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const templateParams = {
      name,
      emailAddress: email,
      message: "I'm interested in the Dev Essentials course",
    };
    send(serviceID, templateID, templateParams);

    clearForm();

    setSubmitted(true);
  };

  return (
    <Layout>
      <Seo title="Dev Essentials Course" description={description} pathname={pathname} />

      <h1 id="sign-up">Dev Essentials Course</h1>

      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <p>Dev essentials is a digital course for career-switchers entering the development industry</p>
          <br />
          <p>In it you will learn about:</p>
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
              {nameError && <div className={classes.errorMessage}>Name is a required field</div>}
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
              {emailError && <div className={classes.errorMessage}>Email is a required field</div>}
            </FormGroup>
            <FormGroup>
              <SubmitButton text="Sign up" />
            </FormGroup>

            {submitted && <>
              <br />
              <p>Thanks for signing up - I'll let you know once the course is ready!</p>
            </>}
          </Form>
        </div>
      </div>

      <div className={classes.teaser}>
        <h2>Content Overview</h2>
        <p>
          The course puts a huge focus on project-based learning. All the skills you gain will be introduced in video or written form and solidified and internalised by practical exercises.
        </p>
        <br />
        <p>
          Let's take a look at what you will learn:
        </p>
        <ul>
          <li><strong>software fundamentals</strong> - start with the skills that are universal to all professional software roles</li>
          <li><strong>frontend fundamentals</strong> - learn the basic skills and technologies that every frontend developer needs</li>
          <li><strong>modern technology stack</strong> - master the skills that employers are looking for right now</li>
          <li><strong>professional mastery</strong> - learn the skills that professionals take for granted: soft skills that distinguish top performing developers from the rest</li>
          <li><strong>advanced concepts</strong> - take your skills to the next level to guarantee success as a professional developer</li>
          <li><strong>job search system</strong> - use the system I've created to find and apply for exactly the right jobs</li>
          <li><strong>BONUS: personal finance for developers</strong> - make your money work for you</li>
        </ul>
        <br />
        <p>Why take the course?</p>
        <ul>
          <li>you want to get a job as a professional software developer - I want to help you gain the skills and experience you'll need to get your first developer job - this course is aimed at getting you proficient with the fundamentals of being a developer, as well as the latest technologies that frontend developers used. If your ultimate goal is backend or full-stack development, this will give you a great foundation and set you up for success</li>
          <li>actionable content from an expert developer - I poured all my professional experience into the creation of this course and distilled it a concise and actionable course - each section contains a set of steps for you to follow that will lead to success</li>
          <li>self-paced yet efficient - go at your own pace, without wasting time learning things that won't help you find a developer job and perform it excellently</li>
          <li>money back guarantee - take the course for 30 days and if you're not satisfied, I'll give you a full time - no questions asked, no strings attached, no hard feelings</li>
        </ul>
        <br />
        <p>Why not take the course?</p>
        <ul>
          <li>if you want to be a mobile or desktop developer, a data scientist, a systems administrator or anything else that isn't focused on web development - this course is focused on the web, for other disciplines, you're probably better looking elsewhere</li>
          <li>if you want a fast solution regardless of cost - this isn't a bootcamp. There are many good Bootcamps out there that can make you a developer in a couple of months of you don't mind spending a lot and quitting your job with no guarantees of future employment - this course has been designed to do alongside full time work or study, with you taking the leap into the software industry when you're ready</li>
          <li>if you just want to learn a language or framework - the course is focused more on what to learn and the soft skills that you won't find in a typical video course. I will include links to resources that I recommend where necessary</li>
        </ul>
      </div>

      <div className={classes.faqs}>
        <h2>FAQs</h2>

        <Faq
          question="What technologies are included?"
          answer="As part of this course you'll be learning HTML, CSS, Sass, JavaScript, React as well as some TypeScript on top of command line skills, NPM, Jekyll"
        />
        <br />

        <Faq
          question="How long should it take to complete?"
          answer="There is around X hours of video content and each project should take between 1 and 3 hours to complete. However, there are no time limits or deadlines, and you can take as long as you need on each section. I suggest spending up to 6 weeks on the course and then using it as a long term resource for the future - there is plenty of content that will remain relevant well into your career as a developer"
        />
        <br />

        <Faq
          question="How long do I have access after I sign up?"
          answer="You'll get unlimited, lifetime access to the videos and all resources in the course. You'll also get 3 months free access to the Dev essentials community" />

        <br />
        <Faq
          question="What if I change my mind?"
          answer="If you decide within 30 days of buying the course, email me and I'll issue you a full refund - no questions asked"
        />
        <br />

        <Faq
          question="I'm still not sure if this course is right for me. What do I do?"
          answer="Book a call with me for a free consultation. We can discuss your situation and I'll advise you on whether this is the right solution for you. If you sign up and you're unhappy with the course, you can request a refund any time in the first 30 days."
        />
        <br />

        <Faq
          question="What are the benefits of being a developer?"
          answer="Software development is a highly sought after profession. The skills involved are also in high demand in other industries."
        />
      </div>
    </Layout >
  );
}
