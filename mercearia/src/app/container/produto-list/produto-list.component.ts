import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoComponent } from './produto/produto.component';
import { FiltroComponent } from './filtro/filtro.component';

@Component({
  selector: 'produto-list',
  standalone: true,
  imports: [CommonModule, ProdutoComponent, FiltroComponent],
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
      estoque: 15,
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
      percentualDesconto: 0,
      estoque: 0,
      imagemURL: "assets/images/rapadura2.jpg",
      cores: ['azul', 'vermelha']
    }
  ];

  totalProdutos = this.produtoList.length;
  totalComEstoque = this.produtoList.filter(p => p.estoque > 0).length;
  totalSemEstoque = this.produtoList.filter(p => p.estoque === 0).length;
  
  radioButtonFiltroSelecionado: string = 'todos';

  onRadioButtonFiltroSelecionadoChanged(){
    console.log(this.radioButtonFiltroSelecionado);
    // console.log('chegou');
    // console.log(valor);
    // this.radioButtonFiltroSelecionado = valor;
  }
}
