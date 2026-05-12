import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kogorou Blog',
  tagline: '记录想法、技术笔记和学习过程',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kogorou0105-bit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kogorou-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kogorou0105-bit', // Usually your GitHub org/user name.
  projectName: 'kogorou-blog', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function fixedBrowserTitlePlugin() {
      return {
        name: 'fixed-browser-title',
        getClientModules() {
          return [path.resolve(__dirname, './src/clientModules/keepBrowserTitle.ts')];
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kogorou Blog',
      logo: {
        alt: 'Kogorou Blog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: '首页', position: 'left', exact: true},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '笔记',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/about', label: '关于', position: 'left'},
        {
          href: 'https://github.com/kogorou0105-bit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '站点',
          items: [
            {
              label: '关于本站',
              to: '/about',
            },
            {
              label: '笔记',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '内容',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: '标签',
              to: '/blog/tags',
            },
          ],
        },
        {
          title: '分类',
          items: [
            {
              label: 'Workflow',
              to: '/blog/tags/workflow',
            },
            {
              label: 'AI Engineering',
              to: '/blog/tags/ai-engineering',
            },
            {
              label: 'Personal',
              to: '/blog/tags/personal',
            },
          ],
        },
        {
          title: '项目',
          items: [
            {
              label: '改造记录',
              to: '/docs/project-notes/kogorou-blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kogorou0105-bit',
            },
            {
              label: '站点源码',
              href: 'https://github.com/kogorou0105-bit/kogorou-blog',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: 'Docusaurus 文档',
              href: 'https://docusaurus.io/docs',
            },
            {
              label: 'MDN Web Docs',
              href: 'https://developer.mozilla.org/',
            },
            {
              label: 'React 文档',
              href: 'https://react.dev/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kogorou Blog. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
