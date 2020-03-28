import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import GitHubCorner from 'react-github-corner'
import ShareButton from './sharebutton'

const LogoText = styled.span`
  font-size: 76px;
  font-family: 'Roboto Slab', sans-serif;
`

const LogoLink = styled(Link)`
  &,
  &:link,
  &:active,
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`

const HeroContainer = styled.div`
  background: linear-gradient(45deg, #ff0084, #33001b);
  text-align: center;
  padding: 29px 0;
  position: relative;
`

const HeroHeading = styled.h1`
  margin: 31px 0 0;

  img {
    height: auto;
    width: 400px;
    max-width: 80%;
    margin: 0 auto;
  }
`
const HeroSubheading = styled.h2`
  margin: 0 auto 40px;
  color: #fff;
  max-width: 660px;
  line-height: 1.5;
  font-weight: 100;
  font-size: 24px;
`

const ShareButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 4px;
  }
`

const Hero = ({ siteTitle, shareUrl, shareText }) => (
  <HeroContainer>
    <HeroHeading>
      <LogoLink to="/" title={siteTitle}>
        <LogoText>{siteTitle}</LogoText>
      </LogoLink>
    </HeroHeading>
    <HeroSubheading><b>A List of GitHub Repos with COVID-19 Resources</b></HeroSubheading>

    <ShareButtonGroup>
      {['twitter', 'reddit'].map(type => (
        <ShareButton key={type} type={type} shareText={shareText} shareUrl={shareUrl} />
      ))}
    </ShareButtonGroup>

    <GitHubCorner
      href="https://github.com/marcosmro/covid19-repos"
      bannerColor="#313d3e"
      size="100"
      svgStyle={{ zIndex: 300 }}
    />
  </HeroContainer>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
