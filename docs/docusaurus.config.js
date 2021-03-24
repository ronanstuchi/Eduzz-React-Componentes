const vsDark = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Houston',
  tagline: 'Eduzz Houston Design System',
  url: 'https://eduzz.github.io',
  baseUrl: '/houston/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eduzz',
  projectName: 'houston',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    prism: {
      theme: vsDark,
      darkTheme: vsDark
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {}
    },
    navbar: {
      title: 'HOUSTON',
      style: 'dark',
      logo: {
        alt: 'Houston - Design System',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Design',
          position: 'right'
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Conteúdo',
          position: 'right'
        },
        {
          to: 'docs/',
          activeBasePath: 'src/pages/docs',
          label: 'Componentes',
          position: 'right'
        },
        {
          href: 'https://github.com/eduzz/houston/releases',
          label: 'Versões',
          position: 'right'
        },
        {
          href: 'https://github.com/eduzz/houston',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Houston by Eduzz.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/eduzz/houston/tree/master/docs'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/eduzz/houston/tree/master/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      }
    ]
  ]
};
