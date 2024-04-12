import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input()
  produto: {
    id: number,
    nome: string,
    descricao: string,
    cores: string[],
    categoria: string,
    estoque: number,
    imagemURL: string
    preco: number,
    percentualDesconto?: number,
    marca: string,
  };
}
