import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
@Component({
  standalone: true,
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, HomeComponent, HeaderComponent, FooterComponent, SidebarComponent, TopMenuComponent, ContainerComponent]
})
export class AppComponent {
  title = 'mercearia2';
}
