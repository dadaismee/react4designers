import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
  background: black;
  height: 720px;
  background: url(${props => props.image});
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    padding: 0 40px 40px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 120px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px 480px;
  grid-template-rows: auto 100%;
  margin: 40px auto;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0; 
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 48px; 
  }
`

const SectionText = styled.p`
  margin: 0; 
  color: white;
  line-height: 1.45;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;  
  transform: rotate(180deg);
`

const Section = (props) => {
  return (
    <SectionGroup image={props.image}>
      <WaveTop><Wave /></WaveTop>
      <WaveBottom><Wave /></WaveBottom>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText> {props.text} </SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  )
}

export default Section