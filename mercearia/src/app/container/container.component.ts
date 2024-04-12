import { Component } from '@angular/core';
import { BuscarComponent } from './buscar/buscar.component';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BuscarComponent, CommonModule, ProdutoListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  produtoList: string[] = ['Arroz', 'Feijão', 'Rapadura', 'Chiclete']
}
