import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Img from "gatsby-image";

import { faGithub, faTwitter, faMedium, faLinkedin, faBehance, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const Home = () => (
  <Layout>
    <SEO
      pageTitle="Home | JPCMF Front-end Developer and UI Designer"
      description="Welcome to my Portfolio. I am a Front-end Developer and UI Designer based in Curitiba, Brazil."
    />
    <figure className="image is-128x128 photo">
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "jpcmf-2019.jpg" }) {
              childImageSharp {
                fixed(width: 128, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fixed={data.file.childImageSharp.fixed}
            imgStyle={{ borderRadius: "64px" }}
            alt="JPCMF"
          />
        )}
      />
    </figure>
    <h1 className="subtitle has-text-centered has-text-light">@JPCMF</h1>
    {/* <h2 className="subtitle has-text-centered">Front-end Developer and UI Designer</h2> */}
    <div className="social-icons has-text-centered">
      <a href={"https://github.com/jpcmf"} target="_blank" rel="noopener noreferrer" arial-label="github">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </span>
      </a>
      <a href="https://twitter.com/jpcmf80" target="_blank" rel="noopener noreferrer" arial-label="twitter">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </span>
      </a>
      <a href="https://medium.com/@jpcmf" target="_blank" rel="noopener noreferrer" arial-label="medium">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/joaopaulo80" target="_blank" rel="noopener noreferrer" arial-label="linkedin">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </span>
      </a>
      <a href="https://www.behance.net/jpcmf" target="_blank" rel="noopener noreferrer" arial-label="behance">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faBehance} size="2x" />
        </span>
      </a>
      <a href="https://pt.stackoverflow.com/users/8050/jpcmf80" target="_blank" rel="noopener noreferrer" arial-label="stackoverflow">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </span>
      </a>
    </div>
    <section className="section content has-text-centered is-size-4-desktop is-size-5-touch">
      <h4 className="title has-text-light">Hi, you can call me João :)</h4>
      <p>
        I am a Front-end Developer and UI Designer from Brazil based in
        Curitiba.
      </p>
      <p>
        Check out my <Link to="/projects">Projects</Link>.
      </p>
    </section>
  </Layout>
)

export default Home;
