import React from 'react';
import PropTypes from "prop-types"
import { Link, graphql } from 'gatsby';
// import Img from "gatsby-image"

import Layout from '../components/layout';
import SEO from "../components/seo";
import Card from '../components/card';
import Title from '../components/Title';

export const queryImage = graphql`
  query {
    blog1: file(relativePath: { eq: "jpcmf-2019.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO
      pageTitle="Blog | JPCMF Front-end Developer and UI Designer"
      description="Welcome to my Portfolio. I am a UI Designer and Front-end Developer based in Curitiba, Brazil."
    />
    <section className="section is-size-4-desktop is-size-5-touch">
      <Title
        children="Blog"
      />
      <p className="has-text-centered">
        Follow me on{" "}
        <a
          href="https://www.twitter.com/jpcmf80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        and{" "}
        <a
          href="https://medium.com/@jpcmf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>{" "}
        to read more topics of tech.
      </p>
      <div className="columns is-centered">
        <div className="column is-half">
          <Card
            title="Criar e-mail gratuito usando apenas seu domínio .com.br"
            subtitle="January 2019"
            link="https://medium.com/@jpcmf/criar-e-mail-gratuito-usando-apenas-seu-dom%C3%ADnio-com-br-56a27afad95"
            // image={<Img fixed={data.blog1.childImageSharp.fixed} />}
            tags={["Zoho", "Zohomail", "Free", "Email", "Tutorial"]}
          />
        </div>
      </div>
      <hr />
      <p className="has-text-centered">
        <small>Back to <Link to="/">Home</Link>.</small>
      </p>
    </section>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog;

