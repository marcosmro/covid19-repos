const { oneLine, stripIndent } = require('common-tags')

const description = oneLine`
  StaticGen is a leaderboard of the top open source static site generators. Promoting a static
  approach to building websites.
`

module.exports = {
  siteMetadata: {
    url: 'http://covid19repos.com',
    title: `COVID-19 Repos`,
    description: oneLine`
      Kick off your next, great Gatsby project with this default starter. This barebones starter
      ships with the main Gatsby configuration files you might need.
    `,
    author: `@netlify`,
    image: 'https://staticgen.com/images/staticgen.png',
    repo: 'https://github.com/netlify/staticgen',
    homeTitle: 'COVID19Repos | Top COVID-19 Repos',
    subtitle: 'A list of GitHub repos with COVID-19 (coronavirus) resources',
    description,
    socialPreviewImageFilename: 'staticgen.png',
    shareButtons: ['twitter', 'reddit'],
    shareText: 'Check out COVID19Repos.com, a leaderboard of COVID-19 projects and resources.',
    shareTextProjectStart: 'Check out ',
    shareTextProjectEnd: ', a leaderboard of COVID-19 projects and resources.',
    footerMarkdown: oneLine`
      COVID19repos.com
    `,
    copyrightName: 'M2R',
    promoMarkdown: stripIndent`
      ## Get started with one click!

      For generators with the "Deploy to Netlify" button, you can deploy a new site from a template
      with one click. Get HTTPS, continuous delivery, and bring a custom domain, free of charge.

      Want your own Deploy to Netlify button? [Learn more
      here](https://www.netlify.com/docs/deploy_button/).
    `,
    navLinks: [
      { url: 'https://jamstack.org', text: 'About JAMstack' },
      { url: 'https://headlesscms.org', text: 'Need a Static CMS?' },
    ],
    fallbackSortField: 'title',
    sorts: [
      { field: 'stars', label: 'Stars (7 days)', reverse: true, days: 7 },
      { field: 'stars', label: 'Stars (30 days)', reverse: true, days: 30 },
      { field: 'stars', label: 'Stars (total)', reverse: true },
      {
        field: 'followers',
        label: 'Followers (7 days)',
        reverse: true,
        days: 7,
      },
      {
        field: 'followers',
        label: 'Followers (30 days)',
        reverse: true,
        days: 30,
      },
      { field: 'followers', label: 'Followers (total)', reverse: true },
      { field: 'title', label: 'Title' },
    ],
    filters: [
      { field: 'type', emptyLabel: 'Any Type', multiple: true },
      { field: 'language', emptyLabel: 'Any Language', multiple: true },
      { field: 'format', emptyLabel: 'Any Format', multiple: true },
      // { field: 'templates', emptyLabel: 'Any Template', multiple: true },
      { field: 'license', emptyLabel: 'Any License', multiple: true },
    ],
    fields: [
      { name: 'type', label: 'Types' },
      { name: 'language', label: 'Languages' },
      { name: 'format', label: 'Formats' },
      // { name: 'templates', label: 'Templates' },
      { name: 'license', label: 'License' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162115057-1",
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
