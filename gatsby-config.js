/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Konspekt`,
    description: `Blah-blah`,
    keywords: `Blah`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    { 
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vo3bhh1p1b92',
        accessToken: 'kQH3Vtvpg3MmFUlBVtoT9PX-T2gZmjQ-le7koAX7UJo'
      }
    }
  ],
}
