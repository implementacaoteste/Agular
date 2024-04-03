import { Component } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[ProdutoComponent],
})
export class HomeComponent {
  
}
