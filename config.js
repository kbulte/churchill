const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.we-futurize.be',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/kbulte/churchill/master/public/static/Churchill-logo.svg',
    logoLink: 'https://raw.githubusercontent.com/kbulte/churchill/master/public/static/Churchill-logo.svg',
    title: "documentation site",
    githubUrl: 'https://github.com/kbulte/churchill',
    helpUrl: '',
    tweetText: '',
    social: `<!--li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li-->`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'We Futurize', link: 'https://www.we-futurize.be' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "The courage to decide",
  },
  siteMetadata: {
    title: 'Churchill | the courage of making decisions',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/kbulte/churchill/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Churchill',
      short_name: 'Churchill',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
