// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'Extrinsec';
const projectName = 'appdefender';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Extrinsec AppDefender',
  tagline: 'Real-time Application Protection',
  url: process.env.CUSTOM_DOMAIN,
  baseUrl: `/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    AWS_LAYER_VERSIONS_URL: process.env.AWS_LAYER_VERSIONS_URL
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
        title: '',
        logo: {
          alt: 'Extrinsec Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
          href: 'https://www.extrinsec.com',
        },
        items: [
          {
            href: 'https://app.extrinsec.com',
            position: 'left',
            label: 'Dashboard',
            'aria-label': 'Extrinsec Dashboard',
          },
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Homepage',
          },
          {
            type: 'doc',
            docId: 'quick-start-guide',
            position: 'left',
            label: 'Quick Start Guide',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Extrinsec, LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
