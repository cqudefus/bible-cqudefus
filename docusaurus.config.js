// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cqudefus Bible',
  tagline: 'How we go about things at Cqudefus',
  url:'https://cqudefus.github.io/bible-cqudefus/',  
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cqudefus', // Usually your GitHub org/user name.
  projectName: 'cqudefus-bible', // Usually your repo name.
  
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cqudefus Bible',
        logo: {
          alt: 'Cqudefus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'people-group/people-at-cqudefus',
            position: 'left',
            label: 'People Group',
          },
          {
            type: 'doc',
            docId: 'engineering/engineering-at-cqudefus',
            position: 'left',
            label: 'Engineering',
          },
          {
            type: 'doc',
            docId: 'finance/finance-at-cqudefus',
            position: 'left',
            label: 'Finance',
          },
          {
            type: 'doc',
            docId: 'marketing/marketing-at-cqudefus',
            position: 'left',
            label: 'Marketing',
          },
          {
            type: 'doc',
            docId: 'sales/sales-at-cqudefus',
            position: 'left',
            label: 'Sales',
          },
          {
            type: 'doc',
            docId: 'legal/legal-at-cqudefus',
            position: 'left',
            label: 'Legal',
          },
    // Right side of the nav 
          {
            href: 'https://github.com/cqudefus/bible-cqudefus',
            label: 'Github',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/cqudefus/',
            label: 'Instagram',
            position: 'right',
          },
          {
            href: 'https://twitter.com/cqudefus',
            label: 'Twitter',
            position: 'right',
          },
          // {
          //   href: 'https://twitter.com/cqudefus',
          //   label: 'Youtube',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/introduction',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Cqudefus Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
