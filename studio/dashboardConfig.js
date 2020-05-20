export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec495da27cd521cb926681d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zj14u6qu',
                  apiId: '4a623ef4-c8d7-4092-ac6a-43a6c5616b81'
                },
                {
                  buildHookId: '5ec495da51bc06c777614291',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pcenh13k',
                  apiId: '9d609c56-25f0-4743-ac35-229ac647251c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rogermoka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pcenh13k.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
