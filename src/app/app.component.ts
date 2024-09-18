import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <button routerLink="/bar/foo">Bar/Foo</button>
    <button routerLink="/bar">Bar</button>
    <hr />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-19-0-0-next-5-vite-pre-transform-error';
}
