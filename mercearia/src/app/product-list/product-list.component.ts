import { Component } from '@angular/core';
import { BuscarComponent } from './buscar/buscar.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [BuscarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  adicionarAoCarrinho: number = 0;
  produto = {
    nome: "Rapadura",
    preco: 789,
    cor: "Amarelo",
    percentualDesconto: 8.5,
    estoque: 9,
    codigoBarra: 123456
  }

  getPrecoComDesconto() {
    return this.produto.preco - (this.produto.percentualDesconto / 100 * this.produto.preco);
  }
  
  ajustarCarrinho(quantidade: any) {
    this.adicionarAoCarrinho += quantidade;
    if (this.adicionarAoCarrinho < 0)
      this.adicionarAoCarrinho = 0;
    else if (this.adicionarAoCarrinho > this.produto.estoque)
      this.adicionarAoCarrinho = this.produto.estoque;
  }
}
