const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'OpenTezos',
  tagline: 'The full encyclopedia of Tezos',
  url: 'https://opentezos.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Octo-Technology',
  projectName: 'opentezos',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'YW41129NVN',
      // Public API key: it is safe to commit it
      apiKey: '16bccd1e569227f209e9dc8330e84a98',
      indexName: 'opentezos',
      // Optional: see doc section below
      contextualSearch: false,

    },
    navbar: {
      logo: {
        alt: 'OpenTezos',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          href: 'https://gitlab.com/tezos-paris-hub/opentezos/',
          label: 'Gitlab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OpenTezos.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
    },
    siteID: 'developers',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./src/sidebar/sidebar.js'),
          routeBasePath: '/',
          editUrl: 'https://gitlab.com/tezos-paris-hub/opentezos/-/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('./plugins/webpack'), 'plugin-image-zoom'],
}
