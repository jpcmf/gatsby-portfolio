import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from "../components/seo";
import Card from '../components/card';
import Title from '../components/Title';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const queryImage = graphql`
  query {
    project1: file(relativePath: { eq: "jpcmf-2019.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Projects | JPCMF Front-end Developer and UI Designer"
      description="Welcome to my Portfolio. I am a UI Designer and Front-end Developer based in Curitiba, Brazil."
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title children="Projects" />
      <p className="has-text-centered">
        Some of my projects, see more on my{" "}
        <a
          href="https://github.com/jpcmf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="UI Marista"
            subtitle="August 2019"
            link="https://marista.netlify.com"
            image={<Img fixed={data.project1.childImageSharp.fixed} />}
            tags={["Boostrap"]}
          />
          <Card
            title="Ebanx Careers"
            subtitle="July 2018"
            link="https://ebanx.netlify.com"
            image={<Img fixed={data.project1.childImageSharp.fixed} />}
            tags={["JavaScript", 'Bootstrap', 'SASS']}
          />
        </div>
      </div>

      <ul className="has-text-centered">
        <li>
          <a
            href="https://cr-contacts.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compacto Records Contacts <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

Projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Projects;

