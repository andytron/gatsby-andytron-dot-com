import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Bio from "../components/bio"

class Work extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Work" />
        <div className="work">
          <h2>Work</h2>

          <h3>Engine Digital</h3>

          <p>Shopify ecommerce sites: <a href="https://zoneoffroad.com/">Zone Offroad</a> / <a href="https://www.raceface.com/">RaceFace</a> (Fox Factory), <a href="https://www.loloirugs.com/">Loloi Rugs</a></p>
          <p>Ecommerce replatforms: <a href="https://www.concordtheatricals.com/">Concord Theatricals / Samuel French</a></p>
          <p>Marketing sites: <a href="https://www.3-form.com/">3form</a></p>

          <h3>Forbes Media</h3>

          <p>Lists: <a href="https://www.forbes.com/30-under-30-2017/">Forbes 30 Under 30</a>, <a href="https://www.forbes.com/forbes-400/">Forbes 400</a>, <a href="https://www.forbes.com/self-made-women/">Self-Made Women</a></p>
          <p>Sponsored content: <a href="https://www.forbes.com/united/street-to-street/">United Airlines</a>, <a href="https://www.forbes.com/delltechnologies/changeagents/">Dell</a>, <a href="https://www.forbes.com/oppenheimerfunds/the-new-opportunities/">Oppenheimer Funds</a>, <a href="https://www.forbes.com/vanguard/destination-retirement/">Vanguard</a>, <a href="https://www.forbes.com/hennessy/moments-of-precision/">Hennessy</a></p>
          <p>Verticals: Forbes Podcasts</p>

          <h3>CV</h3>

          <a href="/ah-resume.pdf" download>
            <Button marginTop="35px">Resumé</Button>
          </a>

          <h4>Web Development & Agile</h4>
          <ul>
            <li>JavaScript/ES6, jQuery</li>
            <li>HTML5, CSS3/SCSS/Sass, BEM, Tailwind CSS</li>
            <li>Vue.js/Vuex, React/Redux, AngularJS/2, Laravel</li>
            <li>Nuxt, GatsbyJS, Shopify, Statamic</li>
            <li>Prismic, WordPress, Netlify</li>
            <li>Git, Bitbucket</li>
            <li>Jira, Confluence, Miro</li>
            <li>Web Accessibility, Responsive Design, Cross Browser Compatability</li>
          </ul>

          <h4>Design</h4>
          <ul>
            <li>Photoshop, Illustrator</li>
            <li>Sketch, InVision</li>
          </ul>

          <a href="mailto:mr.andrew.huang@gmail.com">
            <Button marginTop="35px" marginBottom="35px">Contact</Button>
          </a>
          <Bio />
        </div>
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
