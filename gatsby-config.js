module.exports = {
  siteMetadata: {
    title: 'hew.tools',
    author: 'Matthew Jones'
  },
  plugins: [
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46783407-3",
        anonymize: true,
      }
    }
  ]
}
