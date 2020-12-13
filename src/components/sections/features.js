import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Remote Keyboard Shortcuts</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Standalone</FeatureTitle>
          <FeatureText>
            You only need an app on your MacOS without, client-side app is not
            required.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Cross-platform</FeatureTitle>
          <FeatureText>
            Works with any smartphone or tablet that can access the web.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Customization</FeatureTitle>
          <FeatureText>
            Easily add and change shortcuts to the source code with KBM-Robot.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Combo shortcuts</FeatureTitle>
          <FeatureText>
            Add a sequence of key combinations to enable routines.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
