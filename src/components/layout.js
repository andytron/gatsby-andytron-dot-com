import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navbar from "./navbar"

import { rhythm, scale } from "../utils/typography"
import "../../src/styles.scss"
import IconGithub from '../img/icon-github.svg'
import IconLinkedin from '../img/icon-linkedin.svg'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/mixes`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            lineHeight: 1.4,
          }}
        >
          <Link
            className="header__link"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#262626`,
            }}
            to={location.pathname === blogPath ? `/mixes` : `/`}
          >
            Hello, I'm Andrew Huang
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            fontFamily: `Inknut Antiqua, sans-serif`,
            marginTop: 0,
            lineHeight: 1.4,
          }}
        >
          <Link
            className="header__link"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#262626`,
            }}
            to={location.pathname.includes(blogPath) ? `/mixes` : `/`}
          >
            {location.pathname.includes(blogPath) ? 'Andrew Huang, A Sometimes DJ' : title}
          </Link>
        </h1>
      )
    }
    return (
      <Wrapper>
        <Navbar />
        <div
          style={{
            position: `relative`,
            top: `3.25rem`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer className="footer">
          © {new Date().getFullYear()} <Link to="/">Andrew Huang</Link>{" "}
          <div className="footer__social">
            <a href="//linkedin.com/in/mrandrewhuang" className="footer__social--link">
              <IconLinkedin />
            </a>
            <a href="//github.com/andytron" className="footer__social--link">
              <IconGithub />
            </a>
          </div>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
