import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle="404: Not found" />
    <section className="section has-text-centered">
      <h1 className="title">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
