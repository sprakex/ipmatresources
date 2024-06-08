
export default {
  title: 'IPMAT Resources',
  base: "/ipmatresources",
  description: 'Resources for IPMAT',
  drSrc: './',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],

    themeConfig: {

      footer: {
        message: 'Made with ❤️ by <a href="https://www.reddit.com/user/sprakex/">sprakex</a>'
      },
      
      nav: [  
        { text: 'Home', link: '/' },
        { text: 'Reddit', link: 'https://www.reddit.com/r/IPMATtards/' }
      ],
      search: {
        provider: 'local'
      },
      siteTitle: '🌳 IPMAT Resources',
      sidebar: [
        {
          text: 'Resources',
          items: [
            { text: '🔢 Quantitative Ability', link: '/quantitative-ability.md' },
            { text: '🗣️ Verbal Ability', link: '/verbal-ability.md' },
            { text: '🧩 Logical Reasoning', link: '/logical-reasoning.md' },
            { text: '📃 PYQs / Mock Tests', link: '/pyq-mock' },
          ]
        }
      ]
    }
  }
