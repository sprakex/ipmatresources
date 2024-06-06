export default {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Submit Resources', link: '/submit-resources.md' },
        { text: 'Reddit', link: 'https://www.reddit.com/r/IPMATtards/' }
      ],
      siteTitle: 'IPMAT Resources',
      sidebar: [
        {
          text: 'Resources',
          items: [
            { text: '🔢 Quantitative Ability', link: '/quantitative-ability.md' },
            { text: '🗣️ Verbal Ability', link: '/verbal-ability.md' },
            { text: '🧩 Logical Reasoning', link: '/logical-reasoning.md' },
          ]
        }
      ]
    }
  }