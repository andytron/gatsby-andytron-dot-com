import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const AllPosts = ({ posts }) => (
  <div style={{ margin: "20px 0 40px" }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link className="mixes__link" style={{ boxShadow: `none` }} to={`/mixes${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `From the ${node.frontmatter.date} mix archive` || node.frontmatter.description,
            }}
          />
        </div>
      )
    })}
  </div>
)

export default AllPosts
