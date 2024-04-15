import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FormsModule],
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

  @Output()
  radioButtonFiltroSelecionadoChanged: EventEmitter<string> = new EventEmitter<string>();
  radioButtonFiltroSelecionado: string = 'todos';

  onRadioButtonFiltroSelecionadoChanged() {
    this.radioButtonFiltroSelecionadoChanged.emit(this.radioButtonFiltroSelecionado);
  }
}
