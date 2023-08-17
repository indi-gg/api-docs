// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lndiGG Leaderboard Protocol',
  tagline:
    'A competitive gaming platform that allows your players to Play, Own & Earn and Experience a host of engaging on-chain quests, tournaments and NFTs in an existing or new game.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://api-docs.indi.gg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'indi.gg', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: 'apiDocs',
    //     docsPluginId: 'classic',
    //     config: {
    //       petstore: {
    //         // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
    //         specPath: 'examples/petstore.yaml', // Path to designated spec file
    //         outputDir: 'api/petstore', // Output directory for generated .mdx docs
    //         sidebarOptions: {
    //           groupPathsBy: 'tag',
    //         },
    //       },
    //       burgers: {
    //         specPath: 'examples/food/burgers/openapi.yaml',
    //         outputDir: 'api/food/burgers',
    //       },
    //     },
    //   },
    // ],
  ],

  // themes: ['docusaurus-theme-openapi-docs'], // Allows use of @theme/ApiItem and other components

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        // defaultMode: 'light',
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'lndiGG Tournament Protocol',
        logo: {
          alt: 'IndiGG Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://indi.gg',
            label: 'indiGG',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/igg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/IndiGG_DAO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'indi.gg',
                href: 'https://indi.gg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Indi.gg, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      languageTabs: [
        {
          highlight: 'bash',
          language: 'curl',
          logoClass: 'bash',
        },
        {
          highlight: 'python',
          language: 'python',
          logoClass: 'python',
          variant: 'http.client',
        },
        {
          highlight: 'go',
          language: 'go',
          logoClass: 'go',
        },
        {
          highlight: 'javascript',
          language: 'nodejs',
          logoClass: 'nodejs',
          variant: 'axios',
        },
        {
          highlight: 'csharp',
          language: 'csharp',
          logoClass: 'csharp',
          variant: 'httpclient',
        },
        {
          highlight: 'java',
          language: 'java',
          logoClass: 'java',
          variant: 'unirest',
        },
      ],
    }),
};

module.exports = config;
