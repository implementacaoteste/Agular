import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {
  @Input()
  todos: number = 0;

  @Input()
  comEstoque: number = 0;

  @Input()
  semEstoque: number = 0;
}
