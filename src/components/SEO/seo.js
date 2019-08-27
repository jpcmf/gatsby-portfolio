import React from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import ogImage from '../../assets/images/jpcmf-2019.jpg'

const siteQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
  }
`

const SEO = ({ pageTitle, description, meta }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={pageTitle || data.site.siteMetadata.title}
        titleTemplate={pageTitle}
        // titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: "description", content: description },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:creator", content: data.site.siteMetadata.author },
          { name: "twitter:title", content: pageTitle },
          { name: "twitter:description", content: description },
          { property: "og:title", content: pageTitle },
          { property: "og:description", content: description },
          { property: "og:type", content: "website" },
          { property: "og:url", content: data.site.siteMetadata.siteUrl },
          { property: "og:image", content: `${data.site.siteMetadata.siteUrl}${ogImage}` },
        ].concat(meta)}
      />
    )}
  />
)

SEO.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  pageTitle: null,
  description: '',
  meta: [],
};

export default SEO;
