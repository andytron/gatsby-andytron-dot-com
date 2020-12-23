import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import AllPosts from "../components/allPosts"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Mixes" />
        <div className="mixes">
          <p><em>From 2008-2013, I moonlighted as a DJ in Los Angeles under the moniker <a href={`https://soundcloud.com/${data.site.siteMetadata.social.soundcloud}`}>Heavy Accents</a>. The name was inspired by a blogger's description (which has since vanished into the digital void) of the music for Norwegian band Datarock.</em></p>
          <p><em>It was an apt description for the type of music I realized I was listening to often, one where the English was not the vocalist's native language (and hence being sung with an accent).</em></p>
          <AllPosts posts={posts} />
          <Link to="/">
            <Button marginTop="85px">Go Home</Button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          soundcloud
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`
