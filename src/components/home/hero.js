import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import PreviewCompatibleImage from "../preview-compatible-image";
export default function Hero() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const page = data.markdownRemark;
        return (
          <div className="hero-wrapper h-card">
            <section className="hero is-primary is-bold position-relative">
              {/* <div className="hero-head"></div> */}
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-vcentered">
                    <div className="column is-5 landing-caption">
                      <figure className="image">
                        <img
                          className="is-rounded hero-avatar u-photo"
                          src="https://www.abhith.net/img/abhith.jpg"
                          alt="Abhith Rajan"
                        />
                      </figure>
                      <h1 className="title is-1 is-light is-semibold is-spaced main-title p-name">
                        {page.frontmatter.heading}
                      </h1>
                      <h2 className="subtitle is-light is-thin p-note">
                        {page.frontmatter.subheading}
                      </h2>
                      <p>
                        <Link
                          to="/about/"
                          className="button k-button k-primary raised has-gradient is-fat is-bold"
                        >
                          <span className="text">Read More</span>
                          <span className="front-gradient"></span>
                        </Link>
                      </p>
                    </div>
                    <div className="column is-7">
                      <figure className="image">
                        <a
                          href="https://www.abhith.net"
                          className="u-url u-uid"
                        >
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: page.frontmatter.image,
                              alt: `${page.frontmatter.heading}`,
                            }}
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }}
    />
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
