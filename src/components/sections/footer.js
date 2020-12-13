import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Docs</span>
        <ul>
          <li>
            <FooterLink target="_blank" href="https://www.electronjs.org/">
              Electron.js
            </FooterLink>
          </li>
          <li>
            <FooterLink
              target="_blank"
              href="https://github.com/kylepaulsen/kbm-robot"
            >
              KBM-Robot
            </FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Links</span>
        <ul>
          <li>
            <FooterLink
              target="_blank"
              href="https://github.com/rico157/between-spaces"
            >
              GitHub
            </FooterLink>
          </li>
          <li>
            <FooterLink
              target="_blank"
              href="https://github.com/rico157/between-spaces/releases"
            >
              Downloads
            </FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>About me</span>
        <ul>
          <li>
            <FooterLink target="_blank" href="https://rico157.github.io/">
              Portfolio
            </FooterLink>
          </li>
          <li>
            <FooterLink target="_blank" href="https://github.com/rico157">
              GitHub
            </FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>
            <FooterLink
              target="_blank"
              href="https://www.linkedin.com/in/riccardo-cogoni/"
            >
              LinkedIn
            </FooterLink>
          </li>
          <li>
            <FooterLink
              target="_blank"
              href="https://twitter.com/riccardo_cogoni"
            >
              Twitter
            </FooterLink>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>Between Spaces</Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.regular};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

const FooterLink = styled.a`
  text-decoration: none;
`

export default Footer
