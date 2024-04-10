import { Component } from '@angular/core';
import { BuscarComponent } from './buscar/buscar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [BuscarComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  stringList: string[] = ['Arroz', 'Feijão', 'Rapadura', 'Chiclete']
}
