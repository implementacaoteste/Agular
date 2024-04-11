import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuList:string[] = ['Home', 'Contato'];
}
