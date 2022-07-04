/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-jss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: "./src/images/",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ],

  siteMetadata: {
    title: "Michael Evans | Freelance Software Developer",
    titleSuffix: " | Michael Evans | Freelance Software Engineer",
    description:
      "Michael Evans is a Software Engineer based in Berlin, Germany. With over 5 years of experience in the industry, he enjoys working across the full stack with technologies such as Ruby on Rails, React, Node and Typescript.",
    siteUrl: "https://michaelrevans.me",
    og: {
      siteName: "Michael Evans - Freelance Software Developer",
      twitterCreator: "@michaelrevans91",
    },
  },
}
