import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'produto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent {
  produtoList = [
    {
      id: 1,
      nome: "Rapadura",
      descricao: "asd asdf asdferer",
      marca: "Nestlé",
      categoria: "Novo",
      preco: 200,
      percentualDesconto: 15,
      imagemURL: "assets/images/123456.jpg",
      cores: ['azul', 'amarela', 'laranja']
    },
    {
      id: 2,
      nome: "Cocada",
      descricao: "ddfdf dfdfdf",
      marca: "Garoto",
      categoria: "Quase nova",
      preco: 150,
      percentualDesconto: 15,
      imagemURL: "cocada.png",
      cores: ['azul', 'vermelha']
    }
  ]
}
