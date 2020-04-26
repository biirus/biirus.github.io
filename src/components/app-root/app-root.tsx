import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <app-nav></app-nav>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={1}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route group="pages" url="/:page*" component="app-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}