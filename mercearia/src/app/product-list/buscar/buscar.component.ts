import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  textoPesquisa: string = "Homens de guerra";

  atualizarTextoPesquisa(event: any){
    this.textoPesquisa = event.target.value;
  }
}
