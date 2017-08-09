import { Component, State } from '@stencil/core';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {

   @State() menu = [
    {
      title: 'Getting Started',
      url: '/docs',
      items: [
        { title: 'What is Stencil?', url: '/what-is-stencil' },
        { title: 'Getting Started', url: '/getting-started' },
      ]
    },
    {
      title: 'Basics',
      url: '/docs/basics',
      items: [
        { title: 'Components', url: '/components' },
        { title: 'Code Splitting', url: '/code-splitting'}
      ]
    },
    {
      title: 'Advanced',
      url: '/docs/advanced',
      items: [
        { title: 'Server Side Rendering', url: '/server-side-rendering' },
      ]
    },
    {
      title: 'Compiler',
      url:'/docs/compiler',
      items: [
        { title: 'Config', url: '/config' }
      ]
    },
    {
      title: 'API',
      url: '/docs/api',
      items: []
    }
  ];

  render() {
    return (
      <ion-col>
        <h2>Documentation</h2>
        <ul>
          {this.menu.map(s => {
            return (
              <li class="section"><stencil-route-link url={`s${s.url}`} router="#router" class="section-title" custom={true}>{s.title}</stencil-route-link>
                <ul>
                  {s.items.map(i => {
                    return (
                      <li><stencil-route-link url={`${s.url}${i.url}`} router="#router">{i.title}</stencil-route-link></li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </ion-col>
    )
  }
}