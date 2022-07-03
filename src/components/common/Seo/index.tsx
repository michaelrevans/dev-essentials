import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  pathname: string;
  description?: string;
};

type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};

function Seo({ title, pathname, description = "" }: SeoProps) {
  const { site, featuredImage } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
            twitterCreator
          }
        }
      }
      featuredImage: file(
        absolutePath: {
          glob: "**/src/images/michael-evans-profile-picture.jpeg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 800)
        }
      }
    }
  `);

  const ogImage = featuredImage?.childImageSharp
    ?.gatsbyImageData as unknown as ImageDataType;

  const pageTitle = title
    ? `${title} | Michael Evans | Freelance Software Engineer`
    : site?.siteMetadata?.title;

  const metas = [
    {
      name: "description",
      content: description ?? site?.siteMetadata?.description,
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:site_name",
      content: site!.siteMetadata!.og!.siteName,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: `${site?.siteMetadata?.siteUrl}${pathname}`,
    },
    {
      property: "og:image",
      content: ogImage.images.fallback.src,
    },
    {
      property: "og:image:width",
      content: ogImage.width,
    },
    {
      property: "og:image:height",
      content: ogImage.height,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:title",
      content: pageTitle,
    },
    {
      name: "twitter:image",
      content: ogImage.images.fallback.src,
    },
    {
      name: "twitter:creator",
      content: site!.siteMetadata!.og!.twitterCreator,
    },
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {metas.map(meta => (
        <meta key={meta.name ?? meta.property} {...meta} />
      ))}
    </Helmet>
  );
}

export default Seo;
