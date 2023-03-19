import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaFlag } from "react-icons/fa";

export default class Timeline extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="divider is-centered"></div>
          <h2 className="title is-semibold has-text-centered is-spaced">
            Career Path
          </h2>
          <h4 className="subtitle is-6 has-text-centered is-compact">
            An overview of my career timeline shown below.
          </h4>

          <div className="timeline is-centered mt-3">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Now</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  March 2020
                </p>
                <p>
                  Launched the Website &nbsp;
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href="https://www.edsonfrainlar.com"
                  >
                    https://edsonfrainlar.com
                  </OutboundLink>
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2020</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  June 2019
                </p>
                <p>
                  Started the Facebook Page &nbsp;
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href="https://www.facebook.com/unionofindianstates/"
                  >
                    United States of India
                  </OutboundLink>
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  February 2019
                </p>
                <p>
                  Started the Facebook Page &nbsp;
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href="https://facebook.com/EdsonFrainlar"
                  >
                    Edson Frainlar
                  </OutboundLink>
                </p>
              </div>
            </div>
            {/* <header className="timeline-header">
              <span className="tag is-primary">2015</span>
            </header>
            <header className="timeline-header">
              <span className="tag is-primary">2014</span>
            </header> */}
            <header className="timeline-header">
              <span className="tag is-primary">2019</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  January 2018
                </p>
                <p>
                  Product Engineer at &nbsp;
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href="https://ktern.com"
                  >
                    KTern
                  </OutboundLink>
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2018</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  June 2017
                </p>
                <p>
                  Intern at &nbsp;
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href="https://www.kaartech.com/"
                  >
                   Kaar Technologies, India
                  </OutboundLink>
                </p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
