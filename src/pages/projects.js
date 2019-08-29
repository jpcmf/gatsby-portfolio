import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from "../components/SEO";
import Card from '../components/Card';
import Title from '../components/Title';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const queryImage = graphql`
  query {
    project1: file(relativePath: { eq: "icon-code.png" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
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
            CR Contact List <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </li>
        <li>
          <a
            href="https://consultacnpj.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta CNPJ <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </li>
      </ul>
      <hr />
      <p className="has-text-centered">
        <small>Back to <Link to="/">Home</Link>.</small>
      </p>
    </section>
  </Layout>
)

Projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Projects;
