import React from "react";
import Helmet from "react-helmet";

export default React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    dateModified,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "@id": "https://edsonfrainlar.com#organization",
        name: "Edson Frainlar",
        url: "https://edsonfrainlar.com",
        sameAs: ["https://twitter.com/FrainlarEdson"],
        legalName: "Edson Frainlar",
        logo: {
          "@type": "ImageObject",
          url: "https://edsonfrainlar.com/img/ef-logo.jpg",
          width: 144,
          height: 144
        },
        founder: {
          "@type": "Person",
          name: "Edson Frainlar",
          image: {
            "@type": "ImageObject",
            url: "https://edsonfrainlar.com/img/edson-frainlar.jpg",
            width: 300,
            height: 300
          }
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "@id": "https://edsonfrainlar.com#website",
        url: "https://edsonfrainlar.com",
        name: "Edson Frainlar",
        alternateName: "Full Stack Developer | Edson Frainlar",
        author: {
          "@id": "https://edsonfrainlar.com#organization"
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "@id": url,
        url,
        headline: title,
        description,
        publisher: {
          "@id": "https://edsonfrainlar.com#organization"
        },
        sourceOrganization: {
          "@id": "https://edsonfrainlar.com#organization"
        }
      }
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image
            },
            description,
            author: {
              "@id": "https://edsonfrainlar.com#organization"
            },
            publisher: {
              "@id": "https://edsonfrainlar.com#organization"
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl
            },
            datePublished,
            dateModified: dateModified ? dateModified : datePublished
          }
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
