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
              <div className="hero-head"></div>
              <div className="hero-body hero-center">
                <div className="container">
                  <div className="columns is-vcentered">
                    <div className="column is-12 landing-caption">
                      {/* <figure className="image">
                        <img
                          className="is-rounded hero-avatar u-photo"
                          src="/img/edson-frainlar.jpg"
                          alt="Edson Frainlar"
                        />
                      </figure> */}
                      <h1 className="head-name">
                        {page.frontmatter.heading}
                      </h1>
                      <h2 className="subtitle is-light is-thin p-note">
                        {page.frontmatter.subheading}
                      </h2>
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
      }
    }
  }
`;
