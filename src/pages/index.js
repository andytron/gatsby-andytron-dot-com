import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/carousel"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Andrew Huang, Front End Developer"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `front end developer`, `javascript`, `andrew huang`]}
        />

        <img
          style={{ margin: 0 }}
          src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=cellular-automata&cells=10"
          alt="Cover Placeholder"
        />

        <h2 className="subhead__text">A front end web developer based in New York City.</h2>
        <p>Currently, I work as a developer at Dotdash.</p>

        <HomeCarousel />

        <p>Unfortunately, I'm neither the YouTube musician, the filmmaker, nor the hacker. Though I don't mind all sharing the same name, and I respect their crafts equally.</p>
      </Layout>
    )
  }
}

export default IndexPage
