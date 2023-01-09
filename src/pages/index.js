import React from 'react'
import { graphql, Link } from 'gatsby'
import * as images from '../images/index'
import Card from '../components/Card'
import Header from '../components/Header'
import "./index.css"
import Wave from '../components/Wave'
import Section from '../components/Section'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero__group">
          <h1>Learn to <br /> design and code <br /> React apps</h1>
          <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="hero__group-logos">
            <img src={images.logo_sketch} width="50" alt="figma" />
            <img src={images.logo_figma} width="50" alt="figma" />
            <img src={images.logo_framer} width="50" alt="figma" />
            <img src={images.logo_react} width="50" alt="figma" />
            <img src={images.logo_swift} width="50" alt="figma" />
            <img src={images.logo_studio} width="50" alt="figma" />
          </div>
          <Wave />
        </div>
      </div>
      <div className="cards">
      <h2>11 courses, more coming</h2>
        <div className="cards__group">
          <Card 
            title="React for designers"
            text="10 sections"
            img={images.wallpaper}
          />
          <Card 
          title="Framer for designers"
          text="12 sections"
          img={images.wallpaper2}
          />
          <Card 
            title="Sketch"
            text="8 sections"
            img={images.wallpaper3}
          />
          <Card 
            title="Swift for designers"
            text="16 sections"
            img={images.wallpaper4}
          />
        </div>
      </div>
      <Section 
        image={images.wallpaper2}
        logo={images.logo_react}
        title='React for designers'
        text='Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.'
      />
      <Footer data={data} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink( sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
`