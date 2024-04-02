import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  //imports: [RouterOutlet],
  template: `
  <main>
  <head>
  </head>
    <section class="content">
    <app-home></app-home>
    </section>
  </main>
  ` ,
  styleUrl: './app.component.css',
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'mercearia';
}
